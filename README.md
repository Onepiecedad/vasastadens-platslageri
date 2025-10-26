# Vasastadens Plåtslageri AB - Website

A professional website for Vasastadens Plåtslageri AB, a roofing and façade company based in Göteborg, Sweden, established in 1973.

## Overview

This is a full-stack web application built with:
- **Frontend**: React with React Router for navigation
- **Backend**: FastAPI (Python)
- **Database**: MongoDB
- **Styling**: Tailwind CSS with custom industrial design theme

## Features

### Pages
- **Home** (`/`) - Hero section, services overview, company highlights
- **Services** (`/tjanster`) - Service categories overview
  - Service Details pages for: Takarbeten, Fasadplåt, Service, Entreprenad
- **Projects** (`/projekt`) - Portfolio of completed projects with filtering
  - Individual project detail pages (`/projekt/:slug`)
- **About Us** (`/om-oss`) - Company history, values, and timeline
- **Contact** (`/kontakt`) - Contact form and company information
- **Recruitment** (`/rekrytering`) - Job openings and application form
- **Privacy Policy** (`/integritet`) - GDPR-compliant privacy policy
- **404 Page** - Custom not found page

### Design
- **Color Palette**: 
  - Base: Dark granite (#1a1a1a)
  - Accents: Copper (#b87333) and Navy (#1e3a5f)
  - Light text on dark backgrounds
- **Typography**: Inter font family, 36-48px headings, 16-18px body text
- **Layout**: Maximum width 1200px, 8pt spacing grid
- **Responsive**: Fully responsive across all devices

### Backend API Endpoints

- `GET /api/` - Health check
- `POST /api/contact` - Submit contact form
- `POST /api/jobs` - Submit job application
- `GET /api/projects` - Get all projects
- `GET /api/projects/:slug` - Get single project by slug

## Adding New Projects

Projects are stored in `/app/backend/projects.json`. To add a new project:

1. Open `/app/backend/projects.json`
2. Add a new object with the following structure:

```json
{
  "slug": "unique-project-slug",
  "title": "Project Title",
  "category": "Takarbeten|Fasadplåt|Service|Entreprenad",
  "location": "Location, City",
  "year": "2024",
  "description": "Short description",
  "longDescription": "Detailed project description",
  "services": ["Service 1", "Service 2"],
  "imageUrl": "https://image-url.com/image.jpg",
  "featured": true|false
}
```

3. Save the file - changes are immediately available via the API

## Technology Stack

- **Frontend Framework**: React 19.0.0
- **Routing**: React Router DOM 7.5.1
- **HTTP Client**: Axios 1.8.4
- **UI Components**: Lucide React (icons)
- **Styling**: Tailwind CSS 3.4.17
- **Backend Framework**: FastAPI 0.110.1
- **Database**: MongoDB with Motor (async driver)
- **Validation**: Pydantic 2.6.4+

## Contact

Vasastadens Plåtslageri AB
Vasagatan 12
411 24 Göteborg
Sweden

Phone: 031-123 456
Email: info@vasastadens.se

---

Built for Vasastadens Plåtslageri AB
