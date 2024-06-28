<template>
   <div class="relative mb-20">
      <Swiper @swiper="onSwiper" :loop="true">
         <SwiperSlide v-for="slide in 10" :key="slide">
            <div class="">
               <img src="/assets/images/swiper.png" alt="" class="h-full w-full object-cover" />
            </div>
         </SwiperSlide>
      </Swiper>
      <div class="hidden md:block absolute top-1/2 -translate-y-1/2 z-50 w-full">
         <div class="container flex items-center justify-between w-full">
            <UIButton variant="outline" class="!px-0 !py-0 !w-14 !h-14 !rounded-full bg-white/20 border-white/60" @click="categorySwiper.slidePrev()">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="w-20" viewBox="0 0 24 24" fill="none">
                  <path d="M14 7L10 12L14 17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
               </svg>
            </UIButton>
            <UIButton variant="outline" class="!px-0 !py-0 !w-14 !h-14 !rounded-full bg-white/20 border-white/60" @click="categorySwiper.slideNext()">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M10 7L14 12L10 17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
               </svg>
            </UIButton>
         </div>
      </div>
   </div>
</template>

<script setup>
import { ref } from 'vue';

const categorySwiper = ref(null);

function onSwiper(swiper) {
   categorySwiper.value = swiper;
}
</script>
