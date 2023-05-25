<script setup>
import Navbar from '../components/Navigation.vue'
</script>
<template>
    <Navbar></Navbar>
    <div class="flex flex-col md:flex-row">
        <div class="md:w-1/2">
            <h2 class="text-2xl font-bold mb-4">Datos personales:</h2>
            <ul>
                <li><span class="font-bold">Nombre completo:</span> {{ nombreCompleto }}</li>
                <li><span class="font-bold">Número de estudiante:</span> {{ numeroEstudiante }}</li>
                <li><span class="font-bold">Correo electrónico:</span> {{ correoElectronico }}</li>
                <li><span class="font-bold">Otros datos personales:</span> {{ otrosDatosPersonales }}</li>
            </ul>
        </div>
        <div class="md:w-1/2 mt-4 md:mt-0">
            <h2 class="text-2xl font-bold mb-4">Datos de la materia:</h2>
            <ul>
                <li><span class="font-bold">Nombre del curso:</span> {{ nombreCurso }}</li>
                <li><span class="font-bold">Profesor/instructor:</span> {{ nombreProfesor }}</li>
                <li><span class="font-bold">Número de sección:</span> {{ numeroSeccion }}</li>
                <li><span class="font-bold">Otros datos de la materia:</span> {{ otrosDatosMateria }}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            nombreCompleto: '[Tu nombre completo]',
            numeroEstudiante: '[Tu número de estudiante]',
            correoElectronico: '[Tu dirección de correo electrónico]',
            otrosDatosPersonales: '[Cualquier otra información relevante sobre ti]',
            nombreCurso: '[Nombre del curso]',
            nombreProfesor: '[Nombre del profesor/instructor]',
            numeroSeccion: '[Número de sección]',
            otrosDatosMateria: '[Cualquier otra información relevante sobre la materia]'
        };
    }
};
</script>
