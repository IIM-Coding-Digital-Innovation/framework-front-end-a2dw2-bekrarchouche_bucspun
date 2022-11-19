<script setup>

const item = document.querySelectorAll("#item");

item.forEach(li => {
  li.onclick = function () {

    item.forEach(li => {
      li.id = "item";
    })
    li.className = "active";
  }
})

</script>

<template>

<ul class="flex gap-6 text-base font-semibold text-grey-0">
  <li id="item">1</li>
  <li id="item">2</li>
  <li id="item">3</li>
  <li id="item">4</li>
  <li>...</li>
  <li id="item">8</li>

</ul>

</template>

<style scoped>




</style>
