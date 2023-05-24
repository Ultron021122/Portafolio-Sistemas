<template>
    <Navbar></Navbar>
    <main class="bg-white dark:bg-gray-900 pb-4">
        <div class="container md:w-11/12 lg:w-3/4 mx-auto">
            <h1 class="pt-10 text-4xl text-center font-extrabold dark:text-white">Uso, Adaptación y Explotación de Sistemas
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
    <!-- Division-->
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
    <!-- Actividades -->
    <section class="container mx-auto md:w-11/12 lg:w-3/4 mt-4 sm:mt-0 pb-4">
        <div class="pb-12">
            <h2 class="text-center text-3xl md:text-4xl font-bold dark:text-white">Actividades</h2>
        </div>
        <!-- Cards de actividades-->
        <Card id="actividad0">
            <template v-slot:iframe>
                <iframe src="https://drive.google.com/file/d/1NKA5yrwL7apulXVUmfiwf1kuG1_olR5b/preview"
                    class="object-cover w-full h-full rounded-lg">
                    <p>Ocurrio un posible error</p>
                </iframe>
            </template>
            <template v-slot:number>0</template>
            <template v-slot:subtitle>Sistemas Operativos</template>
            <template v-slot:starts>
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
                    <title>Second star</title>
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                </svg>
            </template>
            <template v-slot:level>2.0</template>
            <template v-slot:content>La actividad implica investigar libros de sistemas operativos, analizar su contenido y
                portada, y luego sintetizar la información en un cuadro. También el crear una portada para un libro
                relacionado al tema de sistemas operativos.</template>
        </Card>
        <Card id="actividad1">
            <template v-slot:iframe>
                <iframe src="https://drive.google.com/file/d/17R7plRzb8_9izJcUbkEXYOoFogb35vvV/preview"
                    class="object-cover w-full h-full rounded-lg">
                    <p>Ocurrio un posible error</p>
                </iframe>
            </template>
            <template v-slot:number>1</template>
            <template v-slot:subtitle>Introducción a los Sistemas Operativos</template>
            <template v-slot:starts>
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
                    <title>Second star</title>
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                </svg>
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>Third star</title>
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                </svg>
            </template>
            <template v-slot:level>3.0</template>
            <template v-slot:content>La actividad consiste en investigar y recopilar información sobre la evolución de los
                sistemas operativos, el concepto fundamental de un sistema operativo, los objetivos que persigue, el modo
                usuario y el modo supervisor, así como los servicios o funciones.</template>
        </Card>
    </section>
    <!-- Unidad 2 -->
    <section class="bg-white dark:bg-gray-900 pt-4">
        <div class="container md:w-11/12 lg:w-3/4 mx-auto">
            <div class="mt-10">
                <h2 class="text-center text-2xl md:text-3xl font-bold dark:text-white">Unidad temática 2.<small
                        class="ml-2 flex justify-center md:inline-block font-semibold text-gray-500 dark:text-gray-400">Estructura
                        y tipos de Sistemas Operativos</small></h2>
            </div>
            <div class="pt-10 pb-5">
                <AccordionTop>
                    <template v-slot:title>
                        Objetivos de la unidad temática
                    </template>
                    <template v-slot:content>
                        El estudiante identifica los diferentes servicios que presta el sistema operativo asi como sus
                        generalidades y los tipos de sistemas operativos que existen.
                    </template>
                </AccordionTop>
                <AccordionCenter>
                    <template v-slot:title>
                        Introducción
                    </template>
                    <template v-slot:content>
                        En esta unidad se conocerán las características de los sistemas operativos, los tipos y
                        generalidades.
                        <ol class="mt-2">
                            <li class="mb-4">2. Estructura y tipos de Sistemas Operativos.
                                <ol class="ml-6 md:ml-9 lg:ml-12">
                                    <li class="mb-2 mt-2">2.1 Sistemas Operativos por su estructura
                                        <ul class="ml-6 md:ml-9 lg:ml-12">
                                            <li class="mb-2 mt-2">2.1.1. Estructura Monolitica</li>
                                            <li class="mb-2">2.1.2. Estructura Jerarquica</li>
                                            <li class="mb-2">2.1.3. Maquina Virtual</li>
                                            <li class="mb-2">2.1.4. Cliente-Servidor</li>
                                        </ul>
                                    </li>
                                    <li class="mb-2">2.2 Sistemas operativos por sus servicios
                                        <ul class="ml-6 md:ml-9 lg:ml-12">
                                            <li class="mb-2 mt-2">2.2.1. Monousuarios y multiusuarios</li>
                                            <li class="mb-2">2.2.2. Monotareas y multitareas</li>
                                            <li class="mb-2">2.2.3. Monoproceso y multiproceso</li>
                                        </ul>
                                    </li>
                                    <li class="mb-2">2.3 Sistemas Operativos por la forma en que ofrecen sus servicios
                                        <ul class="ml-6 md:ml-9 lg:ml-12">
                                            <li class="mb-2 mt-2">2.3.1. Sistemas Operativos de Red</li>
                                            <li class="mb-2">2.3.2. Sistemas Operativos Distribuidos</li>
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
                        </GridActivities>
                    </template>
                </AccordionBottom>
            </div>
        </div>
    </section>
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
    <!-- Actividades -->
    <section class="container mx-auto md:w-11/12 lg:w-3/4 mt-4 sm:mt-0 pb-4">
        <div class="pb-12">
            <h2 class="text-center text-3xl md:text-4xl font-bold dark:text-white">Actividades</h2>
        </div>
        <!-- Cards de actividades-->
        <Card id="actividad2">
            <template v-slot:iframe>
                <iframe src="https://drive.google.com/file/d/18b-0DFSSKj8FdaOeUPyT8INzmbdtJHVj/preview"
                    class="object-cover w-full h-full rounded-lg" loading="lazy">
                    <p>Ocurrio un posible error</p>
                </iframe>
            </template>
            <template v-slot:number>2</template>
            <template v-slot:subtitle>Estructura de los Sistemas Operativos</template>
            <template v-slot:starts>
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
                    <title>Second star</title>
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                </svg>
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>Third star</title>
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                </svg>
            </template>
            <template v-slot:level>3.0</template>
            <template v-slot:content>La actividad consiste en investigar y recopilar información sobre los diferentes modelo
                de sistemas operativos, incluyendo el monolítico, cliente-servidor, máquina virtual, capas y
                híbrido.</template>
        </Card>
        <Card id="actividad3">
            <template v-slot:iframe>
                <iframe src="https://drive.google.com/file/d/1IqyiBr1ABim3eK6lxsvfF3uYupBUvAwp/preview"
                    class="object-cover w-full h-full rounded-lg" loading="lazy">
                    <p>Ocurrio un posible error</p>
                </iframe>
            </template>
            <template v-slot:number>3</template>
            <template v-slot:subtitle>Introducción a los Sistemas Operativos</template>
            <template v-slot:starts>
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
                    <title>Second star</title>
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                </svg>
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>Third star</title>
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                </svg>
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>Fourth star</title>
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                </svg>
            </template>
            <template v-slot:level>4.0</template>
            <template v-slot:content>La actividad consiste en investigar y recopilar información sobre un sistema operativo
                específico, abarcando su historia, los servicios que presta, los objetivos que persigue, las funciones que
                desempeña y su estructura interna.</template>
        </Card>
    </section>
    <!-- Unidad 3 -->
    <section class="bg-white dark:bg-gray-900 pt-4">
        <div class="container md:w-11/12 lg:w-3/4 mx-auto">
            <div class="mt-10">
                <h2 class="text-center text-2xl md:text-3xl font-bold dark:text-white">Unidad temática 3.<small
                        class="ml-2 flex justify-center md:inline-block font-semibold text-gray-500 dark:text-gray-400">Funcionamiento
                        de un sistema operativo</small></h2>
            </div>
            <div class="pt-10 pb-5">
                <AccordionTop>
                    <template v-slot:title>
                        Objetivos de la unidad temática
                    </template>
                    <template v-slot:content>
                        El estudiante identifica proceso de arranque, funcionamiento y administración de un sistema
                        operativo.
                    </template>
                </AccordionTop>
                <AccordionCenter>
                    <template v-slot:title>
                        Introducción
                    </template>
                    <template v-slot:content>
                        En esta unidad se analizará el ciclo de vida de un proceso y sus diferentes estados asi como los
                        distintos tipos de interrupciones para las llamadas al sistema, además de la administración de
                        memoria, información y entradas-salidas.
                        <ol class="mt-2">
                            <li class="mb-4">3. Funcionamiento de un sistema operativo
                                <ol class="ml-6 md:ml-9 lg:ml-12">
                                    <li class="mb-2 mt-2">3.1 Administrador de procesos
                                        <ul class="ml-6 md:ml-9 lg:ml-12">
                                            <li class="mb-2 mt-2">3.1.1. Procesos, conceptos y estados de un proceso</li>
                                            <li class="mb-2">3.1.2. Hilos y concurrencia</li>
                                            <li class="mb-2">3.1.3. Jerarquía de procesos</li>
                                            <li class="mb-2">3.1.4. Llamadas al sistema para la administración de procesos
                                            </li>
                                            <li class="mb-2">3.1.5. Planificación de procesos</li>
                                        </ul>
                                    </li>
                                    <li class="mb-2">3.2 Concurrencia entre procesos
                                        <ul class="ml-6 md:ml-9 lg:ml-12">
                                            <li class="mb-2 mt-2">3.2.1. Introducción</li>
                                            <li class="mb-2">3.2.2. Exclusión mutua</li>
                                            <li class="mb-2">3.2.3. Mecanismos para asegurar la exclusión mutua</li>
                                            <li class="mb-2">3.2.4. Bloqueo mutuo</li>
                                        </ul>
                                    </li>
                                    <li class="mb-2">3.3 Sistema de archivos
                                        <ul class="ml-6 md:ml-9 lg:ml-12">
                                            <li class="mb-2 mt-2">3.3.1. Concepto y tipos de archivos</li>
                                            <li class="mb-2">3.3.2. Organización y acceso a archivos</li>
                                            <li class="mb-2">3.3.3. Estructura de los directorios y de los archivos</li>
                                        </ul>
                                    </li>
                                    <li class="mb-2">3.4 Administración de memoria
                                        <ul class="ml-6 md:ml-9 lg:ml-12">
                                            <li class="mb-2 mt-2">3.4.1. Funciones y operaciones del administrador de
                                                memoria
                                            </li>
                                            <li class="mb-2">3.4.2. Asignaciones de memoria contigua</li>
                                            <li class="mb-2">3.4.3. Memoria virtual</li>
                                        </ul>
                                    </li>
                                    <li class="mb-2">3.5 Sistemas de Entrada/Salida
                                        <ul class="ml-6 md:ml-9 lg:ml-12">
                                            <li class="mb-2 mt-2">3.5.1. Dispositivos de entrada-salida</li>
                                            <li class="mb-2">3.5.2. Almacenamiento intermedio</li>
                                            <li class="mb-2">3.5.3. Planificación de disco</li>
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
                                Actividad de aprendizaje 4
                            </template>
                            <template v-slot:name-activity>
                                Diagrama, BCP
                            </template>
                            <template v-slot:date>
                                19-feb-2023
                            </template>
                            <template v-slot:link>
                                <button @click="scrollToElement('#actividad4')"
                                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    Ver actividad
                                </button>
                            </template>
                        </GridActivities>
                        <GridActivities>
                            <template v-slot:title>
                                Actividad de aprendizaje 5
                            </template>
                            <template v-slot:name-activity>
                                Ejercicios
                            </template>
                            <template v-slot:date>
                                26-feb-2023
                            </template>
                            <template v-slot:link>
                                <button @click="scrollToElement('#actividad5')"
                                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    Ver actividad
                                </button>
                            </template>
                        </GridActivities>
                        <GridActivities>
                            <template v-slot:title>
                                Actividad de aprendizaje 6
                            </template>
                            <template v-slot:name-activity>
                                Quiz Procesos
                            </template>
                            <template v-slot:date>
                                05-mar-2023
                            </template>
                            <template v-slot:link>
                                <button @click="scrollToElement('#actividad6')"
                                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    Ver actividad
                                </button>
                            </template>
                        </GridActivities>
                        <GridActivities>
                            <template v-slot:title>
                                Actividad de aprendizaje 7
                            </template>
                            <template v-slot:name-activity>
                                Exposición
                            </template>
                            <template v-slot:date>
                                12-mar-2023
                            </template>
                            <template v-slot:link>
                                <button @click="scrollToElement('#actividad7')"
                                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    Ver actividad
                                </button>
                            </template>
                        </GridActivities>
                        <GridActivities>
                            <template v-slot:title>
                                Actividad de aprendizaje 8
                            </template>
                            <template v-slot:name-activity>
                                Barbero Dormilón
                            </template>
                            <template v-slot:date>
                                19-mar-2023
                            </template>
                            <template v-slot:link>
                                <button @click="scrollToElement('#actividad8')"
                                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    Ver actividad
                                </button>
                            </template>
                        </GridActivities>
                        <GridActivities>
                            <template v-slot:title>
                                Actividad de aprendizaje 9
                            </template>
                            <template v-slot:name-activity>
                                Memoria
                            </template>
                            <template v-slot:date>
                                26-mar-2023
                            </template>
                            <template v-slot:link>
                                <button @click="scrollToElement('#actividad9')"
                                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    Ver actividad
                                </button>
                            </template>
                        </GridActivities>
                        <GridActivities>
                            <template v-slot:title>
                                Actividad de aprendizaje 10
                            </template>
                            <template v-slot:name-activity>
                                Quiz Entradas/Salidas
                            </template>
                            <template v-slot:date>
                                23-abr-2023
                            </template>
                            <template v-slot:link>
                                <button @click="scrollToElement('#actividad10')"
                                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    Ver actividad
                                </button>
                            </template>
                        </GridActivities>
                        <GridActivities>
                            <template v-slot:title>
                                Actividad de aprendizaje 11
                            </template>
                            <template v-slot:name-activity>
                                Archivos
                            </template>
                            <template v-slot:date>
                                30-abr-2023
                            </template>
                            <template v-slot:link>
                                <button @click="scrollToElement('#actividad11')"
                                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    Ver actividad
                                </button>
                            </template>
                        </GridActivities>
                        <GridActivities>
                            <template v-slot:title>
                                Actividad de aprendizaje 12
                            </template>
                            <template v-slot:name-activity>
                                Indices
                            </template>
                            <template v-slot:date>
                                07-may-2023
                            </template>
                            <template v-slot:link>
                                <button @click="scrollToElement('#actividad12')"
                                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                    Ver actividad
                                </button>
                            </template>
                        </GridActivities>
                    </template>
                </AccordionBottom>
            </div>
        </div>
    </section>
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
    <!-- Actividades -->
    <section class="container mx-auto md:w-11/12 lg:w-3/4 mt-4 sm:mt-0 pb-4">
        <div class="pb-12">
            <h2 class="text-center text-3xl md:text-4xl font-bold dark:text-white">Actividades</h2>
        </div>
        <!-- Cards de actividades-->
        <Card id="actividad4">
            <template v-slot:iframe>
                <iframe src="https://drive.google.com/file/d/15eWOBCYmzYh_9F08LSEUv939s5i1mYbm/preview"
                    class="object-cover w-full h-full rounded-lg" loading="lazy">
                    <p>Ocurrio un posible error</p>
                </iframe>
            </template>
            <template v-slot:number>4</template>
            <template v-slot:subtitle>Procesos</template>
            <template v-slot:starts>
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
                    <title>Second star</title>
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                </svg>
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>Third star</title>
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                </svg>
            </template>
            <template v-slot:level>3.0</template>
            <template v-slot:content>La actividad consiste en investigar y recopilar información sobre la creación y
                terminación de procesos, el diagrama de 5 estados, los algoritmos de planificación y los elementos de la
                tabla de procesos.
            </template>
        </Card>
        <Card id="actividad5">
            <template v-slot:iframe>
                <iframe
                    src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSlblsa9aiTY2VZfSXGWFqgWx3nHmBUk-B6fawrB4tVUixSwh-YLeDnzWZRUoG2gw/pubhtml?widget=true&amp;headers=false"
                    class="object-cover w-full h-full rounded-lg" loading="lazy">
                    <p>Ocurrio un posible error</p>
                </iframe>
            </template>
            <template v-slot:number>5</template>
            <template v-slot:subtitle>Procesos</template>
            <template v-slot:starts>
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
                    <title>Second star</title>
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                </svg>
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>Third star</title>
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                </svg>
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>Fourth star</title>
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                </svg>
            </template>
            <template v-slot:level>4.0</template>
            <template v-slot:content>La actividad consiste en descargar un archivo de Excel con ejercicios sobre algoritmos
                de planificación, completar los ejercicios durante las sesiones correspondientes, escribir una conclusión
                sobre los algoritmos de planificación y agregarla al archivo de Excel.
            </template>
            <template v-slot:button>
                <a href="https://docs.google.com/spreadsheets/d/1bKb7pRJu_N6d0xA_CHRozJW9fvA7Ciuo/edit?usp=sharing&ouid=103393318021344854854&rtpof=true&sd=true"
                    target="_black"
                    class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-cyan-600 dark:hover:bg-cyan-700 focus:outline-none dark:focus:ring-cyan-800">
                    Ver actividad
                </a>
            </template>
        </Card>
        <Card id="actividad6">
            <template v-slot:iframe>
                <iframe src="https://drive.google.com/file/d/1NgU2bAfB4XKFRohOsCGNfTusJ3-JWkKF/preview"
                    class="object-cover w-full h-full rounded-lg" loading="lazy">
                    <p>Ocurrio un posible error</p>
                </iframe>
            </template>
            <template v-slot:number>6</template>
            <template v-slot:subtitle>Introducción a los Sistemas Operativos</template>
            <template v-slot:starts>
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
                    <title>Second star</title>
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                </svg>
                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>Third star</title>
                    <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                    </path>
                </svg>
            </template>
            <template v-slot:level>3.0</template>
            <template v-slot:content>La actividad consiste en investigar y recopilar información sobre un sistema operativo
                específico, abarcando su historia, los servicios que presta, los objetivos que persigue, las funciones que
                desempeña y su estructura interna.</template>
        </Card>
        <CardTabs id="actividad7">
            <template v-slot:link>
                <li class="mr-2">
                    <button id="info-tab" data-tabs-target="#info" type="button" role="tab" aria-controls="info"
                        aria-selected="true"
                        class="inline-block p-4 text-blue-600 rounded-tl-lg hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-blue-500 dark:hover:text-gray-300">Investigación</button>
                </li>
                <li class="mr-2">
                    <button id="present-tab" data-tabs-target="#present" type="button" role="tab" aria-controls="present"
                        aria-selected="false"
                        class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300">Presentación</button>
                </li>
                <li class="mr-2">
                    <button id="actividad-tab" data-tabs-target="#actividad" type="button" role="tab"
                        aria-controls="actividad" aria-selected="false"
                        class="inline-block p-4 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-gray-300">Actividad</button>
                </li>
            </template>
            <template v-slot:content-1>
                <div class="hidden p-4 bg-white dark:bg-gray-700" id="info" role="tabpanel" aria-labelledby="info-tab">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div class="h-96 xl:mx-10">
                            <iframe src="https://drive.google.com/file/d/19oDuFsdTUQAJ_Vw6WzX0AC1NxcgZwzpT/preview"
                                class="object-cover w-full h-full rounded-lg" id="info-iframe" loading="lazy">
                                <p>Ocurrio un posible error</p>
                            </iframe>
                        </div>
                        <div class="my-auto text-center md:text-left">
                            <h3 class="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Actividad de
                                Aprendizaje 7
                            </h3>
                            <h4 class="text-base font-semibold text-gray-900 dark:text-white">
                                Concurrencia
                            </h4>
                            <div class="flex items-center justify-center md:justify-normal mt-2.5 mb-5">
                                <!-- Estrellas de calificación -->
                                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>First star</title>
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                    </path>
                                </svg>
                                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Second star</title>
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                    </path>
                                </svg>
                                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Third star</title>
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                    </path>
                                </svg>
                                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Fourth star</title>
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                    </path>
                                </svg>
                                <!-- Etiqueta de dificultad -->
                                <span
                                    class="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                                    Dificultad: 4.0
                                </span>
                            </div>
                            <!-- Descripción de la actividad -->
                            <p class="pr-0 md:pr-2 text-center md:text-left text-gray-700 dark:text-gray-400">
                                La actividad consiste en realizar una investigación sobre un tema asignado al equipo al
                                inicio del semestre. Los integrantes del equipo tenían que trabajar juntos para generar un
                                documento en Google
                                donde se involucrarían todos, incluyendo una portada grupal con los nombres de los integrantes.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="hidden p-4 bg-white dark:bg-gray-700" id="present" role="tabpanel"
                    aria-labelledby="present-tab">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div class="h-96 xl:mx-10">
                            <iframe src="https://drive.google.com/file/d/1K7ypxlH4LGnD7HLwHEW2KZP_EfeyQefS/preview"
                                class="object-cover w-full h-full rounded-lg" id="present-iframe" loading="lazy">
                                <p>Ocurrio un posible error</p>
                            </iframe>
                        </div>
                        <div class="my-auto text-center md:text-left">
                            <h3 class="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Actividad de
                                Aprendizaje 7
                            </h3>
                            <h4 class="text-base font-semibold text-gray-900 dark:text-white">
                                Concurrencia
                            </h4>
                            <div class="flex items-center justify-center md:justify-normal mt-2.5 mb-5">
                                <!-- Estrellas de calificación -->
                                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>First star</title>
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                    </path>
                                </svg>
                                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Second star</title>
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                    </path>
                                </svg>
                                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Third star</title>
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                    </path>
                                </svg>
                                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Fourth star</title>
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                    </path>
                                </svg>
                                <!-- Etiqueta de dificultad -->
                                <span
                                    class="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                                    Dificultad: 4.0
                                </span>
                            </div>
                            <!-- Descripción de la actividad -->
                            <p class="pr-0 md:pr-2 text-center md:text-left text-gray-700 dark:text-gray-400">
                                La actividad consiste en realizar una investigación sobre un tema asignado al equipo al
                                inicio del semestre. Los integrantes del equipo deberán trabajar juntos para generar un
                                documento en Google
                                donde se involucren todos, incluyendo una portada grupal con los nombres de los integrantes.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="hidden p-4 bg-white dark:bg-gray-700" id="actividad" role="tabpanel"
                    aria-labelledby="actividad-tab">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div class="h-96 xl:mx-10">
                            <iframe src="https://drive.google.com/file/d/1Nz-9XbsgVr_iWFq002ogpsN4WMqmUyEA/preview"
                                class="object-cover w-full h-full rounded-lg" id="present-iframe" loading="lazy">
                                <p>Ocurrio un posible error</p>
                            </iframe>
                        </div>
                        <div class="my-auto text-center md:text-left">
                            <h3 class="mb-2 text-xl md:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                Actividad de
                                Aprendizaje 7
                            </h3>
                            <h4 class="text-base font-semibold text-gray-900 dark:text-white">
                                Concurrencia
                            </h4>
                            <div class="flex items-center justify-center md:justify-normal mt-2.5 mb-5">
                                <!-- Estrellas de calificación -->
                                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>First star</title>
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                    </path>
                                </svg>
                                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Second star</title>
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                    </path>
                                </svg>
                                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Third star</title>
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                    </path>
                                </svg>
                                <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <title>Fourth star</title>
                                    <path
                                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                    </path>
                                </svg>
                                <!-- Etiqueta de dificultad -->
                                <span
                                    class="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                                    Dificultad: 4.0
                                </span>
                            </div>
                            <!-- Descripción de la actividad -->
                            <p class="pr-0 md:pr-2 text-center md:text-left text-gray-700 dark:text-gray-400">
                                La actividad consiste en realizar una investigación sobre un tema asignado al equipo al
                                inicio del semestre. Los integrantes del equipo deberán trabajar juntos para generar un
                                documento en Google
                                donde se involucren todos, incluyendo una portada grupal con los nombres de los integrantes.
                            </p>
                        </div>
                    </div>
                </div>
            </template>
        </CardTabs>
    </section>
</template>
<script>
import Navbar from '../components/Navigation.vue';
import AccordionTop from '../components/AccordionTop.vue';
import AccordionCenter from '../components/AccordionCenter.vue';
import AccordionBottom from '../components/AccordionBottom.vue';
import GridActivities from '../components/GridActivities.vue';
import Card from '../components/Card.vue';
import CardTabs from '../components/CardTabs.vue';

export default {
    components: {
        Navbar,
        AccordionTop,
        AccordionCenter,
        AccordionBottom,
        GridActivities,
        Card,
        CardTabs,
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