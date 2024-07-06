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
            <SwiperSlide v-for="(item, i) in banners" :key="i">
               <div class="flex flex-col gap-6">
                  <div class="relative md:h-[450px] xl:h-[530px]">
                     <img :src="'https://web.verel-auto.uz/storage/' + item.photo" alt="" class="w-full h-full object-cover rounded-[8px]" />
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
defineProps(['banners']);
</script>
