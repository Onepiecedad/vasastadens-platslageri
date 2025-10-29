const fallbackOrigin =
  typeof window !== 'undefined' ? window.location.origin : '';

const rawBackendUrl =
  import.meta.env.VITE_BACKEND_URL ??
  import.meta.env.REACT_APP_BACKEND_URL ??
  fallbackOrigin;

const normalizedBackendUrl = rawBackendUrl
  ? rawBackendUrl.replace(/\/+$/, '')
  : '';

export const BACKEND_URL = normalizedBackendUrl;
export const API_BASE = normalizedBackendUrl
  ? `${normalizedBackendUrl}/api`
  : '/api';

export function resolveApiPath(path) {
  const sanitized = path.startsWith('/') ? path : `/${path}`;
  return `${API_BASE}${sanitized}`;
}
