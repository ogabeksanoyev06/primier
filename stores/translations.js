import { defineStore } from 'pinia';

export const useTranslationStore = defineStore('translations', () => {
   const api = useApi();

   const translations = ref({});

   async function getTranslation() {
      try {
         let res = await api.get('api/translations');
         translations.value = res.data;
      } catch (error) {
         console.log(error);
      }
   }
   return {
      getTranslation,
      translations
   };
});
