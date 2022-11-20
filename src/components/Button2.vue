<script setup>
defineProps(['text'])
</script>

<template>

  <button class="text-noir-0-0 font-semibold font-Poppins py-3 px-4 bg-purple-0 rounded-b-radiusButton  rounded-t-radiusButton h-hButton">{{text}}</button>

</template>

<style scoped>

/* complex button */
button{
  background: linear-gradient(90deg, #80D4F8 0%, #8D4ED8 31.13%, #FF6A60 67.49%, #FC1616 100%);
  border: 0;
  position: relative;
  z-index: 1;
}

button:before{
  content: "";
  position: absolute;
  display: block;
  height: calc(100% - calc(3px * 2));
  width: calc(100% - calc(3px * 2));
  top: 3px;
  left: 3px;
  background-color: #F3EDFB;
  border-radius: 30px;
  z-index: -1;
}


</style>
