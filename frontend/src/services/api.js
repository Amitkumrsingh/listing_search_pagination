import axios from 'axios';

export const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getBatches = async (params, signal) => {
  const response = await api.get('/batches', { params, signal });
  return response.data;
};

export const getCentres = async () => {
  const response = await api.get('/batches', { params: { limit: 1000 } });
  const centres = [...new Set(response.data.data.map(batch => batch.centreName))].sort();
  return centres;
};
