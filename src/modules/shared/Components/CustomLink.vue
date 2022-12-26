<template>
  <a
    v-if="isExternalLink"
    class="normal-link"
    target="_blank"
    :href="link.to"
    >{{ link.name }}</a
  >
  <router-link
    v-else
    :to="link.to"
    v-slot="{ href, isExactActive  }"
  >
    <a
      :class="isExactActive  ? 'is-active' : 'normal-link'"
      :href="href"
    >
      {{ link.name }}
    </a>
  </router-link>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true
    }
  },
  computed: {
    isExternalLink() {
      return this.link.to.startsWith('http')
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: underline;
}
.is-active {
  color: red;
}
.normal-link {
  color: #c6c6c6;
}
</style>
