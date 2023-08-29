<template>
    <div>
        <center>

            <h1>Bienvenidos a la app de tareas</h1>
            <p>Esta es una aplicación que permite gestionar las tareas de estudiantes</p>
            <a href="/tareas">Click para iniciar (Sin nuxt link)</a>

    <br>
    <br>
            <NuxtLink to ="/tareas">
                Click para iniciar (Con nuxt link)
            </NuxtLink>
        </center>
    </div>
</template>
<script>
definePageMeta({
    layout: "blank",
});
</script>