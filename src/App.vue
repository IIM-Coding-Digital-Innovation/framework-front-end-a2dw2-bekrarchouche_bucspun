<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
import Card from "./components/Card.vue";
import Button1 from "./components/Button1.vue";
import Button2 from "./components/Button2.vue";
import Cta from "./components/Cta.vue";
import Pagination from "./components/Pagination.vue";
import Button from "./components/Button.vue";




</script>

<template>
  <!-- HEADER -->
  <header class="bg-cover bg-center bg-no-repeat bg-header h-[464px] w-full">
    <div class="flex content-center items-center pl-[55px] pt-[50px]">
      <div class="mr-[90px] pl-[60px]">
        <img src="/img/imagify.png" alt="">
      </div>

      <div class="flex gap-6 text-white-0 mr-[310px] max-md:hidden ">
        <div class="font-Poppins">Offres</div>
        <div class="font-Poppins font-Bold">Formations</div>
        <div class="font-Poppins">Ressources</div>
        <div class="font-Poppins">À propos</div>
      </div>


      <div class="flex flex-row gap-9 ml-[500px] max-md:hidden">
        <Button class="text-white-0 text-ctanoir bg-white-0 bg-opacity-30 font-SemiBold border-0" text="06 74 49 03 21"/>
        <Button class="text-purple-0 text-ctanoir bg-white-0 font-SemiBold border-0 " text="Je prends contact"/>
      </div>
    </div>

    <div class="flex flex-col items-center mt-[7em] w-full gap-6 " >
      <h1 class="text-xl font-Bold  items-center font-Bold text-white-0 max-md:text-sm ">Découvrez nos formations sur étagère !</h1>
      <p class="text-white-0 w-[844px] text-center mt-[10px] max-md:w-15 max-md:h-10 max-md:ml-[-255px] max-md:mr-[80px]">Notre catalogue de formations soft skills est le meilleur allié de vos managers et collaborateurs. Management, vente, ressources humaines, efficacité professionnelle... Composez votre parcours de formation et mixez les modalités pédagogiques pour développer leurs compétences.</p>
      <div class = "w-[1122px] h-[105px] mt-[150px]  rounded-[30px] bg-white-0 flex  gap-10 max-md:ml-[-1px] max-md:w-[350px] max-md:flex-col max-md: h-[130px] max-md:ml-[5px] max-md:mb-[10px] mt-0 max-md:mt-10 shadow-shadowCard justify-center items-center">
      <div class = "flex items-center gap-[470px] flex-row w-[842px] h-[56px]  rounded-[30px] bg-[#F3EDFB] place-content-center max-md:w-[320px] max-md:gap-[50px] ">
      <p class = "h-[22px] w-[282px] text-[#0A0909] font-Poppins max-md:w-[482px] ml-6 ">Quelle formations recherchez-vous</p>
      <img src="public/img/loupe.png" class =" w-[40px] h-[42.11px] left-[780px] top-[150px]">
      </div>
      <div class = "box-border flex flex-row justify-center items-center p-0 gap-4 w-[187px] h-[60px] rounded-[30px] bg-[#F3EDFB] max-md:w-[320px] max-md:mt-[-25px] max-md: h-[60px] max-md:ml-[10px]" >
      <p class = "text-[#0A0909] font-Poppins font-normal h-[22px] w-[44px] ">Filtrer</p>
    </div>
    </div>
    </div>
  
  </header>

  <!--  CARD-ROW  -->
  <main>
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
</main>
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

  <!-- FOOTER  -->
  <footer class="bg-white dark:bg-noir-0 display-grid inline-grid grid-cols-5 py-8 px-6 ">

      <div class="text-3xl font-Poppins text-white-0 mt-20 ml-10" >
        <p>skillsday</p>
        <a class="text-sm text-left ">Skillsday est un organisme nouvelle génération qui a pour mission de moderniser et digitaliser la formation en entreprise pour former, vraiment !</a>
      </div>
      <div class="ml-16">
        <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-green opacity-50 mt-32 ">Solutions</h2>
        <ul class="text-white-0 dark:text-white-0">
          <li class="mb-4">
            <a href="#" class=" hover:underline font-SemiBold">Développer les soft skills</a>
          </li>
          <li class="mb-4">
            <a href="#" class="hover:underline font-SemiBold">Digitaliser les formations</a>
          </li>
          <li class="mb-4">
            <a href="#" class="hover:underline font-SemiBold">Accompagner les déploiements</a>
          </li>
        </ul>
      </div>
      <div class="ml-16">
        <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-green opacity-50 mt-32">Formations</h2>
        <ul class="text-gray-500 dark:text-gray-400">
          <li class="mb-4">
            <a href="#" class="hover:underline font-SemiBold text-white-0">Toutes les formations</a>
          </li>
          <li class="mb-4">
            <a href="#" class="hover:underline font-SemiBold text-white-0">Télécharger le catalogue</a>
          </li>
        </ul>
      </div>
      <div class="ml-16">
        <h2 class="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-green opacity-50 mt-32">Informations</h2>
        <ul class="text-gray-500 dark:text-gray-400">
          <li class="mb-4">
            <a href="#" class="hover:underline font-SemiBold text-white-0">Nous rejoindre</a>
          </li>
          <li class="mb-4">
            <a href="#" class="hover:underline font-SemiBold text-white-0">Nous contacter</a>
          </li>
          <li class="mb-4">
            <a href="#" class="hover:underline font-SemiBold text-white-0">FAQ</a>
          </li>
        </ul>
      </div>
    <div></div>
    <div class="flex flex-col ml-10 max-md:gap-4 max-md:mt-10 text-white-0 mt-8" >
      <p class="text-sm">©Skillsday 2022</p>
      <p class="text-sm max-md:">Mentions légales • Politique de confidentialité • CGV</p>
      
    </div>


    <div class="flex gap-3 mt-8 ml-20">
      <img class="h-6" src="/img/insta.png">
      <img class="h-6" src="/img/inconnu.png">
      <img class="h-6" src="/img/youtube.png">
      <img class="h-6" src="/img/link.png">
    </div>
  </footer>

</template>



