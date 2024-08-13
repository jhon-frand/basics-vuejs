<script setup>



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
</script>

<template>

  <!-- Interacción con el contador. -->
  <p>
    Permitir que el usuario envíe un número.
    Mostrar ese número en una lista de array.
    No permitir enviar el mismo número dos veces.
  </p>
  <h2 :class="classComputed">{{ contador }}</h2>
  <button @click="incrementar">Aumentar</button>
  <button @click="disminuir">Disminuir</button>
  <button @click="reset">Resetear</button>
  <button @click="sendNumber" :disabled="blockSendNumber">Enviar</button>

  <!-- Mostramos los números enviados. -->
  <p>{{ arrayNumbers }}</p>
  <ul>
    <li v-for="(number, index) in arrayNumbers" :key="index">{{ number }}</li>
  </ul>
</template>

<style>
/* Estilos CSS para diferentes elementos. */
h1 {
  color: rgb(89, 89, 242);
}

.parrafo {
  font-size: 20px;
  color: chartreuse;
}

.positive {
  color: green;
}

.negative {
  color: red;
}

.zero {
  color: yellowgreen;
}

button{
  width: 200px;
  background-color: rgb(16, 16, 189);
  border: none;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  padding: 5px;
}
</style>
