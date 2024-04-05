<script setup>
import Badge from './Badge.vue'
const win = window
</script>

<template>
  <Badge />
  <Badge @delete="win.alert('deleted')" />
</template>
