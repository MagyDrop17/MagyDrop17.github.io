<script setup lang="ts">

    const props = defineProps<{
        href: string;
        alt: string;
    }>();

</script>


<template>

    <a :href="props.href" class="cursor-pointer relative before:absolute before:bg-indigo-200 before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.20] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500 inline-block" :alt="props.alt" target="_blank">
        <slot />
    </a>

</template>