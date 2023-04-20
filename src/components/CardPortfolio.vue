<script setup lang="ts">

    import { RouterLink } from 'vue-router';

    const props = defineProps<{
        project: {
            id: number;
            name: string;
            description: string;
            image: string;
        };
    }>();

</script>

<template>
    
    <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
        <a href="#">
            <img class="rounded-t-lg" :src="props.project.image" :alt="props.project.name" />
        </a>
        
        <div class="p-5">

            <RouterLink :to="'/portfolio/' + props.project.id">
                <h5 class="mb-2 text-2xl font-bold tracking-tight">
                    {{ props.project.name }}
                </h5>
            </RouterLink>

            <p class="mb-3 font-normal">
                {{ props.project.description }}
            </p>

            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300">
            Read more
                <svg
                    aria-hidden="true"
                    class="w-4 h-4 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                    ></path>
                </svg>
            </a>
        </div>
    </div>

</template>