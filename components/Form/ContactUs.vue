<template>
   <div class="bg-primary p-[20px_30px] md:p-[40px_60px] xl:p-[80px_120px]">
      <div class="flex flex-col gap-10">
         <div class="flex flex-col items-center gap-4">
            <h2 class="text-xl md:text-3xl xl:text-[40px] font-medium">Оформить заявку</h2>
            <span class="text-base text-secondary">Apply for leasing on favorable terms today!</span>
         </div>
         <form>
            <div class="flex sm:items-center justify-between sm:flex-row flex-col gap-5">
               <div class="max-w-[670px] w-full flex-1">
                  <UICheckbox>
                     <span class="text-secondary text-base leading-none">
                        Отправляя форму вы даёте своё согласие на обработку персональных данных и соглашаетесь с политикой конфиденциальности</span
                     >
                  </UICheckbox>
               </div>
               <UIButton class="!bg-white !rounded-full gap-2">
                  <span class="text-base">Send</span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M14 16L18 12M18 12L14 8M18 12L6 12" stroke="#020105" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
               </UIButton>
            </div>
         </form>
      </div>
   </div>
</template>

<script setup></script>
