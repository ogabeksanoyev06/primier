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
            <SwiperSlide v-for="slide in 10" :key="slide">
               <div class="flex flex-col gap-6">
                  <div class="">
                     <img src="/assets/images/Rectangle.png" alt="" class="w-full h-full rounded-sm object-cover" />
                  </div>
                  <div class="flex flex-col gap-2">
                     <h3 class="text-2xl font-semibold">Machine Tools</h3>
                     <p class="text-base text-[#353437] font-medium">High performance machine tools driving innovation in manufacturing business</p>
                  </div>
               </div>
            </SwiperSlide>
         </Swiper>
      </div>
   </section>
</template>

<script setup></script>
