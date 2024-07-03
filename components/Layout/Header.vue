<template>
   <header class="sticky z-40 top-0 bg-background/80 backdrop-blur-lg border-b border-border">
      <div class="container flex-y-center justify-between h-20 sm:h-[--header-height]">
         <NuxtLink to="/" class="flex-shrink-0">
            <img src="/assets/svg/logo.svg" alt="" />
         </NuxtLink>
         <nav class="hidden md:flex items-center md:gap-6 lg:gap-16 xl:gap-[90px] transition-all duration-300">
            <NuxtLink to="/" class="text-base font-medium transition-colors hover:text-primary"> Home </NuxtLink>
            <NuxtLink to="/products" class="text-base font-medium transition-colors hover:text-primary">Products</NuxtLink>
            <NuxtLink to="/leasing" class="text-base font-medium transition-colors hover:text-primary">Financing / leasing</NuxtLink>
            <NuxtLink to="/our-projects" class="text-base font-medium transition-colors hover:text-primary">Our projects</NuxtLink>
         </nav>
         <button class="md:hidden flex">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M6 6H18" stroke="#28303F" stroke-width="1.5" stroke-linecap="round" />
               <path d="M6 10H18" stroke="#28303F" stroke-width="1.5" stroke-linecap="round" />
               <path d="M6 14H18" stroke="#28303F" stroke-width="1.5" stroke-linecap="round" />
            </svg>
         </button>
      </div>
   </header>
</template>

<script setup></script>

<style scoped>
.router-link-exact-active {
   color: var(--primary);
}
</style>
