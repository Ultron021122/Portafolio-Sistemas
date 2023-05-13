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
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-4 justify-items-center items-center">
                        <div class="col-span-2 md:col-span-1">
                            <p class=" text-center">Actividad de aprendizaje 0 <br> Libros y portada</p>
                        </div>
                        <div>
                            <p class="">29-ene-2023</p>
                        </div>
                        <div class="">
                            <a href="#actividad0" @click="scrollToElement"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Ver actividad
                            </a>
                        </div>
                        <div class="col-span-2 md:col-span-1 mt-3">
                            <p class=" text-center">Actividad de aprendizaje 1 <br> Evolución, concepto</p>
                        </div>
                        <div>
                            <p class="">29-ene-2023</p>
                        </div>
                        <div class="">
                            <a href="#actividad1" @click="scrollToElement"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Ver actividad
                            </a>
                        </div>
                        <div class="col-span-2 md:col-span-1 mt-3 text-center">
                            <p>Actividad de aprendizaje 2 </p>
                            <p>Estructura o Modelo SO</p>
                        </div>
                        <div>
                            <p class="">29-ene-2023</p>
                        </div>
                        <div class="">
                            <a href="#actividad2" @click="scrollToElement"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Ver actividad
                            </a>
                        </div>
                        <div class="col-span-2 md:col-span-1 mt-3">
                            <p class=" text-center">Actividad de aprendizaje 3 <br> Libros y portada</p>
                        </div>
                        <div>
                            <p class="">29-ene-2023</p>
                        </div>
                        <div class="">
                            <a href="#elementId" @click="scrollToElement"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                Ver actividad
                            </a>
                        </div>
                    </div>
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

export default {
    components: {
        Navbar,
        AccordionTop,
        AccordionCenter,
        AccordionBottom
    },
    data() {
        return {
            items: [
                {
                    label: 'Introducción a los sistemas operativos',
                    children: [
                        { label: 'Definición y generalidades' },
                        { label: 'Funciones, objetivos y características de los sistemas operativos' },
                        {
                            label: 'Evolución histórica de los sistemas operativos',
                            children: [
                                { label: 'Procesamiento en serie' },
                                { label: 'Procesamiento por lotes' },
                                { label: 'Multiprogramación' },
                                { label: 'Sistemas de tiempo real' },
                                { label: 'Sistemas en red' },
                            ],
                        },
                    ],
                },
            ],
        };
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
<style scoped>@media (min-width: 480px) {
    .container {
        max-width: 90%;
    }
}

.container {
    max-width: 95%;
}</style>