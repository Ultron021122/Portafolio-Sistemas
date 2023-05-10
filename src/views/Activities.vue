<script setup>
import Navbar from '../components/Navigation.vue'
import Accordion from '../components/Accordion.vue'
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
        <Accordion msg="Hello"></Accordion>
        <Accordion msg="Hello-J"></Accordion>
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