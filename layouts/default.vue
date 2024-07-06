<template>
   <div class="flex min-h-screen flex-col">
      <LayoutHeader />
      <div class="flex-1">
         <slot />
      </div>
      <LayoutFooter />
   </div>
</template>

<script setup>

const translations = reactive({
   'main.header': "bosh qismi",
   'main.footer': "past qismi"
})

</script>
