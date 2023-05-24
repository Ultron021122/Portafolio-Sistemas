<script setup>
import { onMounted } from 'vue'
import { initTabs } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
    initTabs();
})
</script>
<template>
    <div
        class="w-full bg-white mb-5 border border-gray-200 hover:bg-gray-100 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-600">
        <ul class="flex flex-wrap text-base font-medium text-center text-gray-900 border-b border-gray-200 rounded-t-lg bg-gray-50 dark:border-gray-700 dark:text-white dark:bg-gray-800"
            id="defaultTab" data-tabs-toggle="#defaultTabContent" role="tablist">
            <slot name="link" />
        </ul>
        <div id="defaultTabContent">
            <slot name="content-1" />
        </div>
    </div>
</template>