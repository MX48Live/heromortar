<template>
  <div class="landing">
    <div class="content">
      <div class="intro-logo">
        <img src="/img/intro-logo.jpg">
      </div>
      <h1>ปูนตรา ฮีโร่</h1>
      <h2>Hero ปูนดี... ที่สร้างสรรค์เพื่อคุณ</h2>
      <nuxt-link to="/home">เข้าสู่เว็บไซต์ </nuxt-link>
    </div>
    <div class="credit"><a href="http://www.freepik.com">Designed by welcomia / Freepik</a></div>
  </div>
</template>

<style lang="less">

  .landing {
    display: table;
    min-height: 700px;
    width: 100%;
    height: 100vh;
    background-image: url(/img/intro.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right top;
    .content {
      display: table-cell;
      vertical-align: middle;
      box-sizing: border-box;
      padding: 40px;
      text-align: center;
      padding-bottom: 200px;
      @media (min-width: 768px) {
        text-align: center;
      }
      h1, h2 {
        color: #631010;
      }
     a {
        margin-top: 30px;
        max-width: 300px;
        width: 100%;
        background-color: #631010;
        display: inline-block;
        text-align: center;
        height: 50px;
        border-radius: 5px;
        line-height: 50px;
        color: #ffffff;
        font-size: 20px;
      }
      .intro-logo {
        mix-blend-mode: multiply;
        height: 120px;
        margin-bottom: 10px;
        img {
          max-width: 100%;
          max-height: 100%;
        }
      }
    }
    .credit {
      position: absolute;
      bottom: 5px;
      left: 5px;
      opacity: 0.2;
      color: #ffffff;
      font-size: 6px;
      a {
        color: inherit;
        &:hover {
          text-decoration: none;
        }
      }
    }
  }
</style>

<script>
  export default {
    layout: 'home'
  }
</script>
