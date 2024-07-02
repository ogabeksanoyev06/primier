import Toastification from 'vue-toastification';
import CToast from '@/components/Common/Toast.vue';

const { useToast } = Toastification;

export const useCustomToast = () => {
   const toast = useToast();

   const showToast = (text, type = 'success', param) => {
      const content = {
         component: CToast,
         props: {
            text: param?.key ? `${text} ${param?.key}` : text,
            type
         }
      };

      toast(content, {
         type: type
      });
   };

   return {
      showToast
   };
};
