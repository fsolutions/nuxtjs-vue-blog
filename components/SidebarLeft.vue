<template>
  <div id="sidebar-left">
    <h3>Материалы авторов</h3>
    <div v-for="category in categories" :key="category.id" class="category-list">
      <nuxt-link :to="`/categories/${category.id}`">
        {{ category.name }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      categories: 'categories/getCategories'
    })
  },
  mounted () {
    this.fetchCategories()
  },
  methods: {
    ...mapActions({
      fetchCategories: 'categories/fetchCategories'
    })
  }
}
</script>
