from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone
import json


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# Contact Form Models
class ContactFormSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: str
    service: str
    message: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class ContactFormCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    service: str
    message: str

# Job Application Models
class JobApplication(BaseModel):
    model_config = ConfigDict(extra="ignore")
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    phone: str
    position: str
    experience: str
    message: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class JobApplicationCreate(BaseModel):
    name: str
    email: EmailStr
    phone: str
    position: str
    experience: str
    message: str

# Project Model
class Project(BaseModel):
    slug: str
    title: str
    category: str
    location: str
    year: str
    description: str
    longDescription: str
    services: List[str]
    imageUrl: str
    featured: bool

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Vasastadens Plåtslageri API"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# Contact Form Endpoint
@api_router.post("/contact", response_model=ContactFormSubmission)
async def submit_contact_form(input: ContactFormCreate):
    form_dict = input.model_dump()
    form_obj = ContactFormSubmission(**form_dict)
    
    doc = form_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.contact_submissions.insert_one(doc)
    return form_obj

# Job Application Endpoint
@api_router.post("/jobs", response_model=JobApplication)
async def submit_job_application(input: JobApplicationCreate):
    app_dict = input.model_dump()
    app_obj = JobApplication(**app_dict)
    
    doc = app_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.job_applications.insert_one(doc)
    return app_obj

# Projects Endpoints
@api_router.get("/projects", response_model=List[Project])
async def get_projects():
    """Get all projects from JSON file"""
    try:
        projects_file = ROOT_DIR / 'projects.json'
        with open(projects_file, 'r', encoding='utf-8') as f:
            projects_data = json.load(f)
        return projects_data
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Projects data not found")
    except json.JSONDecodeError:
        raise HTTPException(status_code=500, detail="Invalid projects data")

@api_router.get("/projects/{slug}", response_model=Project)
async def get_project_by_slug(slug: str):
    """Get a single project by slug"""
    try:
        projects_file = ROOT_DIR / 'projects.json'
        with open(projects_file, 'r', encoding='utf-8') as f:
            projects_data = json.load(f)
        
        project = next((p for p in projects_data if p['slug'] == slug), None)
        if not project:
            raise HTTPException(status_code=404, detail=f"Project with slug '{slug}' not found")
        
        return project
    except FileNotFoundError:
        raise HTTPException(status_code=404, detail="Projects data not found")
    except json.JSONDecodeError:
        raise HTTPException(status_code=500, detail="Invalid projects data")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()