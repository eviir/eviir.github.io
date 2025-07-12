<template>
  <article class="post" v-html="content" />
</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const route = useRoute()
const content = ref('')

const postName = route.params.slug
import(`../blog/${postName}.md?raw`).then(module => {
  content.value = module.default
})
</script>

<style scoped>
.post {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  line-height: 1.7;
}
</style>
