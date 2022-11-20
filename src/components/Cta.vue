<script setup>
defineProps(['text', 'text2'])
</script>

<template>

  <div class="align-middle md:justify-center">
    <h3 class="text-h4degrade font-bold md:font-bold md:text-lg font-Poppins text-noir-0">{{text}}</h3>
    <p class="max-md:mt-4 px-4 py-3.5 md:font-normal text-base font-Poppins text-noir-0">{{text2}}</p>
  </div>

</template>

<style scoped>

@media screen and (max-width: 768px) {
    h3 {
      background: linear-gradient(90deg, #80D4F8 0%, #8D4ED8 31.13%, #FF6A60 67.49%, #FC1616 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      text-fill-color: transparent;
    }
}

</style>
