<template>
  <nav class="navbar navbar-expand-sm navbar-light">
    <div class="container">
      <nuxt-link to="/home" class="navbar-brand">
        <img src="~/assets/img/hero-logo.png" class="logo">
      </nuxt-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span>Menu</span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <nuxt-link to="/home" tag="li" exact>
            <a href="#" data-toggle="collapse" >หน้าแรก</a>
          </nuxt-link>
          <nuxt-link to="/product" tag="li">
            <a href="#">ผลิตภัณฑ์</a>
          </nuxt-link>
          <nuxt-link to="/customer" tag="li">
            <a href="#">ลูกค้าของเรา</a>
          </nuxt-link>
          <!-- <nuxt-link to="/article" tag="li">
            <a href="#">เรื่องน่ารู้</a>
          </nuxt-link> -->
          <nuxt-link to="/aboutus" tag="li">
            <a href="#">เกี่ยวกับเรา</a>
          </nuxt-link>
          <nuxt-link to="/contactus" tag="li">
            <a href="#">ติดต่อเรา</a>
          </nuxt-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="less">
  @red: #631010;
  
  nav {
    margin-top: 0px;
    background-color: @red;
    @media (min-width: 576px) {
      margin-top: 20px;
    }
    li {
      color: #ffffff;
      a {
        color: #ffffff !important;
        padding: 15px 15px !important;
        display: block;
      }
    }

    img.logo {
      max-width: 40px;
    }

    a.navbar-brand {
      display: block;
      @media (min-width: 576px) {
        display: none;
      }
    }
    button.navbar-toggler {
      padding: 6px 10px;
      border-color: #ffffff !important;
      color: #ffffff !important;
    }
  }
</style>
