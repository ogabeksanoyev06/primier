import { defineStore } from 'pinia';
import { useApi } from '@/composables/useApi';
import { ref } from 'vue';

export const useCommonStore = defineStore('common', () => {
   const api = useApi();
   const galleries = ref([]);
   const galleryId = ref(null);
   const partners = ref([]);
   const partnerId = ref(null);

   async function getGalleries() {
      try {
         const response = await api.get('galleries');
         galleries.value = response.data;
         return response.data;
      } catch (error) {
         console.log(error);
      }
   }

   async function getGalleryId(id) {
      try {
         const response = await api.get(`galleries${id}`);
         gallery.value = response.data;
         return response.data;
      } catch (error) {
         console.log(error);
      }
   }

   async function getPartners() {
      try {
         const response = await api.get('partners');
         partners.value = response.data;
         return response.data;
      } catch (error) {
         console.log(error);
      }
   }

   async function getPartnerId(id) {
      try {
         const response = await api.get(`partners${id}`);
         partners.value = response.data;
         return response.data;
      } catch (error) {
         console.log(error);
      }
   }
   return {
      getGalleries,
      getGalleryId,
      getPartners,
      getPartnerId,
      galleries,
      galleryId,
      partners,
      partnerId
   };
});
