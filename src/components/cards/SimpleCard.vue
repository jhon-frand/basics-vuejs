<script setup>
import { defineProps } from "vue";

const props = defineProps({
    title: {
        type: String,
        required: false
    }
})
</script>

<template>
    <v-card color="primary" >
        <v-card-title>
            {{ title }}
        </v-card-title>
        <v-card-text class="contenido" >
            <slot ></slot>
        </v-card-text>
    </v-card>
</template>

<style>
.contenido{
    text-align: left;
}
</style>

