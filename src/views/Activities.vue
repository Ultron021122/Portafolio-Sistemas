<script setup>
import Navbar from '../components/Navigation.vue';
import AccordionTop from '../components/AccordionTop.vue';
import AccordionCenter from '../components/AccordionCenter.vue';
import AccordionBottom from '../components/AccordionBottom.vue';
</script>
<template>
    <Navbar></Navbar>
    <main class="container mx-auto">
        <h1 class="text-4xl font-extrabold dark:text-white">Uso, Adaptación y Explotación de Sistemas Operativos</h1>
        <div>
            <h2 class="text-3xl font-bold dark:text-white">Unidad 1<small
                    class="ml-2 font-semibold text-gray-500 dark:text-gray-400">Introducción a los sistemas
                    operativos</small></h2>
        </div>
        <AccordionTop>
            <template v-slot:title>
                What is Flowbite?
            </template>
            <template v-slot:content>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia,
                porro. Non a excepturi, voluptatibus ipsam magnam, eligendi,
                accusantium ipsa quae quis praesentium voluptate saepe ullam sint ea
                itaque consectetur impedit?
            </template>
        </AccordionTop>
        <AccordionCenter>
            <template v-slot:title>
                What is Flowbite?
            </template>
            <template v-slot:content>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia,
                porro. Non a excepturi, voluptatibus ipsam magnam, eligendi,
                accusantium ipsa quae quis praesentium voluptate saepe ullam sint ea
                itaque consectetur impedit?
            </template>
        </AccordionCenter>
        <AccordionBottom>
            <template v-slot:title>
                What is Flowbite?
            </template>
            <template v-slot:content>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia,
                porro. Non a excepturi, voluptatibus ipsam magnam, eligendi,
                accusantium ipsa quae quis praesentium voluptate saepe ullam sint ea
                itaque consectetur impedit?
            </template>
        </AccordionBottom>
    </main>
</template>
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