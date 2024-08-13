<script setup>
import { defineProps } from 'vue';

// Definimos las propiedades que harán el componente configurable
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>

<template>
    <v-expansion-panels color="primary">
      <v-expansion-panel>
        <v-expansion-panel-title>
          {{ title }}
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <div class="content">
            <slot></slot>
            <RouterLink :to="link">
              <v-btn color="primary">VER MÁS</v-btn>
            </RouterLink>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
  </template>
  

  
  <style scoped>
  .content {
    gap: 20px;
    /* Estilos opcionales para tu componente */
  }
  </style>
  