<template>
  <div>
    <common/>
    <header-web/>
    <nuxt/>
    <footer-web/>
  </div>
</template>

<style>

</style>

<script>
  import headerWeb from '~/components/common/headerWeb.vue'
  import footerWeb from '~/components/common/footerWeb.vue'
  import common from '~/components/common/common.vue'

  export default {
    components: {
      headerWeb,
      common,
      footerWeb
    }
  }
</script>
