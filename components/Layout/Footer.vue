<template>
   <footer class="bg-background py-[80px]">
      <div class="container flex flex-col gap-6 sm:gap-10">
         <h1 class="font-semibold text-2xl md:text-3xl xl:text-4xl">Contact us</h1>
         <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="flex flex-col gap-4 sm:gap-8 bg-white rounded p-4 sm:p-8" v-for="(item, i) in 3" :key="i">
               <h3 class="text-xl font-medium">Uzbekistan</h3>
               <div class="grid grid-cols-2 gap-4 sm:gap-y-8 sm:gap-x-6">
                  <div class="flex flex-col gap-2">
                     <p class="font-medium">Адрес офиса</p>
                     <p>Узбекистан, г. Ташкент, Шайхантахурский район, Джар Арык 15, 133</p>
                  </div>
                  <div class="flex flex-col gap-2">
                     <p class="font-medium">E-mail для связи</p>
                     <a href="#">info@priminer.uz</a>
                     <a href="#">sales@priminer.uz</a>
                  </div>
                  <div class="flex flex-col gap-2">
                     <p class="font-medium">Телефон для связи</p>
                     <a href="#">+998 97 155 52 57</a>
                     <a href="#">+998 97 155 52 57</a>
                  </div>
                  <div class="flex flex-col gap-2">
                     <p class="font-medium">Время работы</p>
                     <p>с 9:00 до 18:00 (пн-пт)</p>
                  </div>
               </div>
               <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.87761446978!2d69.23930707582362!3d41.31152597130965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b08495af167%3A0x4fbda2bcebf6de9c!2z0YHRgi4g0LwuINCl0LDQu9C60LvQsNGAINCU0YPRgdGC0LvQuNCz0Lg!5e0!3m2!1sru!2s!4v1719470355868!5m2!1sru!2s"
                  width="100%"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  class="rounded sm:h-[280px]"
               >
               </iframe>
            </div>
         </div>
      </div>
   </footer>
</template>

<script setup></script>
