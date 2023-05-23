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
            <li class="mr-2">
                <button id="info-tab" data-tabs-target="#info" type="button" role="tab" aria-controls="info"
                    aria-selected="true"
                    class="inline-block p-4 text-blue-600 rounded-tl-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-blue-500 dark:hover:text-gray-300">Investigación</button>
            </li>
            <li class="mr-2">
                <button id="present-tab" data-tabs-target="#present" type="button" role="tab" aria-controls="present"
                    aria-selected="false"
                    class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300">Presentación</button>
            </li>
            <li class="mr-2">
                <button id="actividad-tab" data-tabs-target="#actividad" type="button" role="tab" aria-controls="actividad"
                    aria-selected="false"
                    class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300">Actividad</button>
            </li>
        </ul>
        <div id="defaultTabContent">
            <div class="hidden p-4 bg-white dark:bg-gray-700" id="info" role="tabpanel" aria-labelledby="info-tab">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div class="h-96 xl:mx-10">
                        <slot name="iframe" />
                    </div>
                    <div class="my-auto text-center md:text-left">
                        <h3 class="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            Actividad de
                            Aprendizaje
                            <slot name="number" />
                        </h3>
                        <h4 class="text-base font-semibold text-gray-900 dark:text-white">
                            <slot name="subtitle" />
                        </h4>
                        <div class="flex items-center justify-center md:justify-normal mt-2.5 mb-5">
                            <slot name="starts" />
                            <!-- Etiqueta de dificultad -->
                            <span
                                class="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                                Dificultad:
                                <slot name="level" />
                            </span>
                        </div>
                        <!-- Descripción de la actividad -->
                        <p class="pr-0 md:pr-2 text-center md:text-left text-gray-700 dark:text-gray-400">
                            <slot name="content" />
                        </p>
                        <div class="pt-5">
                            <slot name="button" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="hidden p-4 bg-white md:p-8 dark:bg-gray-800" id="present" role="tabpanel"
                aria-labelledby="present-tab">
                <h2 class="mb-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">We invest in the
                    world’s potential</h2>
                <!-- List -->
                <ul role="list" class="space-y-4 text-gray-500 dark:text-gray-400">
                    <li class="flex space-x-2">
                        <!-- Icon -->
                        <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="leading-tight">Dynamic reports and dashboards</span>
                    </li>
                    <li class="flex space-x-2">
                        <!-- Icon -->
                        <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="leading-tight">Templates for everyone</span>
                    </li>
                    <li class="flex space-x-2">
                        <!-- Icon -->
                        <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="leading-tight">Development workflow</span>
                    </li>
                    <li class="flex space-x-2">
                        <!-- Icon -->
                        <svg class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="leading-tight">Limitless business automation</span>
                    </li>
                </ul>
            </div>
            <div class="hidden p-4 bg-white md:p-8 dark:bg-gray-800" id="actividad" role="tabpanel"
                aria-labelledby="actividad-tab">
                <dl
                    class="grid max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
                    <div class="flex flex-col">
                        <dt class="mb-2 text-3xl font-extrabold">73M+</dt>
                        <dd class="text-gray-500 dark:text-gray-400">Developers</dd>
                    </div>
                    <div class="flex flex-col">
                        <dt class="mb-2 text-3xl font-extrabold">100M+</dt>
                        <dd class="text-gray-500 dark:text-gray-400">Public repositories</dd>
                    </div>
                    <div class="flex flex-col">
                        <dt class="mb-2 text-3xl font-extrabold">1000s</dt>
                        <dd class="text-gray-500 dark:text-gray-400">Open source projects</dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
</template>