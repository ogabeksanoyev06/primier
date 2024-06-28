<template>
   <div class="max-w-[1400px] w-full mx-auto mb-20">
      <div class="bg-background lg:rounded">
         <div class="flex items-center justify-between px-4 md:px-10 lg:px-20 flex-col lg:flex-row">
            <div class="lg:max-w-[400px] max-w-[350px] w-full flex items-stretch justify-center order-2 lg:order-1">
               <img src="/assets/images/transformer.png" alt="" class="w-full h-full" />
            </div>
            <div class="flex flex-col max-w-[780px] w-full lg:flex-1 pt-4 md:pt-8 lg:py-12 order-1 lg:order-2">
               <h4 class="text-grey text-lg mb-4">About us</h4>
               <h2 class="text-2xl md:text-3xl xl:text-4xl font-semibold mb-6">Development, application of the latest technologies and innovative solutions</h2>
               <p class="text-grey text-lg mb-6">
                  Узбекско-германское совместное предприятие «PRIMINER» начало свою деятельность в области высокоточного и высокопроизводственного токарного, фрезерного,
                  карусельного и лазерного станкостроения и производства технологий «под ключ» в области металлообработки в 2023 году.
               </p>
               <p class="text-grey text-lg">
                  Огромная производственная база, доступ к новейшим технологиям и сервисные возможности позволяют участникам проекта успешно осуществлять план организации
                  собственного производства станков в Республике Узбекистан.
               </p>
            </div>
         </div>
      </div>
      <section>
         <h2 class="text-2xl md:text-3xl xl:text-4xl font-semibold mb-4">Our clients</h2>
         <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5 lg:gap-8">
            <a href="#" class="block lg:hover:scale-105 transition-300" v-for="item in 5" :key="item">
               <img src="/assets/svg/client.svg" alt="Heroku" loading="lazy" class="h-full rounded-xl" />
            </a>
         </div>
      </section>
   </div>
</template>

<script setup></script>
