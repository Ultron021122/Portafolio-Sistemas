<template>
    <div class="mb-4">
        <div
            class="grid grid-cols-1 md:grid-cols-2 gap-3 bg-white border border-gray-200 rounded-lg shadow w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600">
            <div class="py-2 h-96 mx-2 xl:mx-10">
                <slot name="iframe" />
            </div>
            <div class="p-4 my-auto text-center md:text-left">
                <h3 class="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Actividad de
                    Aprendizaje <slot name="number" /></h3>
                <h4 class="text-base font-semibold text-gray-900 dark:text-white"><slot name="subtitle" /></h4>
                <div class="flex items-center justify-center md:justify-normal mt-2.5 mb-5">
                    <slot name="starts" />
                    <!-- Etiqueta de dificultad -->
                    <span
                        class="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        Dificultad: <slot name="level" />
                    </span>
                </div>
                <!-- Descripción de la actividad -->
                <p class="pr-0 md:pr-2 text-center md:text-left text-gray-700 dark:text-gray-400"><slot name="content" /></p>
                <div class="pt-2 md:pt-4 flex justify-center md:block"><slot name="button"/></div>
            </div>
        </div>
    </div>
</template>