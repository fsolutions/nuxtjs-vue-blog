<template>
  <div class="posts-list">
    <h1>{{ nowPost.title }}</h1>
    <div class="post-body">
      <p>{{ nowPost.body }}</p>
      <p>{{ nowPost.body }} {{ nowPost.body }}</p>
      <blockquote>{{ nowPost.body }}</blockquote>
      <p>{{ nowPost.body }} {{ nowPost.body }} {{ nowPost.body }}</p>
      <p>{{ nowPost.body }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  head: {
    title: 'Пост автора',
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
    nowPost () {
      return this.posts.filter(post => post.id === Number(this.id))[0] || {
        title: '',
        body: ''
      }
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
