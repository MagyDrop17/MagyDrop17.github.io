<script setup lang="ts">

    import CardPortfolio from "@/components/CardPortfolio.vue";

    const projects = [
        {
            id: 1,
            name: "nebula.cat",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl",
            image: "/nebula.png"
        },
        {
            id: 2,
            name: "cableando.net",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt, nunc nisl",
            image: "/nebula.png"
        }
    ];

</script>

<template>
    
    <div class="flex justify-center m-x mt-5">
        <div v-for="project in projects" :key="project.id">
            <CardPortfolio :project="project" />
        </div>
    </div>

</template>
