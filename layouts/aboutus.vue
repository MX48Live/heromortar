<template>
  <div id="aboutus">
    <common/>
    <header-web/>
    <div class="container">
      <div class="title">
        <h1>เกี่ยวกับเรา</h1>
      </div>
      <div class="row about-menu">
        <div class="col-sm-3 col-md-2">
          <about-menu/>
        </div>
        <div class="col-sm-9 col-md-10">
          <nuxt/>
        </div>
      </div>
    </div>
    <footer-web/>
  </div>
</template>

<style lang="less">
  #aboutus {
    .about-menu {
      margin-bottom: 30px;
      ul {
        list-style: none;
        padding: 0;
        width: 100%;
        li {
          a {
            padding: 10px !important;
            display: block;
          }

          &.active, &:hover {
            background-color: #631010;
            a {
              text-decoration: none;
              color: #fff;
            }
          }
        }
      }
    }
  }
</style>

<script>
  import headerWeb from '~/components/common/headerWeb.vue'
  import footerWeb from '~/components/common/footerWeb.vue'
  import common from '~/components/common/common.vue'
  import aboutMenu from '~/components/aboutMenu.vue'

  export default {
    components: {
      headerWeb,
      common,
      aboutMenu,
      footerWeb
    }
  }
</script>

<style lang="less">
  #aboutus {
    .title {
      margin: 20px 0;
      @media (min-width: 768px) {
        margin: 50px 0 30px;
      }
    }

    .details .title {
      margin: 0px 0 30px;
      text-align: center;
      h1 {
        color: #631010;
      }
      @media (min-width: 768px) {
        text-align: left;
      }
    }
  }
</style>
