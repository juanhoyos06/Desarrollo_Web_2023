<template>
    <div>
       <h1>App de Tareas</h1> 
       <NuxtLink class="links" to="/">Inicio</NuxtLink><br>
       <NuxtLink class="links" to="/tareas">Tareas</NuxtLink><br>
       <NuxtLink class="links" to="/docs/ayuda">Ayuda</NuxtLink><br>
       <span>Likes: {{ likes }}</span>
       <button @click="incrementLikes">Me gusta</button>
        <slot />
        <!-- slot: Cargar el contenido de las paginas (pages/..) -->
    </div>
</template>
<script>
const titleApp = ref("App de Tareas")
let likes = ref(0)
const incrementLikes = () =>{
    //Recuerda acceder al valor de la propiedad con: .value
    likes.value++
    console.log(likes);
}


</script>
<style>
.links{
    margin: 15px;

}
</style>