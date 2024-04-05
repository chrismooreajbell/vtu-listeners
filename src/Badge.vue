<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    onDelete: {
      type: Function,
      default: undefined
    }
  },
  emit: {
    delete: () => true
  }
})
</script>

<template>
  <div>
    badge
    <button v-if="onDelete" @click="$emit('delete')">delete</button>
  </div>
</template>
