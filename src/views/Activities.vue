<script setup>
import Navbar from '../components/Navigation.vue';
import AccordionTop from '../components/AccordionTop.vue';
import AccordionCenter from '../components/AccordionCenter.vue';
import AccordionBottom from '../components/AccordionBottom.vue';
</script>
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
        <div class="md:w-4/5 mx-auto">
            <AccordionTop class="mt-4">
                <template v-slot:title>
                    Objetivo de la unidad temática
                </template>
                <template v-slot:content>
                    El estudiante explica el concepto de sistema operativo a partir
                    de los diferentes enfoques y modos de operación a fin de reconocer
                    su importancia en el sistema de computo.
                </template>
            </AccordionTop>
            <AccordionCenter>
                <template v-slot:title>
                    Introducción
                </template>
                <template v-slot:content>
                    En esta unidad se conocerán las características de los sistemas
                    operativos así como sus funciones y objetivos.
                </template>
            </AccordionCenter>
            <AccordionBottom>
                <template v-slot:title>
                    Actividades
                </template>
                <template v-slot:content>
                    Durante esta unidad, nos enfocamos en alcanzar el objetivo establecido por nuestra profesora. Participamos 
                    en diversas actividades que nos permitieron adquirir los conocimientos y habilidades necesarios. A 
                    continuación, se detallan las actividades que realizamos:
                    <ul class="pl-5 mt-2 text-gray-500 list-disc dark:text-gray-400">
                        <li><a href="#actividad1" @click="scrollToElement"
                                class="text-blue-600 dark:text-blue-500 hover:underline">Actividad de Aprendizaje 0</a></li>
                        <li><a href="#actividad2" @click="scrollToElement"
                                class="text-blue-600 dark:text-blue-500 hover:underline">Actividad de Aprendizaje 1</a></li>
                        <li><a href="#actividad3" @click="scrollToElement"
                                class="text-blue-600 dark:text-blue-500 hover:underline">Actividad de Aprendizaje 2</a></li>
                        <li><a href="#actividad4" @click="scrollToElement"
                                class="text-blue-600 dark:text-blue-500 hover:underline">Actividad de Aprendizaje 3</a></li>
                    </ul>
                </template>
            </AccordionBottom>
        </div>
    </main>
</template>
<script>
export default {
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