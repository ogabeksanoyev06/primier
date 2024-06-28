<template>
   <div class="flex min-h-screen flex-col">
      <LayoutHeader />
      <div class="flex-1">
         <slot />
      </div>
      <LayoutFooter />
   </div>
</template>
