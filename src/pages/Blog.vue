
<template>
  <div class="blog">
    <h2>Blog</h2>
    <ul>
      <li v-for="post in posts" :key="post.file">
        <router-link :to="'/blog/' + post.file.replace('.md', '')">{{ post.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup>
const posts = [
  { file: 'ev-charger-installation.md', title: 'EV Charger Installation' },
  { file: 'preventive-maintenance.md', title: 'Preventive Maintenance' }
]
</script>
