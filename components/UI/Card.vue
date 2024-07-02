<template>
   <NuxtLink :to="`/product/${product?.id}`" class="bg-white rounded flex flex-col items-start cursor-pointer transition-300 h-full w-full gap-2 md:gap-4 group">
      <div class="p-6 border rounded flex items-center justify-center w-full">
         <img :src="'https://web.verel-auto.uz/site/images/products/' + product?.photo[0]" alt="" class="w-[350px] h-[230px] object-contain group-hover:scale-105 transition-300" />
      </div>
      <p class="text-lg">
         {{ product?.title?.uz }}
      </p>
   </NuxtLink>
</template>

<script setup>
const props = defineProps({
   product: {
      type: Object
   }
});
</script>
