import { defineStore } from 'pinia';
import { useApi } from '@/composables/useApi';
import { ref } from 'vue';

export const usePortfolioStore = defineStore('portfolio', () => {
   const api = useApi();
   const portfolios = ref([]);
   const portfolioId = ref(null);
   const portfolioCategories = ref([]);
   const portfolioCategoryId = ref(null);

   async function getPortfolios() {
      try {
         const response = await api.get('portfolios');
         portfolios.value = response.data;
         return response.data;
      } catch (error) {
         console.log(error);
      }
   }

   async function getPortfolioId(id) {
      try {
         const response = await api.get(`portfolios${id}`);
         portfolioId.value = response.data;
         return response.data;
      } catch (error) {
         console.log(error);
      }
   }

   async function getPortfolioCategories() {
      try {
         const response = await api.get('portfolio-categories');
         portfolioCategories.value = response.data;
         return response.data;
      } catch (error) {
         console.log(error);
      }
   }

   async function getPortfolioCategoryId(id) {
      try {
         const response = await api.get(`portfolio-categories${id}`);
         portfolioCategoryId.value = response.data;
         return response.data;
      } catch (error) {
         console.log(error);
      }
   }

   return {
      getPortfolios,
      getPortfolioId,
      getPortfolioCategories,
      getPortfolioCategoryId,
      portfolios,
      portfolioId,
      portfolioCategories,
      portfolioCategoryId
   };
});
