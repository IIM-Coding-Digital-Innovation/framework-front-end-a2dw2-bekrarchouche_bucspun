<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Card from "./components/Card.vue";
import Button1 from "./components/Button1.vue";
import Button2 from "./components/Button2.vue";
import Cta from "./components/Cta.vue";
import Pagination from "./components/Pagination.vue";


</script>

<template>


  <!--  MAIN  -->

  <!--  CARD-ROW  -->
  <div class="flex justify-center">
      <div class="flex gap-7 justify-center flex-col px-20">
          <div class="flex justify-between mt-36">
            <h1 class="uppercase">Les plus populaires 🔥</h1>
            <div class="flex gap-x-5">
              <img class="h-hDirection w-wDirection" src="img/left.png">
              <img class="h-hDirection w-wDirection" src="img/right.png">
            </div>
          </div>
          <div class="flex gap-7 justify-center max-md:flex-wrap">
            <Card class="w-wCard h-hCard" img="img/intersect.png" title="management & leadership"
                  subTitle="Accueillir un.e collègue en situation de handicap" emoji="img/emoji.png" val="+++" />
            <Card class="w-wCard h-hCard" img="img/intersect2.png" title="vente"
                  subTitle="Accueillir un.e collègue en situation de handicap" emoji="img/emoji.png" val="+" />
            <Card class="w-wCard h-hCard" img="img/intersect3.png" title="rh, qvt & diversité"
                  subTitle="Accueillir un.e collègue en situation de handicap" emoji="img/emoji.png" val="++" />
            <Card class="w-wCard h-hCard" img="img/intersect4.png" title="thématique 1"
                  subTitle="Accueillir un.e collègue en situation de handicap" emoji="img/emoji.png" val="+++" />
          </div>

      </div>
  </div>
  <!--  CARD-ROW  -->

  <!--  CARD-ROW 2  -->
  <div class="flex justify-center">
    <div class="flex gap-7 justify-center flex-col px-20">
      <div class="flex ">
        <h1 class="uppercase mt-24">toute les formations 🚀</h1>
      </div>
      <div class="flex gap-7 justify-center max-md:flex-wrap">
        <Card class="w-wCard h-hCard" img="img/intersect5.png" title="thématique 1"
              subTitle="Accueillir un.e collègue en situation de handicap" emoji="img/emoji.png" val="+++" />
        <Card class="w-wCard h-hCard" img="img/intersect6.png" title="thématique 1"
              subTitle="Accueillir un.e collègue en situation de handicap" emoji="img/emoji.png" val="+" />
        <Card class="w-wCard h-hCard" img="img/intersect7.png" title="thématique 1"
              subTitle="Accueillir un.e collègue en situation de handicap" emoji="img/emoji.png" val="+++" />
        <Card class="w-wCard h-hCard" img="img/intersect8.png" title="thématique 1"
              subTitle="Accueillir un.e collègue en situation de handicap" emoji="img/emoji.png" val="+" />
      </div>
    </div>
  </div>
  <!--  CARD-ROW 2  -->

  <!--  CARD-ROW 3  -->
  <div class="flex justify-center mt-10">
    <div class="flex gap-7 justify-center flex-col px-20">
      <div class="flex gap-7 justify-center max-md:flex-wrap">
        <Card class="w-wCard h-hCard" img="img/intersect9.png" title="thématique 1"
              subTitle="Accueillir un.e collègue en situation de handicap" emoji="img/emoji.png" val="++" />
        <Card class="w-wCard h-hCard" img="img/intersect10.png" title="thématique 1"
              subTitle="Accueillir un.e collègue en situation de handicap" emoji="img/emoji.png" val="+" />
        <Card class="w-wCard h-hCard" img="img/intersect11.png" title="thématique 1"
              subTitle="Accueillir un.e collègue en situation de handicap" emoji="img/emoji.png" val="+" />
        <Card class="w-wCard h-hCard" img="img/intersect12.png" title="thématique 1"
              subTitle="Accueillir un.e collègue en situation de handicap" emoji="img/emoji.png" val="+" />
      </div>
    </div>
  </div>
  <!--  CARD-ROW 3  -->

  <!--  CARD-ROW 4  -->
  <div class="flex justify-center mt-10">
    <div class="flex gap-7 justify-center flex-col px-20">
      <div class="flex gap-7 justify-center max-md:flex-wrap">
        <Card class="w-wCard h-hCard" img="img/intersect13.png" title="thématique 1"
              subTitle="Accueillir un.e collègue en situation de handicap" emoji="img/emoji.png" val="++" />
        <Card class="w-wCard h-hCard" img="img/intersect14.png" title="thématique 1"
              subTitle="Accueillir un.e collègue en situation de handicap" emoji="img/emoji.png" val="+" />
        <Card class="w-wCard h-hCard" img="img/intersect15.png" title="thématique 1"
              subTitle="Accueillir un.e collègue en situation de handicap" emoji="img/emoji.png" val="+" />
        <Card class="w-wCard h-hCard" img="img/intersect16.png" title="thématique 1"
              subTitle="Accueillir un.e collègue en situation de handicap" emoji="img/emoji.png" val="+" />
      </div>
      <Pagination class="flex justify-end mt-5 max-md:justify-center"/>
    </div>
  </div>

  <!--  CARD-ROW 4  -->



  <!--  BOTTOM WINDOW  -->

  <div class="flex justify-center mb-16  mt-24  max-md:px-4">
    <div class="max-md:pt-8 max-md:pb-6 py-3.5 flex bg-lpurple-0 justify-center text-center flex-col w-wBoxCta h-hBoxCta rounded-r-radiusCard rounded-l-radiusCard max-md:h-h-r-BoxCta">
      <Cta class="max-md:mt-12" text="C'est votre dernier mot ?" text2="Si vous n'avez pas trouvé ce que vous cherchez, dites-le nous." />
        <div class="flex md:space-x-6 mt-6 px-6 justify-center max-md:flex-col max-md:space-y-4 max-md:mb-12">
          <Button1 class="px-6" text="Je prends contact"/>
          <Button2 text="Télecharger le catalogue" />
        </div>
    </div>
  </div>


  <!--  BOTTOM WINDOW   -->

  <!--  MAIN  -->

</template>

<style scoped>



</style>
