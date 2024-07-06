import { defineStore } from 'pinia';

export const useTranslationStore = defineStore('translations', () => {
   const api = useApi();

   const translations = ref({});
   async function getTranslation(params) {
      try {
         let res = await api.get('api/tranlations', params);
         translations.value = res.data;
         return res.data;
      } catch (error) {
         console.log(error);
      }
   }
   return {
      getTranslation,
      translations
   };
});
