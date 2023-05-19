<template>
    <Navbar></Navbar>
    <main class="bg-white dark:bg-gray-900 pb-4">
        <div class="container md:w-11/12 lg:w-3/4 mx-auto">
            <h1 class="pt-5 text-4xl text-center font-extrabold dark:text-white">Uso, Adaptación y Explotación de Sistemas
                Operativos</h1>
            <div class="mt-10">
                <h2 class="text-center text-2xl md:text-3xl font-bold dark:text-white">Unidad temática 1.<small
                        class="ml-2 flex justify-center md:inline-block font-semibold text-gray-500 dark:text-gray-400">Introducción
                        a los sistemas
                        operativos</small></h2>
            </div>

            <div class="pt-10 pb-5">
                <AccordionTop>
                    <template v-slot:title>
                        Objetivos de la unidad temática
                    </template>
                    <template v-slot:content>
                        El estudiante explica el concepto de sistema operativo a partir de los diferentes enfoques y modos
                        de operación a fin de reconocer su importancia en el sistema de computo.
                    </template>
                </AccordionTop>
                <AccordionCenter>
                    <template v-slot:title>
                        Introducción
                    </template>
                    <template v-slot:content>
                        En esta unidad se conocerán las características de los sistemas operativos asi como funciones
                        objetivos.
                        <ol class="mt-2">
                            <li class="mb-4">1. Introducción a los sistemas operativos.
                                <ol class="ml-6 md:ml-9 lg:ml-12">
                                    <li class="mb-2 mt-2">1.1. Definición y generalidades</li>
                                    <li class="mb-2">1.2. Funciones, objetivos y características de los sistemas operativos
                                    </li>
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
                <AccordionBottom>
                    <template v-slot:title>
                        Actividades
                    </template>
                    <template v-slot:content>
                        <p class="text-center">A continuación se muestras las actividades de aprendizajes
                            realizadas en la unidad.</p>
                        <hr class="border-t border-gray-700 mt-2">
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
        </div>
    </main>
    <div class="text-white dark:text-gray-900">
        <div class="w-full h-auto">
            <svg class="w-full h-16 sm:h-24 md:h-32 lg:h-48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
                preserveAspectRatio="none">
                <path class="my-svg" fill-opacity="1"
                    d="M0,224L34.3,202.7C68.6,181,137,139,206,154.7C274.3,171,343,245,411,245.3C480,245,549,171,617,122.7C685.7,75,754,53,823,69.3C891.4,85,960,139,1029,165.3C1097.1,192,1166,192,1234,197.3C1302.9,203,1371,213,1406,218.7L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z">
                </path>
            </svg>
        </div>
    </div>
    <section class="container mx-auto md:w-11/12 lg:w-3/4 mt-4 sm:mt-0">
        <div class="pb-12">
            <h2 class="text-center text-3xl md:text-4xl font-bold dark:text-white">Actividades</h2>
        </div>
        <div id="actividad0" class="mb-4">
            <div
                class="grid grid-cols-1 md:grid-cols-2 gap-3 bg-white border border-gray-200 rounded-lg shadow w-full hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600">
                <div class="p-2 h-96 mx-2 xl:mx-10">
                    <iframe src="https://drive.google.com/file/d/1NKA5yrwL7apulXVUmfiwf1kuG1_olR5b/preview"
                        class="object-cover w-full h-full rounded-lg">
                        <p>Ocurrio un posible error</p>
                    </iframe>
                </div>
                <div class="p-4 my-auto">
                    <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Actividad de
                        Aprendizaje 0</h3>
                    <h4 class="text-base font-semibold text-gray-900 dark:text-white">Sistemas Operativos</h4>
                    <div class="flex items-center mt-2.5 mb-5">
                        <!-- Estrellas de calificación -->
                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <title>First star</title>
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                            </path>
                        </svg>
                        <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <title>First star</title>
                            <path
                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                            </path>
                        </svg>
                        <!-- Etiqueta de dificultad -->
                        <span
                            class="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                            Dificultad: 2.0
                        </span>
                    </div>
                    <!-- Descripción de la actividad -->
                    <p class="mb-3 text-gray-700 dark:text-gray-400">La actividad implica investigar libros de sistemas
                        operativos,
                        analizar su contenido y portada, y luego sintetizar la información en un cuadro. También el crear
                        una portada para
                        un libro relacionado al tema de sistemas operativos.</p>
                </div>
            </div>
        </div>
        <Card id="actividad1">
            <template v-slot:iframe>
                Hola
            </template>
        </Card>
    </section>
</template>
<script>
import Navbar from '../components/Navigation.vue';
import AccordionTop from '../components/AccordionTop.vue';
import AccordionCenter from '../components/AccordionCenter.vue';
import AccordionBottom from '../components/AccordionBottom.vue';
import GridActivities from '../components/GridActivities.vue';
import Card from '../components/Card.vue';

export default {
    components: {
        Navbar,
        AccordionTop,
        AccordionCenter,
        AccordionBottom,
        GridActivities,
        Card,
    },
    data() {
        return {
            text: " Uso, Adaptación y Explotación de Sistemas Operativos.",
            showText: false,
            delay: 100, // Tiempo de retraso entre cada carácter (en milisegundos)
        };
    },
    computed: {
        textWithSpaces() {
            return this.text.split('').map((char) => char === ' ' ? ' ' : char);
        },
    },
    mounted() {
        this.showText = true;
    },
    methods: {
        scrollToElement(elementId) {
            const targetElement = document.querySelector(elementId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        },
    },
};
</script>
<style scoped>
.my-svg {
    fill: currentColor;
    /* Hereda el color de relleno del padre */
}

.typewriter {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
}

.typewriter h1 {
    display: inline-block;
    animation: typing 0.8s steps(40) forwards;
    animation-delay: 0ms;
    opacity: 0;
}

@keyframes typing {
    from {
        width: 0;
    }

    to {
        opacity: 1;
    }
}

@media (min-width: 480px) {
    .container {
        max-width: 90%;
    }
}

.container {
    max-width: 95%;
}

.zoom {
    transition: transform .2s;
    /* Animation */
    margin: 0 auto;
}

.zoom:hover {
    transform: scale(1.1);
    /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}
</style>