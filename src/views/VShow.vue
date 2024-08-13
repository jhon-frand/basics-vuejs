<script setup>

import SimpleCard from '@/components/cards/SimpleCard.vue';
const activo = true;

</script>

<template>
   <div class="content-vshow">
    <div class="box-content">
        <h2>DIRECTIVA v-show</h2><br>
    <p>Esta directiva hace que un elemento se muestre dependiendo de si el valor booleano es true o false</p>
    <SimpleCard>
        <p>Si es true, se muestra en pantalla, sino, su display cambia a none, pero se puede ver en el DOM.</p><br>
    <p v-show="activo" >Estoy activo v-show</p>
    </SimpleCard>
    </div>
   </div>
</template>

<style>
.content-vshow{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 20px;
}
</style>