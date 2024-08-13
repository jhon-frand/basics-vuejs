<script setup>
import PanelExpansion from "../components/Panels/PanelExpansion.vue"
</script>

<template>
    <div class="container">
        <div class="box-one">
                <h1>PROYECTO VUE JS</h1>
                <p>En este proyecto vamos a encontrar los conceptos fundamentales de VueJs</p>
                <a href="https://github.com/jhon-frand/basics-vuejs.git">https://github.com/jhon-frand/basics-vuejs.git</a>
            </div>
        <div class="box-two">
            <div class="directivas">

                <h2>DIRECTIVAS</h2>
                <p>Las directivas son atributos especiales que se pueden agregar a los elementos HTML para
                    realizar acciones reactivas. Comienzan por el prefijo 'v-'.</p>

                <PanelExpansion title="v-bind" link="/v-bind">
                    <p>Enlaza dinámicamente un atributo de un elemento a una expresión de JavaScript. El uso
                        abreviado son dos puntos ':'</p>
                </PanelExpansion>

                <PanelExpansion title="v-for" link="/v-for">
                <p>Itera sobre una lista o un objeto para renderizar un bloque de elementos múltiples</p>
                </PanelExpansion>

                <PanelExpansion title="v-if, v-else-if, v-else" link="/v-if">
                    <p>Renderiza un elemento de manera condicional.</p>
                </PanelExpansion>

                <PanelExpansion title="v-show" link="/v-show">
                    <p>Muestra u oculta un elemento basado en una expresión booleana. A diferencia de v-if o
                        v-show siempre mantiene el elemento en el DOM y solo cambia su visibilidad CSS</p>
                </PanelExpansion>

                <PanelExpansion title="v-on" link="/v-on">
                    <p>Adjunta escuchadores de eventos de los elementos. El uso abreviado es con arroba
                        '@'.</p>
                </PanelExpansion>

            </div>
            <div class="reactividad">

                <h2>REACTIVIDAD</h2>
                <p>La reactividad es el núcleo de Vue.js y permite que la interfaz de usuario se actualice
                    automáticamente cuando cambian los datos subyacentes. Esto se logra a través de dos
                    conceptos clave: variables reactivas y propiedades computadas</p>

                <PanelExpansion title="Variable reactiva ref()" link="/ref">
                    <p>Es una función que crea un objeto reactivo, donde los cambios en sus propiedades
                                actualizan automáticamente la vista. Es útil para datos primitivos o cualquier tipo
                                de dato en Vue 3.</p>
                </PanelExpansion>

                <PanelExpansion title="Propiedad computada computed()" link="/computed">
                    <p>Es una función que permite definir propiedades que dependen de otras propiedades
                                reactivas. Se recalculan automáticamente cuando las propiedades de las que dependen
                                cambian.</p>
                </PanelExpansion>

                <h2>MÉTODOS</h2>
                <p>Los métodos son funciones que se ejecutan cuando se llama a una instancia de Vue.js. Se
                    pueden utilizar para realizar tareas de inicialización, actualización, destrucción, etc.</p>
                <p>Se definen como funciones en la sección 'script' de un componente.</p>
                <p>A diferencia de las propiedades computadas, los métodos son ejecutados cada vez que se
                    llaman, mientras que las propiedades computadas se almacenan en caché y solo se recalculan
                    cuando cambian las dependencias.</p>

            </div>
        </div>
    </div>
</template>

<style>
.container {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.box-one{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #0277bd;
    padding: 20px;
    color: white;
}
 a{
    color: white;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
 }

 a:hover{
    color: yellow;
 }

.box-two {
    display: flex;
    padding: 30px;
    justify-content: center;
    gap: 20px;
}

.directivas,
.reactividad {
    display: flex;
    flex-direction: column;
    border-radius: 20px;
    padding: 20px;
    gap: 10px;
    background-color: #e4f2fd;
}

.directivas {
    width: 100%;
}

@media (max-width: 500px) {
 
    .box-two {
        flex-direction: column;
    }
}

</style>