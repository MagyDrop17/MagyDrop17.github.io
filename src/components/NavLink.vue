<script setup lang="ts">
    
    import { RouterLink } from 'vue-router';

    // routed props
    const props = defineProps<{
        routed: string,
        name: string
    }>();

</script>

<template>

    <RouterLink class="font-bold hover:text-indigo-400  px-3" :to=props.routed>{{ props.name }}</RouterLink>

</template>