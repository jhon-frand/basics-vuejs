<script setup>

import SimpleCard from '@/components/cards/SimpleCard.vue';

// Definimos una constante `activo` con el valor `null`.
const activo = null;
const active = true;

// Definimos un array de objetos `arrayBike`, cada objeto representa una moto con sus propiedades.
const arrayBike = [
  {
    marca: "Yamaha",
    modelo: "YZF R1",
    annio: 2021,
    stock: 0
  },
  {
    marca: "Honda",
    modelo: "Civic",
    annio: 2019,
    stock: 10
  },
  {
    marca: "Kawasaki",
    modelo: "Ninja 1200RR",
    annio: 2017,
    stock: 20
  }
];

</script>

<template>
   <div class="content-vif">
   <div class="box-content">
    <h1>Directiva V-IF V-ELSE-IF V-ELSE</h1><br>
   <SimpleCard>
    <p>{{ active ? 'estoy activo' : 'estoy inactivo' }}</p><br>
    <p v-if="activo === true">Estoy activo</p>
    <p v-else-if="activo === false">Estoy inactivo</p>
    <p v-else>Estoy indeciso</p>
   </SimpleCard>
    
    <p>Se puede hacer una condición dentro de una iteración v-for</p>
    <p>Cabe resaltar que el v-if tiene más relevancia entonces hay que colocarlo dentro de la directiva v-for dependiendo de la condición</p>
    
   <SimpleCard>
    <p>A continuación se muestra la lista de motocicletas que tienen un stock mayor a cero:</p>
    <v-list v-for="bike in arrayBike">
        <v-list-item v-if="bike.stock > 0" >Disponible: {{ bike.marca }} - {{ bike.modelo }}</v-list-item>
    </v-list>
   </SimpleCard>
   </div>
   </div>
</template>

<style>
.content-vif{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 20px;
}

.box-content{
  max-width: 600px;
  padding: 20px;
  background-color: #e4f2fd;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>