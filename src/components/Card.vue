<!-- Voir https://vuejs.org/guide/components/props.html#prop-passing-details -->

<script setup>
defineProps(['img', 'title', 'subTitle', 'emoji', 'val'])
</script>

<template>

  <div class="flex flex-col bg-white-0 shadow-shadowCard rounded-r-radiusCard rounded-l-radiusCard ">

    <img class="w-imgCard" :src="img">

    <div class="flex flex-col items-start px-6 mt-4">
      <p class="text-xs font-normal uppercase font-Poppins not-italic ">{{title}}</p>
      <div class="flex flex-col w-contentCard gap-y-6">
        <h1 class="text-base mt-1 font-Poppins font-semibold">{{subTitle}}</h1>
        <div class="flex gap-2">
          <div  v-for="src in val">
            <img class="w-icon" :src="emoji" >
          </div>
        </div>
      </div>
    </div>

  </div>

</template>
