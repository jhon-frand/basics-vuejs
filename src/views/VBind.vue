<script setup>
const colorText = "color: yellow;"
import SimpleCard from "../components/cards/SimpleCard.vue"

</script>

<template>

    <div class="box-card">
        <SimpleCard
    title="V-BIND"
    >
    <p style="color: yellowgreen">Se puede dar estilos directamente en la etiqueta html, en este caso, el color del texto</p>
        <p v-bind:style="colorText" >Soy del color que tiene de valor la constante colorText</p>
        <p :style="colorText" >La directiva v-bind se puede abreviar a :</p>
    </SimpleCard>
    </div>
</template>

<style>
.box-card{
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
