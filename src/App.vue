<template>
  <NavBar />
  <router-view />
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    NavBar: defineAsyncComponent(() =>
      import('./modules/shared/Components/NavBar.vue')
    )
  }
}
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
