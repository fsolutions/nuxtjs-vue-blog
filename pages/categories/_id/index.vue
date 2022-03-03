<template>
  <div class="posts-list">
    <h1>Посты автора {{ catName() }}</h1>
    <div class="posts-list">
      <b-card v-for="post in postsFiltering" :key="post.id" :title="`${post.title}`" class="mb-4">
        <b-card-text>
          {{ post.body }}
        </b-card-text>
        <div class="text-right">
          <nuxt-link :to="`/categories/${id}/${post.id}`">
            Подробнее &raquo;
          </nuxt-link>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  head: {
    title: 'Раздел сайта',
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
      posts: 'posts/getPosts',
      categories: 'categories/getCategories'
    }),
    id () {
      return this.$route.params.id
    },
    postsFiltering () {
      return this.posts.filter(post => post.userId === Number(this.id))
    }
  },
  mounted () {
    this.fetchPosts()
  },
  methods: {
    ...mapActions({
      fetchPosts: 'posts/fetchPosts'
    }),
    catName () {
      const categoryMatch = this.categories.filter(category => category.id === Number(this.id))

      if (categoryMatch.length > 0) {
        return categoryMatch[0].name
      } else {
        return 'Без автора'
      }
    }
  }
}
</script>
