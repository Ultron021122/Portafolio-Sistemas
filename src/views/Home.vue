<script setup>
import Navbar from '../components/Navigation.vue'
</script>
<template>
    <Navbar></Navbar>
    <!-- Texto principal -->
    <section class="bg-center bg-no-repeat bg-[url('../assets/nav.jpg')] bg-gray-700 bg-blend-multiply h-full">
        <div class="px-4 mx-auto max-w-screen-xl text-center py-36 md:py-40 lg:py-52">
            <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-5xl">
                Bienvenido al sitio de actividades del semestre</h1>
            <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Aqui
                encontrarás
                un recopilatorio
                de todas las actividades realizadas durante el semestre, organizadas de manera clara y accesible.</p>
            <div class="justify-center space-y-0 space-x-4">
                <router-link to="/activities"
                    class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                    Actividades
                    <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </router-link>
                <a href="#clase"
                    class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-500 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                    Más sobre la clase
                </a>
            </div>
        </div>
    </section>
    <div class="container md:w-11/12 lg:w-3/4 mx-auto mt-5" id="clase">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 dark:border-gray-700 dark:bg-gray-800 p-4">
            <div class="leading-normal mt-2 p-2">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Datos de la clase:
                </h5>
                <ul class="font-normal text-gray-700 dark:text-gray-400 list-disc list-inside">
                    <li class="mb-1"><span>Clase:</span> {{ clase }}</li>
                    <li class="mb-1"><span>Departamento:</span> {{ departamento }}</li>
                    <li class="mb-1"><span>Profesora:</span> {{ profesor }}</li>
                    <li class="mb-1"><span>Sección:</span> {{ seccion }}</li>
                </ul>
            </div>
            <div class="p-4">
                <img class="object-cover w-full h-auto rounded-lg" src="../assets/operating_system.jpg"
                    alt="Imagen de pila de libros">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            clase: 'Uso, Adaptación y Explotación de Sistemas Operativos',
            departamento: 'Ciencias Computacionales',
            profesor: 'Becerra Velázquez Violeta del Roció',
            seccion: 'D02',
        };
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