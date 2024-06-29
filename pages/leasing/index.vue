<template>
   <div class="mt-20">
      <div class="container">
         <UICheckbox v-model="isChecked"> Check me! </UICheckbox>
         <div class="max-w-[1200px] w-full flex flex-col items-center mx-auto gap-4">
            <h2 class="text-xl md:text-3xl xl:text-[40px] font-medium">Financing / leasing</h2>
            <span class="text-base text-grey text-center">
               Stellen Sie Ihrem Unternehmen die bestmögliche Ausstattung ohne hohe Einmalkosten zur Verfügung!  Sprechen Sie uns an! Mit unseren Leasingpartnern investieren Sie in
               Ihre Zukunft. Planbar und liquiditätsschonend.
            </span>
         </div>
         <div class="flex items-center lg:flex-row flex-col lg:gap-32 gap-6 justify-center mt-12">
            <img src="/assets/images/ImageL1.png" alt="" class="w-[90%] sm:w-auto" />
            <img src="/assets/images/Abcfinance-logo.png" alt="" class="w-[90%] sm:w-auto" />
         </div>
         <div class="flex justify-center mt-24 mb-28">
            <UIButton class="!rounded-full">
               <span class="text-base">Impressum</span>
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 16L18 12M18 12L14 8M18 12L6 12" stroke="#020105" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
               </svg>
            </UIButton>
         </div>
      </div>
      <FormContactUs />
   </div>
</template>

<script setup></script>
