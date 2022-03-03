<template>
  <h1>Категория #{{ id }}</h1>
</template>

<script>
export default {
  // validate ({ params }) {
  //   return /^\+$/.test(params.id)
  // },
  computed: {
    id () {
      return this.$route.params.id
    }
  }
}
</script>
