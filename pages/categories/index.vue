<template>
  <div>
    <h1>Категории</h1>
    <div class="category-list">
      <b-card v-for="category in categories" :key="category.id" class="mb-4">
        <nuxt-link :to="`/categories/${category.id}`">
          {{ category.name }} &raquo;
        </nuxt-link>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  head: {
    title: 'Разделы сайта',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Демонстрационный сайт на системе nuxt.js + vuejs'
      }
    ]
  },
  computed: {
    ...mapGetters({
      categories: 'categories/getCategories'
    })
  },
  methods: {
  }
}
</script>
