import { defineStore } from 'pinia';
import { useApi } from '@/composables/useApi';
import { useCustomToast } from '@/composables/useCustomToast';

export const useAplicationStore = defineStore('aplication', () => {
   const api = useApi();
   const { showToast } = useCustomToast();

   async function sendAplication(params) {
      try {
         const response = await api.post('zayavkas', params);
         showToast('Arizangiz yuborildi', 'success');
      } catch (error) {
         showToast('Xatolik sodir boldi', 'error');
      }
   }

   return {
      sendAplication
   };
});
