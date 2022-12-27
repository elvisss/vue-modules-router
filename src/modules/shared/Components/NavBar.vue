<template>
  <div>
    <!-- <router-link :to="{ name: 'home' }">Pokemon List</router-link>
    <router-link :to="{ name: 'pokemon-id', params: { id: 25 } }"
      >Id</router-link
    >
    <router-link :to="{ name: 'about' }">About</router-link> -->
    <CustomLink v-for="link in links" :key="link.to" :link="link" />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

export default {
  data() {
    const pokemonLinks = [
      { to: 'pokemon-home', name: 'Pokemons' },
      { to: 'pokemon-id', name: 'Pokemon ID', id: 151 },
      { to: 'pokemon-about', name: 'About' },
      { to: 'https://www.google.com', name: 'Google' }
    ]
    const dbzLinks = [
      { to: 'dbz-home', name: 'DBZ' },
      { to: 'dbz-about', name: 'About' },
      { to: 'https://www.facebook.com', name: 'Facebook' }
    ]
    return {
      links: pokemonLinks.concat(dbzLinks)
    }
  },
  components: {
    CustomLink: defineAsyncComponent(() => import('./CustomLink.vue'))
  }
}
</script>

<style scoped>
a {
  margin: 0 10px;
}
.router-link-exact-active {
  color: red;
}
</style>
