<template>
    <Navbar></Navbar>
    <main class="container mx-auto">
        <h1 class="my-5 text-4xl text-center font-extrabold dark:text-white">Uso, Adaptación y Explotación de Sistemas
            Operativos</h1>
        <div class="mt-10">
            <h2 class="text-center text-2xl md:text-3xl font-bold dark:text-white">Unidad temática 1.<small
                    class="ml-2 flex justify-center md:inline-block font-semibold text-gray-500 dark:text-gray-400">Introducción
                    a los sistemas
                    operativos</small></h2>
        </div>
        <!-- Acordeón de la Unidad 1 -->
        <div class="md:w-11/12 lg:w-3/4 mx-auto my-10">
            <!-- Primer bloque del acordeón -->
            <AccordionTop>
                <template v-slot:title>
                    Objetivos de la unidad temática
                </template>
                <template v-slot:content>
                    El estudiante explica el concepto de sistema operativo a partir de los diferentes enfoques y modos de
                    operación
                    a fin de reconocer su importancia en el sistema de computo.
                </template>
            </AccordionTop>
            <!-- Segundo bloque del acordeón -->
            <AccordionCenter>
                <template v-slot:title>
                    Introducción
                </template>
                <template v-slot:content>
                    En esta unidad se conocerán las características de los sistemas operativos asi como funciones y
                    objetivos.
                    <ol class="mt-2">
                        <li class="mb-4">1. Introducción a los sistemas operativos.
                            <ol class="ml-6 md:ml-9 lg:ml-12">
                                <li class="mb-2 mt-2">1.1. Definición y generalidades</li>
                                <li class="mb-2">1.2. Funciones, objetivos y características de los sistemas operativos</li>
                                <li class="mb-2">1.3. Evolución histórica de los sistemas operativo
                                    <ul class="ml-6 md:ml-9 lg:ml-12">
                                        <li class="mb-2 mt-2">1.3.1. Procesamiento en serie</li>
                                        <li class="mb-2">1.3.2. Procesamiento por lotes</li>
                                        <li class="mb-2">1.3.3. Multiprogramación</li>
                                        <li class="mb-2">1.3.4. Sistemas de tiempo real</li>
                                        <li class="mb-2">1.3.5. Sistemas en red</li>
                                    </ul>
                                </li>
                            </ol>
                        </li>
                    </ol>
                </template>
            </AccordionCenter>
            <!-- Tercer bloque del acordeón -->
            <AccordionBottom>
                <template v-slot:title>
                    Actividades
                </template>
                <template v-slot:content>
                    <p class="text-center">A continuación se muestras las actividades de aprendizajes
                        realizadas en la unidad.</p>
                    <hr class="border-t border-gray-700 mt-2">
                    <!-- Actividad 0 -->
                    <GridActivities>
                        <template v-slot:title>
                            Actividad de aprendizaje 0
                        </template>
                        <template v-slot:name-activity>
                            Libros y portada
                        </template>
                        <template v-slot:date>
                            29-ene-2023
                        </template>
                        <template v-slot:link>
                            <button @click="scrollToElement('#actividad0')"
                                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Ver actividad
                            </button>
                        </template>
                    </GridActivities>
                    <!-- Actividad 1 -->
                    <GridActivities>
                        <template v-slot:title>
                            Actividad de aprendizaje 1
                        </template>
                        <template v-slot:name-activity>
                            Evolución y concepto
                        </template>
                        <template v-slot:date>
                            29-ene-2023
                        </template>
                        <template v-slot:link>
                            <button @click="scrollToElement('#actividad1')"
                                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Ver actividad
                            </button>
                        </template>
                    </GridActivities>
                </template>
            </AccordionBottom>
        </div>

    </main>
</template>
<script>
import Navbar from '../components/Navigation.vue';
import AccordionTop from '../components/AccordionTop.vue';
import AccordionCenter from '../components/AccordionCenter.vue';
import AccordionBottom from '../components/AccordionBottom.vue';
import GridActivities from '../components/GridActivities.vue';

export default {
    components: {
        Navbar,
        AccordionTop,
        AccordionCenter,
        AccordionBottom,
        GridActivities,
    },
    methods: {
        scrollToElement(event) {
            event.preventDefault();
            const targetId = event.target.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    }
};
</script>
<style scoped>
@media (min-width: 480px) {
    .container {
        max-width: 90%;
    }
}

.container {
    max-width: 95%;
}
</style>
<!-- 
                     Actividad 2
                    <GridActivities>
                        <template v-slot:title>
                            Actividad de aprendizaje 2
                        </template>
                        <template v-slot:name-activity>
                            Estructura o Modelo SO
                        </template>
                        <template v-slot:date>
                            05-feb-2023
                        </template>
                        <template v-slot:link>
                            <button @click="scrollToElement('#actividad2')"
                                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Ver actividad
                            </button>
                        </template>
                    </GridActivities>
                    Actividad 3
                    <GridActivities>
                        <template v-slot:title>
                            Actividad de aprendizaje 3
                        </template>
                        <template v-slot:name-activity>
                            Sistema Operativo
                        </template>
                        <template v-slot:date>
                            12-feb-2023
                        </template>
                        <template v-slot:link>
                            <button @click="scrollToElement('#actividad3')"
                                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Ver actividad
                            </button>
                        </template>
                    </GridActivities> -->