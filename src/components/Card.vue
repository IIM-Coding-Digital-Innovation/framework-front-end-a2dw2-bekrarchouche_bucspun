<!-- Voir https://vuejs.org/guide/components/props.html#prop-passing-details -->

<script setup>
defineProps(['title'])
</script>

<template>
  Mon titre: {{ title }}
</template>
