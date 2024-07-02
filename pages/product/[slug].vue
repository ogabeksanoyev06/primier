<template>
   <div>
      <div class="container">
         <section class="grid grid-cols-1 xl:grid-cols-9 gap-10 mt-20">
            <div class="xl:col-span-4">
               <div class="sticky top-32">
                  <div class="border rounded">
                     <Swiper
                        effect="fade"
                        :fade-effect="{ crossFade: true }"
                        :thumbs="{
                           swiper: thumbsSwiper
                        }"
                        :modules="[SwiperEffectFade, SwiperThumbs, SwiperAutoplay]"
                        :loop="true"
                        :autoplay="{
                           delay: 3000,
                           disableOnInteraction: false
                        }"
                        class="overflow-hidden"
                        @swiper="setMainSwiper"
                        @slideChange="onSlideChange"
                     >
                        <SwiperSlide v-for="(image, index) in product?.photo" :key="index" class="p-4 sm:p-[20px_25px] lg:p-[45px_50px] xl:p-[80px_100px]">
                           <div class="flex items-center justify-center max-w-[750px] w-full">
                              <img :src="'https://web.verel-auto.uz/site/images/products/' + image" alt="" class="w-full h-full object-cover" />
                           </div>
                        </SwiperSlide>
                     </Swiper>
                  </div>
                  <Swiper
                     :space-between="10"
                     :slides-per-view="4"
                     :watch-slides-progress="true"
                     :breakpoints="{
                        0: {
                           slidesPerView: 3
                        },
                        476: {
                           slidesPerView: 4
                        }
                     }"
                     :modules="[SwiperThumbs]"
                     class="w-full mt-6"
                     @swiper="setThumbsSwiper"
                  >
                     <SwiperSlide v-for="(image, index) in product?.photo" :key="index" class="relative overflow-hidden cursor-pointer group">
                        <div class="flex items-center justify-center w-18 h-18 sm:w-32 sm:h-24 border rounded" :class="{ '!border-primary': activeIndex === index }">
                           <img :src="'https://web.verel-auto.uz/site/images/products/' + image" alt="" class="w-14 h-14 sm:w-20 sm:h-20 object-contain" />
                        </div>
                     </SwiperSlide>
                  </Swiper>
               </div>
            </div>
            <div class="xl:col-span-5">
               <div class="flex flex-col gap-10">
                  <div class="flex items-center justify-between">
                     <h2 class="text-xl md:text-3xl xl:text-[40px] font-medium">
                        {{ product?.title?.uz }}
                     </h2>
                     <a href="" class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                           <path
                              d="M13 2V6C13 8.20914 14.7909 10 17 10L21 10M3 6L3 18C3 20.2091 4.79086 22 7 22H17C19.2091 22 21 20.2091 21 18V11.6569C21 10.596 20.5786 9.57857 19.8284 8.82843L14.1716 3.17157C13.4214 2.42143 12.404 2 11.3431 2L7 2C4.79086 2 3 3.79086 3 6Z"
                              stroke="#5D5D5F"
                              stroke-width="1.5"
                              stroke-linejoin="round"
                           />
                           <path
                              d="M6.43652 18V13.7051H7.82812C8.35547 13.7051 8.69922 13.7266 8.85938 13.7695C9.10547 13.834 9.31152 13.9746 9.47754 14.1914C9.64355 14.4062 9.72656 14.6846 9.72656 15.0264C9.72656 15.29 9.67871 15.5117 9.58301 15.6914C9.4873 15.8711 9.36523 16.0127 9.2168 16.1162C9.07031 16.2178 8.9209 16.2852 8.76855 16.3184C8.56152 16.3594 8.26172 16.3799 7.86914 16.3799H7.30371V18H6.43652ZM7.30371 14.4316V15.6504H7.77832C8.12012 15.6504 8.34863 15.6279 8.46387 15.583C8.5791 15.5381 8.66895 15.4678 8.7334 15.3721C8.7998 15.2764 8.83301 15.165 8.83301 15.0381C8.83301 14.8818 8.78711 14.7529 8.69531 14.6514C8.60352 14.5498 8.4873 14.4863 8.34668 14.4609C8.24316 14.4414 8.03516 14.4316 7.72266 14.4316H7.30371Z"
                              fill="#5D5D5F"
                           />
                           <path
                              d="M10.4355 13.7051H12.0205C12.3779 13.7051 12.6504 13.7324 12.8379 13.7871C13.0898 13.8613 13.3057 13.9932 13.4854 14.1826C13.665 14.3721 13.8018 14.6045 13.8955 14.8799C13.9893 15.1533 14.0361 15.4912 14.0361 15.8936C14.0361 16.2471 13.9922 16.5518 13.9043 16.8076C13.7969 17.1201 13.6436 17.373 13.4443 17.5664C13.2939 17.7129 13.0908 17.8271 12.835 17.9092C12.6436 17.9697 12.3877 18 12.0674 18H10.4355V13.7051ZM11.3027 14.4316V17.2764H11.9502C12.1924 17.2764 12.3672 17.2627 12.4746 17.2354C12.6152 17.2002 12.7314 17.1406 12.8232 17.0566C12.917 16.9727 12.9932 16.835 13.0518 16.6436C13.1104 16.4502 13.1396 16.1875 13.1396 15.8555C13.1396 15.5234 13.1104 15.2686 13.0518 15.0908C12.9932 14.9131 12.9111 14.7744 12.8057 14.6748C12.7002 14.5752 12.5664 14.5078 12.4043 14.4727C12.2832 14.4453 12.0459 14.4316 11.6924 14.4316H11.3027Z"
                              fill="#5D5D5F"
                           />
                           <path d="M14.7803 18V13.7051H17.7246V14.4316H15.6475V15.4482H17.4404V16.1748H15.6475V18H14.7803Z" fill="#5D5D5F" />
                        </svg>
                        <span class="text-base text-grey">Data sheet</span>
                     </a>
                  </div>
                  <div class="flex flex-col gap-4">
                     <h3 class="text-xl font-medium">Description</h3>
                     <ul class="flex flex-col gap-4">
                        <li class="text-grey text-base flex gap-1 items-center">• <span v-html="product?.descriptions?.uz"></span></li>
                     </ul>
                  </div>
                  <div class="flex flex-col gap-4">
                     <h3 class="text-xl font-medium">standard configuration</h3>
                     <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <li class="flex items-start gap-2">
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                 fill-rule="evenodd"
                                 clip-rule="evenodd"
                                 d="M18 2H6C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2ZM16.592 9.46049C16.8463 9.13353 16.7874 8.66232 16.4605 8.40802C16.1335 8.15372 15.6623 8.21262 15.408 8.53958L11.401 13.6914C11.3119 13.806 11.1443 13.8209 11.0364 13.7238L8.50173 11.4426C8.19385 11.1655 7.71963 11.1904 7.44254 11.4983C7.16544 11.8062 7.1904 12.2804 7.49828 12.5575L10.033 14.8387C10.7881 15.5183 11.9613 15.4143 12.585 14.6123L16.592 9.46049Z"
                                 fill="#B3CF1D"
                              />
                           </svg>
                           <span class="text-grey flex-1">Fully enclosed splash guard</span>
                        </li>
                        <li class="flex items-start gap-2">
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                 fill-rule="evenodd"
                                 clip-rule="evenodd"
                                 d="M18 2H6C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2ZM16.592 9.46049C16.8463 9.13353 16.7874 8.66232 16.4605 8.40802C16.1335 8.15372 15.6623 8.21262 15.408 8.53958L11.401 13.6914C11.3119 13.806 11.1443 13.8209 11.0364 13.7238L8.50173 11.4426C8.19385 11.1655 7.71963 11.1904 7.44254 11.4983C7.16544 11.8062 7.1904 12.2804 7.49828 12.5575L10.033 14.8387C10.7881 15.5183 11.9613 15.4143 12.585 14.6123L16.592 9.46049Z"
                                 fill="#B3CF1D"
                              />
                           </svg>
                           <span class="text-grey flex-1">Chip conveyor (two screw conveyors and one chain conveyor)</span>
                        </li>
                     </ul>
                  </div>
                  <div class="flex flex-col gap-4">
                     <h3 class="text-xl font-medium">Optional configuration</h3>
                     <ul class="flex flex-col gap-3">
                        <li class="flex items-start gap-2" v-for="(item, i) in 10" :key="i">
                           <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                 fill-rule="evenodd"
                                 clip-rule="evenodd"
                                 d="M18 2H6C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6C22 3.79086 20.2091 2 18 2ZM16.592 9.46049C16.8463 9.13353 16.7874 8.66232 16.4605 8.40802C16.1335 8.15372 15.6623 8.21262 15.408 8.53958L11.401 13.6914C11.3119 13.806 11.1443 13.8209 11.0364 13.7238L8.50173 11.4426C8.19385 11.1655 7.71963 11.1904 7.44254 11.4983C7.16544 11.8062 7.1904 12.2804 7.49828 12.5575L10.033 14.8387C10.7881 15.5183 11.9613 15.4143 12.585 14.6123L16.592 9.46049Z"
                                 fill="#B3CF1D"
                              />
                           </svg>
                           <span class="text-grey">Built-in spindle HSK A100 15000 rpm_40/50kW_103/129Nm, 40 pockets tool changer</span>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </section>
         <section class="flex flex-col gap-10 my-20">
            <div class="flex items-center justify-between">
               <h2 class="text-xl md:text-3xl xl:text-4xl font-semibold">Other products</h2>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
               <UICard v-for="(item, i) in products" :key="i" :product="item" />
            </div>
         </section>
      </div>
      <FormContactUs />
   </div>
</template>

<script setup>
import { useProductsStore } from '~/stores/products.js';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();

const productsStore = useProductsStore();
const { getProductId, getProducts } = productsStore;

// swiper
const mainSwiper = ref(null);
const thumbsSwiper = ref(null);
const activeIndex = ref(0);

const setMainSwiper = (swiper) => {
   mainSwiper.value = swiper;
};
const setThumbsSwiper = (swiper) => {
   thumbsSwiper.value = swiper;
};
const onSlideChange = () => {
   activeIndex.value = mainSwiper.value.activeIndex;
};

const { data: product } = await useAsyncData('product', () => getProductId(route.params.slug), {
   watch: [route.params.slug]
});
const { data: products } = await useAsyncData('products', getProducts);
</script>
