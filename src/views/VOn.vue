<script setup>
import SimpleCard from '@/components/cards/SimpleCard.vue';



// Definimos una función `handleClick` que imprime "click" en la consola cuando es llamada.
const handleClick = () => {
  console.log("click")
  alert("Me activaste")
}
const handleClickTwo = () => {
  console.log("click abreviado")
  alert("Me activaste con abreviación")
}

</script>

<template>
  <div class="content-vshow">
   <div class="box-content">
    <h1> Directiva V-on</h1>
 
 <SimpleCard>
   <p>Aquí se muestra un evento click</p><br>
 <div class="buttons">
   <v-btn v-on:click="handleClick" >Actívame</v-btn>
   <v-btn @click="handleClickTwo" >Actívame Abreviado</v-btn>
 </div>
 </SimpleCard>
   </div>
  </div>
</template>
