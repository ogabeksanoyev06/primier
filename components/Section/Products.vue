<template>
   <div class="container">
      <section class="flex flex-col gap-10 mb-20">
         <div class="flex items-center justify-between">
            <h2 class="text-xl md:text-3xl xl:text-[40px] font-medium">Products</h2>
            <UIButton variant="ghost" class="!p-0">
               <div class="flex items-center gap-2">
                  <span class="text-base">All products</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                     <path d="M14 16L18 12M18 12L14 8M18 12L6 12" stroke="#5D5D5F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
               </div>
            </UIButton>
         </div>
         <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <UICard v-for="(item, i) in 8" :key="i" />
         </div>
      </section>
   </div>
</template>

<script setup></script>
