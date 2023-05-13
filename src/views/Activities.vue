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
                    Objetivos
                </template>
            </AccordionTop>
            <AccordionCenter>
                <template v-slot:title>
                    Introducción
                </template>
            </AccordionCenter>
            <AccordionBottom>
                <template v-slot:title>
                    Actividades
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