<script setup>

import SimpleCard from "../components/cards/SimpleCard.vue"
const name = "V-FOR"

// Definimos un array `arrayFruit` con nombres de frutas como strings.
const arrayFruit = ["manzana", "pera", "banana", "fresa"];

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

// Definimos un objeto `objectFruit` con detalles de una fruta.
const objectFruit = {
  nombre: "Manzana",
  color: "verde",
  peso: 100,
  id: 1,
};

</script>

<template>
  <div class="content-rows">
    <div class="row-one">
      <h1>Hola, soy la directiva {{ name }}</h1>

      <p>Este es el array definido en una constante: {{ arrayFruit }}</p>
      
     <div class="content-array">
     <SimpleCard>
      <p>A continuación se muestra el array listando cada uno de sus valores con v-for:</p>

<v-list>
  <v-list-item v-for="fruit in arrayFruit">
    {{ fruit }}
  </v-list-item>
</v-list>
     </SimpleCard>
<SimpleCard>
  <p>En el caso siguiente se agrega el index como llave única de los valores del array y se muestra en la parte
  inicial
</p>

<v-list>
  <v-list-item v-for="(fruit, index) in arrayFruit" :key="index">
    {{ index }} - {{ fruit }}
  </v-list-item>
</v-list>
</SimpleCard>
     </div>

      <p>Se pueden iterar sobre arrays sencillos como se mostró anteriormente, arrays de objetos o un objeto</p>
      <p>Aquí se muestra un ejemplo de iterar sobre un array de objetos:</p>
      <p>{{ arrayBike }}</p> <br>

      <SimpleCard>
        <p>Se puede mostrar directamente el objeto con su propiedad y valor:</p>
        <v-list>
          <v-list-item v-for="(bike, marca) in arrayBike" :key="marca">{{ bike }}</v-list-item>
        </v-list>
      </SimpleCard>
    </div>
    <div class="row-two">
      

     <SimpleCard>
      <p>O mostrar cada uno de los valores del objeto: </p>
      <v-list>
        <v-list-item v-for="(bike, marca) in arrayBike" :key="marca">
          {{ bike.marca }} - {{ bike.modelo }} - {{ bike.modelo }} - {{ bike.annio }} - {{ bike.stock }}
        </v-list-item>
      </v-list>
     </SimpleCard>
      <p>Aquí se muestra cómo iterar sobre un objeto:</p>
      <p>{{ objectFruit }}</p>
     <SimpleCard>
      <p>Mostrando solo el valor:</p>
      <v-list>
        <v-list-item v-for="item in objectFruit">{{ item }}</v-list-item>
      </v-list>
     </SimpleCard>
     <SimpleCard>
      <p>O mostrando el index, la propiedad y el valor:</p>
      <v-list>
        <v-list-item v-for="(valor, propiedad, index) in objectFruit" :key="valor">
          {{ index }} - {{ propiedad }}: {{ valor }}
        </v-list-item>
      </v-list>
     </SimpleCard>
    </div>
  </div>
</template>

<style>
.content-rows {
  display: flex;
  gap: 15px;
}

h1{
  text-align: center;
}
.row-one,
.row-two {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #e4f2fd;
}

.row-two{
  width: 100%;
}

.content-array{
  display: flex;
  gap: 10px;
}

@media (max-width: 500px) {
  .content-rows{
    flex-direction: column;
  }

  .content-array{
    flex-direction: column;
  }
}
</style>