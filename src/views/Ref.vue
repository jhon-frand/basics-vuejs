<script setup>

import { ref } from "vue"
import SimpleCard from "@/components/cards/SimpleCard.vue";

const contador = ref(0);


// Definimos una función `incrementar` que incrementa el valor de `contador`.
const incrementar = () => contador.value++;

// Definimos una función `disminuir` que decrementa el valor de `contador`.
const disminuir = () => contador.value--;

// Definimos una función `reset` que resetea el valor de `contador` a 0.
const reset = () => contador.value = 0;

</script>

<template>
<div class="content-ref">
   <div class="box-content">
    <h2>Variable reactiva Ref()</h2> 
<p>Nuestra variable reactiva en este caso es el contador</p>
<p>Esta se va a actualizar automáticamente en la interfaz al momento de disminuir, aumentar o resetear el contador</p>
<SimpleCard>
    <h1>{{ contador }}</h1>
    <div class="buttons">
        
<v-btn @click="disminuir">-</v-btn>
<v-btn @click="reset" >Resetear</v-btn>
<v-btn @click="incrementar">+</v-btn>
    </div>
</SimpleCard>
   </div>
</div>
</template>

<style>
.content-ref{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    padding: 20px;
}

.buttons {
    display: flex;
    gap: 20px;
}

</style>