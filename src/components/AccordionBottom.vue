<template>
    <h2>
        <button @click="toggleAccordion()"
            class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-100 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
            :aria-expanded="isOpen" :aria-controls="`collapse${_uid}`">
            <span><slot name="title" /></span>
            <svg class="w-6 h-6 transition-all duration-200 transform" :class="{ 'rotate-180': isOpen, 'rotate-0': !isOpen, }"
                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
            </svg>
        </button>

        <div v-show="isOpen" :id="`collapse${_uid}`"
            class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <p class="mb-2 text-gray-500 dark:text-gray-400">
                <slot name="content" />
            </p>
        </div>
    </h2>
</template>
  
<script>
import { onMounted } from 'vue'
import { initCollapses } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initCollapses();
});
export default {
    data() {
        return {
            isOpen: false,
        };
    },

    methods: {
        toggleAccordion() {
            this.isOpen = !this.isOpen;
        },
    },
};
</script>