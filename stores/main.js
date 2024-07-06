import { defineStore } from 'pinia';
import { useApi } from '@/composables/useApi';

export const useMainStore = defineStore('main', () => {
   const api = useApi();

   async function getPosts() {
      try {
         const response = await api.get('api/posts');
         return response.data;
      } catch (error) {
         console.log(error);
      }
   }
   async function getPartners() {
      try {
         const response = await api.get('api/partners');
         return response.data;
      } catch (error) {
         console.log(error);
      }
   }
   async function getBanners() {
      try {
         const response = await api.get('api/banners');
         return response.data;
      } catch (error) {
         console.log(error);
      }
      s;
   }
   async function getGaleries() {
      try {
         const response = await api.get('api/galeries');
         return response.data;
      } catch (error) {
         console.log(error);
      }
      s;
   }

   return {
      getBanners,
      getPartners,
      getPosts,
      getGaleries
   };
});
