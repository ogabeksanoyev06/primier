import { useToast } from 'vue-toastification';
// import i18n from '@/plugins/i18n';
import CToast from '@/components/Common/CToast.vue';

// const { t } = i18n.global;

export const useCustomToast = () => {
   const toast = useToast();

   const showToast = (message, type = 'success', param) => {
      const content = {
         component: CToast,
         props: {
            message: t(message, param?.key ?? param?.value),
            type
         }
      };

      toast(content, {
         type: type.toUpperCase()
      });
   };

   return {
      showToast
   };
};
