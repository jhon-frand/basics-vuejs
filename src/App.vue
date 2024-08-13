<template>
  <div id="app">
   <div class="btn">

        <RouterLink to="/" >
          <v-btn>
          <v-icon size="large" >mdi-home</v-icon> 
        </v-btn>
      </RouterLink>

   </div>
    <RouterView/>
  </div>
</template>

<style>
.btn{
  margin-bottom: 10px;
}
</style>