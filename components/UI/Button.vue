<!-- Button.vue -->
<template>
   <button :class="computedClasses" :disabled="disabled" :style="{ width: width }" role="button" :aria-label="label" @click="$emit('click')">
      <slot />
   </button>
</template>

<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
   label: {
      type: String,
      default: ''
   },
   disabled: Boolean,
   block: Boolean,
   size: {
      type: String,
      validator: (value) => ['default', 'sm', 'lg', 'icon'].includes(value),
      default: 'default'
   },
   variant: {
      type: String,
      validator: (value) => ['default', 'outline', 'secondary', 'ghost', 'link'].includes(value),
      default: 'default'
   },
   width: {
      type: String,
      default: ''
   }
});

const baseClasses =
   'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm transition-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring active:scale-95 disabled:pointer-events-none disabled:opacity-50';

const variantClasses = {
   default: 'bg-primary text-black hover:bg-primary/90',
   outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
   secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
   ghost: 'hover:bg-accent hover:text-accent-foreground',
   link: 'text-primary underline-offset-4 hover:underline'
};

const sizeClasses = {
   default: 'px-8 py-3',
   sm: 'h-9 rounded-md px-3',
   lg: 'h-11 rounded-md px-8',
   icon: 'h-10 w-10'
};

const computedClasses = computed(() => [baseClasses, variantClasses[props.variant], sizeClasses[props.size], props.block ? 'w-full' : ''].join(' '));
</script>
