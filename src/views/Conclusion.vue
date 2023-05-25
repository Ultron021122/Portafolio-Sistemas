<script setup>
import Navbar from '../components/Navigation.vue'
</script>
<template>
    <Navbar></Navbar>
    <main class="bg-white dark:bg-gray-900 py-10">
        <div class="container md:w-11/12 lg:w-3/4 mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4 dark:border-gray-700 dark:bg-gray-800 p-4">
                <div class="leading-normal p-4">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white mt-2">Conclusión Final</h5>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">En conclusión, la clase de Uso, Adaptación
                        y Explotación de Sistemas Operativos ha sido fundamental para comprender y aplicar los conceptos y
                        principios fundamentales relacionados con los sistemas operativos. A lo largo del curso, hemos
                        explorado diversas temáticas, desde investigaciones, ejercicios a exámenes de practica que han
                        resultado ser funcionales.
                    </p>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Me termina por parecer una excelente clase.
                        La cual se que me va a servir para gestionar y no solo usar dispositivos tecnológicos sin saber como
                        interactúan. Como futuro desarrollador me parece que es un pilar en una gran montaña de conocimiento
                        por saber. El tema con el que me quedo en especial es el tema de algoritmos de planificación de
                        memoria.
                    </p>
                </div>
                <div class="mt-2 p-4">
                    <img class="object-cover w-full h-auto rounded-lg" src="../assets/system.png"
                        alt="Imagen de operating system">
                </div>
            </div>
        </div>
    </main>
    <!-- Division -->
    <section class="text-white dark:text-gray-900">
        <div class="w-full h-auto">
            <svg class="w-full h-16 sm:h-24 md:h-32 lg:h-48" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
                preserveAspectRatio="none">
                <path class="my-svg" fill-opacity="1"
                    d="M0,224L34.3,202.7C68.6,181,137,139,206,154.7C274.3,171,343,245,411,245.3C480,245,549,171,617,122.7C685.7,75,754,53,823,69.3C891.4,85,960,139,1029,165.3C1097.1,192,1166,192,1234,197.3C1302.9,203,1371,213,1406,218.7L1440,224L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z">
                </path>
            </svg>
        </div>
    </section>
</template>
<style scoped>
.my-svg {
    fill: currentColor;
    /* Hereda el color de relleno del padre */
}

@media (min-width: 480px) {
    .container {
        max-width: 90%;
    }
}

.container {
    max-width: 95%;
}
</style>