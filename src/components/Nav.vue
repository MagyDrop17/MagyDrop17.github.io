<script setup lang="ts">
    
    import NavLink from "@/components/NavLink.vue";

</script>

<template>

    <nav class="flex flex-row justify-end align-middle items-center w-full h-full" >

        <NavLink routed="/" name="Home" />
        <NavLink routed="/about" name="About" />
        <NavLink routed="/portfolio" name="Portfolio" />
        <NavLink routed="/contact" name="Contact" />

    </nav>

</template>