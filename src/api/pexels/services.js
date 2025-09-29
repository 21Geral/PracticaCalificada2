import axios from "axios";

const API_KEY = "xHkK5pT0Mh66WcYhxeKJjxSdwgXJIWs2VLD3LUIlkzcqaQmkVBpeoY8c";
const BASE_URL = "https://api.pexels.com/v1";

// instancia axios
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: API_KEY,
  },
});

// fotos curadas (random)
export const getImages = async (perPage = 24) => {
  const response = await api.get(`/curated?per_page=${perPage}`);
  return response;
};

// búsqueda por texto o categoría
export const searchImages = async (query, perPage = 24) => {
  const response = await api.get(`/search?query=${query}&per_page=${perPage}`);
  return response;
};
