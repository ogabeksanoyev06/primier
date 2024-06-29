import { defineStore } from 'pinia';
import { useApi } from '@/composables/useApi';
import { ref } from 'vue';

export const useCategoriesStore = defineStore('categories', () => {
   const api = useApi();
   const categories = ref([]);

   const getCategories = async () => {
      try {
         const response = await api.get('categories/');
         categories.value = response;
         return response;
      } catch (error) {
         console.log('error');
      }
   };

   return {
      getCategories,
      categories
   };
});
