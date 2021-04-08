<template>
  <header>
    <div class="container logo-section">
      <nuxt-link to="/home">
        <div class="logo">
          <img src="~/assets/img/hero-logo.png">
        </div>
        <div class="text"> 
          <div class="middle">
            <h1>ปูนตรา ฮีโร่</h1>
            <h3>Hero ปูนดี... ที่สร้างสรรค์เพื่อคุณ</h3>
          </div>
        </div>
      </nuxt-link>
      <div class="clearfix"></div>
    </div>
    <main-menu/>
  </header>

</template>

<style lang="less">
 @red: #631010;
 body {
  background-image: url(/img/wallpaper.jpg);
  background-size: 100%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center bottom ;
 }
  header {
    padding: 0;
     @media (min-width: 768px) {
      padding: 10px 0 0 0; 
    }
  }

  .logo img {
    max-width: 60px; 
    @media (min-width: 768px) {
      max-width: 80px;  
    }
  }

  .logo {
    float: left;
    margin-right: 15px;
  }

  .text {
    display: table;
    height: 60px;
    @media (min-width: 768px) {
      height: 80px;
    }
    .middle {
      display: table-cell;
      vertical-align: middle;
    }
    h1, h3 {
      color: @red;
    }
  }
  .logo-section {
    a {
      text-decoration: none;
    }
    margin-top: 10px;
    display: none;
    @media (min-width: 576px) {
      display: block;
    }
  }
</style>

<script>
  import mainMenu from './menu.vue'

  export default {
    components: {
      mainMenu
    }
  }
</script>
