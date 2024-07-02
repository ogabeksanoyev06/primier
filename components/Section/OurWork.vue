<template>
   <section class="bg-background py-[80px]">
      <div class="container space-y-10">
         <h2 class="text-xl md:text-3xl xl:text-[40px] font-medium">What we did</h2>
         <Swiper
            :modules="[SwiperAutoplay]"
            :spaceBetween="24"
            :slidesPerView="4"
            :autoplay="{
               delay: 4000,
               disableOnInteraction: true
            }"
            :loop="true"
            :breakpoints="{
               1280: {
                  slidesPerView: 4,
                  spaceBetween: 16
               },
               1024: {
                  slidesPerView: 3,
                  spaceBetween: 16
               },
               476: {
                  slidesPerView: 2,
                  spaceBetween: 12
               },

               0: {
                  slidesPerView: 1,
                  spaceBetween: 8
               }
            }"
         >
            <SwiperSlide v-for="(item, i) in galleries" :key="i">
               <div class="flex flex-col gap-6">
                  <div class="relative md:h-[450px] xl:h-[530px]">
                     <video
                        ref="video"
                        class="w-full h-full rounded-sm object-cover"
                        :poster="'https://web.verel-auto.uz/storage/' + item.photo"
                        @mouseover="playVideo"
                        @mouseout="pauseVideo"
                     >
                        <source :src="'https://web.verel-auto.uz/' + item.video" type="video/mp4" />
                     </video>
                     <!-- <div class="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                        <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path
                              d="M11.9611 9.73644L3.99228 14.2901C2.65896 15.052 1 14.0892 1 12.5536V3.44631C1 1.91067 2.65896 0.947935 3.99228 1.70983L11.9611 6.26347C13.3048 7.03126 13.3048 8.96865 11.9611 9.73644Z"
                              stroke="#28303F"
                              stroke-width="1.5"
                              stroke-linejoin="round"
                           />
                        </svg>
                     </div> -->
                  </div>

                  <div class="flex flex-col gap-2">
                     <h3 class="text-2xl font-semibold">
                        {{ item.title.uz }}
                     </h3>
                     <p class="text-base text-[#353437] font-medium">High performance machine tools driving innovation in manufacturing business</p>
                  </div>
               </div>
            </SwiperSlide>
         </Swiper>
      </div>
   </section>
</template>

<script setup>
import { useCommonStore } from '~/stores/common.js';

const commonStore = useCommonStore();
const { getGalleries } = commonStore;

import { ref } from 'vue';

const video = ref(null);

const playVideo = () => {
   video.value.play();
};

const pauseVideo = () => {
   video.value.pause();
};

const { data: galleries } = await useAsyncData('galleries', getGalleries);
</script>
