import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import axios from 'axios';
import Projects from '@/pages/Projects';
import { API_BASE } from '@/lib/api';

vi.mock('axios');
vi.mock('@/hooks/useScrollToHero', () => ({
  useScrollToHero: () => {},
}));

describe('Projects page', () => {
  const sampleProjects = [
    {
      slug: 'project-one',
      title: 'Project One',
      category: 'Takarbeten',
      location: 'Göteborg',
      year: '2024',
      description: 'Takrenovering på villa',
      longDescription: 'Lång beskrivning',
      services: ['Tak'],
      imageUrl: '/images/project-one.png',
      featured: true,
    },
    {
      slug: 'project-two',
      title: 'Project Two',
      category: 'Service',
      location: 'Mölndal',
      year: '2023',
      description: 'Servicearbete',
      longDescription: 'Lång beskrivning',
      services: ['Service'],
      imageUrl: '/images/project-two.png',
      featured: false,
    },
  ];

  const metaResponse = {
    total: 2,
    featured: 1,
    categories: [
      { name: 'Service', count: 1 },
      { name: 'Takarbeten', count: 1 },
    ],
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  function mockAxiosRequests(overrides = {}) {
    axios.get.mockImplementation((url, config = {}) => {
      if (url === `${API_BASE}/projects/meta`) {
        return Promise.resolve({ data: metaResponse });
      }

      if (url === `${API_BASE}/projects`) {
        const category = config?.params?.category;
        const featured = config?.params?.featured;

        if (featured) {
          return Promise.resolve({
            data: sampleProjects.filter((project) => project.featured),
          });
        }

        if (category === 'Takarbeten') {
          return Promise.resolve({
            data: sampleProjects.filter(
              (project) => project.category === 'Takarbeten',
            ),
          });
        }

        return Promise.resolve({ data: sampleProjects });
      }

      if (overrides[url]) {
        return overrides[url](config);
      }

      return Promise.reject(new Error(`Unhandled request for ${url}`));
    });
  }

  test('renders dynamic category filters from meta endpoint', async () => {
    mockAxiosRequests();

    render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>,
    );

    expect(axios.get).toHaveBeenCalledWith(`${API_BASE}/projects`, {
      params: {},
    });

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(`${API_BASE}/projects/meta`);
    });

    expect(
      await screen.findByRole('button', { name: 'Takarbeten (1)' }),
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Service (1)' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Utvalda' })).toBeInTheDocument();
  });

  test('requests category filtered projects when filter is selected', async () => {
    mockAxiosRequests();

    render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>,
    );

    const takarbetenButton = await screen.findByRole('button', {
      name: 'Takarbeten (1)',
    });
    fireEvent.click(takarbetenButton);

    await waitFor(() => {
      expect(axios.get).toHaveBeenCalledWith(
        `${API_BASE}/projects`,
        expect.objectContaining({
          params: { category: 'Takarbeten' },
        }),
      );
    });
  });
});
