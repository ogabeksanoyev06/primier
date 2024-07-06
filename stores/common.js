import { defineStore } from 'pinia';
import { useApi } from '@/composables/useApi';

export const useCommonStore = defineStore('common', () => {
   const api = useApi();

   return {};
});
