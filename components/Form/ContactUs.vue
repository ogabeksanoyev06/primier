<template>
   <div class="bg-primary p-[20px_30px] md:p-[40px_60px] xl:p-[80px_120px]">
      <div class="flex flex-col gap-10">
         <div class="flex flex-col items-center gap-4">
            <h2 class="text-xl md:text-3xl xl:text-[40px] font-medium">Оформить заявку</h2>
            <span class="text-base text-secondary">Apply for leasing on favorable terms today!</span>
         </div>
         <form class="mt-10" @submit.prevent="submitForm">
            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mb-6">
               <input
                  type="text"
                  placeholder="Ismingiz"
                  v-model="form.first_name"
                  pattern="[A-Za-zА-Яа-яЁё']+"
                  maxlength="30"
                  class="w-full h-full text-base sm:text-sm text-black border-b border-secondary bg-transparent transition-300 py-4 outline-none placeholder:text-secondary placeholder:text-base"
                  required
               />
               <input
                  type="text"
                  placeholder="Familiyangiz"
                  v-model="form.last_name"
                  pattern="[A-Za-zА-Яа-яЁё']+"
                  maxlength="30"
                  class="w-full h-full text-base sm:text-sm text-black border-b border-secondary bg-transparent transition-300 py-4 outline-none placeholder:text-secondary placeholder:text-base"
                  required
               />
               <input
                  type="text"
                  placeholder="Telefon raqamingiz"
                  v-model="form.phone"
                  class="w-full h-full text-base sm:text-sm text-black border-b border-secondary bg-transparent transition-300 py-4 outline-none placeholder:text-secondary placeholder:text-base"
                  required
               />
            </div>
            <div class="flex sm:items-center justify-between sm:flex-row flex-col gap-5">
               <div class="max-w-[670px] w-full flex-1">
                  <UICheckbox v-model="form.agree">
                     <span class="text-secondary text-base leading-none">
                        Отправляя форму вы даёте своё согласие на обработку персональных данных и соглашаетесь с политикой конфиденциальности</span
                     >
                  </UICheckbox>
               </div>
               <UIButton :disabled="!isFormValid" class="!bg-white !rounded-full gap-2">
                  <span class="text-base">Jo'natish</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M14 16L18 12M18 12L14 8M18 12L6 12" stroke="#020105" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
               </UIButton>
            </div>
         </form>
      </div>
   </div>
</template>

<script setup>
import { reactive, computed } from 'vue';
import { useAplicationStore } from '~/stores/application.js';

const applicationStore = useAplicationStore();
const { sendAplication } = applicationStore;

const form = reactive({
   first_name: '',
   last_name: '',
   phone: '',
   agree: false
});

const isNameValid = computed(() => {
   const nameRegex = /^[A-Za-zА-Яа-яЁё']+$/;
   return nameRegex.test(form.first_name.trim()) && nameRegex.test(form.last_name.trim());
});

const isFormValid = computed(() => {
   return form.agree && isNameValid.value;
});

const submitForm = () => {
   if (isFormValid.value) {
      sendAplication({
         first_name: form.first_name,
         last_name: form.last_name,
         phone_number: form.phone
      });
   }
};
</script>
