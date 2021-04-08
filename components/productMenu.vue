<template>
  <ul>
    <nuxt-link :to="'/mortar/' + item.alias" v-for="item in mortarList" :key="item.id" tag="li" exact>
      <a href="#">{{ item.name }}</a>
    </nuxt-link>
  </ul>  
</template>

<script>
  import { mapGetters } from 'vuex'
  
  export default {
    computed: {
      ...mapGetters({
        'mortarList': 'product/mortarList'
      })
    }
  }
</script>
