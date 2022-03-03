<template>
  <div>
    <h1>Категории</h1>
    <div v-for="category in categories" :key="category.id" class="category-list">
      <nuxt-link :to="`/categories/${category.id}`">
        {{ category.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      categories: 'categories/getCategories'
    })
  }
}
</script>
