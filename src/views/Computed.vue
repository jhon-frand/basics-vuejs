<script setup>

import { ref, computed } from "vue"
import SimpleCard from "@/components/cards/SimpleCard.vue";

const contador = ref(0);

const incrementar = () => contador.value++;
const disminuir = () => contador.value--;
const reset = () => contador.value = 0;

// Usamos `computed` para definir una propiedad computada `classComputed` que devuelve una clase CSS.
const classComputed = computed(() => {
  // Devuelve 'zero', 'positive', o 'negative' según el valor de `contador`.
  if (contador.value === 0) {
    return 'zero';
  } else if (contador.value > 0) {
    return 'positive';
  } else {
    return 'negative';
  }
})


// Usamos `ref` para definir un array reactivo `arrayNumbers` inicializado como vacío.
const arrayNumbers = ref([]);

// Definimos una función `sendNumber` que añade el valor actual de `contador` al array `arrayNumbers`.
const sendNumber = () => {
  arrayNumbers.value.push(contador.value);
}

// Usamos `computed` para definir una propiedad computada `blockSendNumber`.
const blockSendNumber = computed(() => {
  // Busca si el número actual del contador ya está en `arrayNumbers`.
  const numberSearch = arrayNumbers.value.find((number) => number === contador.value);
  console.log(numberSearch);
  // Retorna `true` si el número es encontrado, lo que desactiva el botón.
  if (numberSearch === 0) return true; 
  return numberSearch ? true : false;
})
</script>

<template>
<div class="content-ref">
  <div class="box-content">
    <h2>Propiedad computada computed()</h2>
<p>Nuestra variable reactiva en este caso es el contador</p>
<p>Esta se va a actualizar automáticamente en la interfaz al momento de disminuir, aumentar o resetear el contador</p>
<SimpleCard >
  <p>En este caso creamos una función computada que cambia de clase CSS dependiendo de la variable reactiva contador</p>
<p>Si el número es 0 se le asignará la clase CSS 'zero', si es mayor a cero 'positive' y si es menor a cero 'negative'</p>
<h1 :class="classComputed">{{ contador }}</h1>
<div class="buttons">
  <v-btn @click="disminuir">-</v-btn>
<v-btn @click="reset" >Resetear</v-btn>
<v-btn @click="incrementar">+</v-btn>
</div>
</SimpleCard>
</div>

<div class="content-ref">
    <p>A continuación un pequeño ejercicio de lo aprendido:</p>
   <SimpleCard>
    <h1 :class="classComputed" >{{ contador }}</h1>
 <div class="buttons">
  <v-btn @click="disminuir">-</v-btn>
    <v-btn color="secondary" @click="reset" >0</v-btn>
    <v-btn  @click="incrementar" >+</v-btn>
    <v-btn color="success" @click="sendNumber" :disabled="blockSendNumber">Enviar</v-btn>
 </div>

   </SimpleCard>
    <v-list>
        <v-list-item v-for="number in arrayNumbers">{{ number }}</v-list-item>
    </v-list>
</div>

</div>
</template>

<style>
.zero{
    color: white;
}
.positive{
    color: yellow;
}
.negative{
    color: red;
}
</style>