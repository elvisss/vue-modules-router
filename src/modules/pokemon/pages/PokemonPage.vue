<template>
  <h1>PokemonPage {{ id }}</h1>
  <div v-if="pokemon">
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
  </div>
</template>

<script>
export default {
  data() {
    return {
      pokemon: null
    }
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  /* data() {
    return {
      id: ''
    }
  }, */
  created() {/*
    const { id } = this.$route.params
    this.id = id */
    this.getPokemon()
  },
  methods: {
    async getPokemon() {
      try {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then(r => r.json())
        this.pokemon = pokemon
      } catch(err) {
        this.$router.push('/')
      }
    }
  },
  watch: {
    id() {
      this.getPokemon()
    }
  }
}
</script>

<style lang="scss" scoped></style>
