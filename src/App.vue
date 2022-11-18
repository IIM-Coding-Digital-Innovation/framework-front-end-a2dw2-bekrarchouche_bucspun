<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Card from "./components/Card.vue";

</script>

<template>


  <!-- MAIN  -->



  <div class="w-container flex">
      <div class="flex gap-7 justify-center px-20 flex-col">

          <div class="flex ">
            <h1 class="">Les plus populaires 🔥</h1>
            <div class="flex">
              <img class="h-hDirection w-wDirection" src="img/left.png">
              <img class="h-hDirection w-wDirection" src="img/right.png">
            </div>
          </div>
          <div class="flex gap-7 justify-center">
            <Card class="w-wCard h-hCard" img="img/intersect.png" title="management & leadership"
                  subTitle="Accueillir un.e collègue en situation de handicap" emoji="img/emoji.png" val="+++" />
            <Card class="w-wCard h-hCard" img="img/intersect2.png" title="management & leadership"
                  subTitle="Accueillir un.e collègue en situation de handicap" emoji="img/emoji.png" val="+" />
            <Card class="w-wCard h-hCard" img="img/intersect3.png" title="management & leadership"
                  subTitle="Accueillir un.e collègue en situation de handicap" emoji="img/emoji.png" val="++" />
            <Card class="w-wCard h-hCard" img="img/intersect4.png" title="management & leadership"
                  subTitle="Accueillir un.e collègue en situation de handicap" emoji="img/emoji.png" val="+++" />
          </div>
        </div>

      </div>







  <!-- MAIN  -->

</template>

<style scoped>

</style>
