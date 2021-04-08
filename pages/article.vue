<template>
  <nuxt-child/>
</template> 

<style lang="less">
  #article {
    .title {
      margin: 20px 0;
      @media (min-width: 768px) {
        margin: 50px 0 30px;
      }
    }
    .article {
      .img {
        height: 180px;
        margin-bottom: 10px;
        background: center center no-repeat;
        background-size: cover;
      }
      .desc {
        margin-bottom: 20px;
      }
    }
  }
</style>

<script>
  export default {
    head: {
      title: 'เรื่องน่ารู้ - ปูนตราฮีโร่ (Hero Mortar)'
    }
  }
</script>
