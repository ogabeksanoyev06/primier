import { defineStore } from 'pinia';
import { useApi } from '@/composables/useApi';

export const usePortfolioStore = defineStore('portfolio', () => {
   const api = useApi();

   async function getPortfolios() {
      try {
         const response = await api.get('/api/portfolios');
         return response.data;
      } catch (error) {
         console.log(error);
      }
   }

   async function getPortfolioId(id) {
      try {
         const response = await api.get(`api/portfolios${id}`);
         return response.data;
      } catch (error) {
         console.log(error);
      }
   }

   return {
      getPortfolios,
      getPortfolioId
   };
});
