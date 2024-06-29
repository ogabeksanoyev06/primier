import axios from 'axios';

export const useApi = () => {
   const config = useRuntimeConfig();

   const api = axios.create({
      baseURL: config.public.apiBaseUrl,
      headers: { 'Content-Type': 'application/json' },
      timeout: 10000
   });

   api.interceptors.request.use(
      (config) => {
         return config;
      },
      (error) => Promise.reject(error)
   );

   api.interceptors.response.use(
      (response) => {
         return response;
      },
      (error) => {
         return Promise.reject(error);
      }
   );

   return api;
};
