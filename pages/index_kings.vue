<template>
  <div class="landing">
    <div class="content">
      <img src="/intro.jpg">
      <br><br>
      <h2>"ข้าพระพุทธเจ้า บริษัท อาร์ เอ็น เอ็น ซัพพลาย จำกัด"</h2>
      <nuxt-link to="/home">เข้าสู่เว็บไซต์ </nuxt-link>
    </div>
    <div class="credit"><a href="http://www.freepik.com">Designed by welcomia / Freepik</a></div>
  </div>
</template>

<style lang="less">

  .landing {
    img {
      max-width: 100%;
      border: 3px solid #111111;
    }
    display: table;
    min-height: 700px;
    width: 100%;
    height: 100vh;
    background-color: #010101;
    // background-image: url(/img/intro.jpg);
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
        font-size: 16px;
        color: #FFFFFF;
      }
     a {
        margin-top: 30px;
        max-width: 200px;
        width: 100%;
        background-color: #631010;
        display: inline-block;
        text-align: center;
        height: 40px;
        border-radius: 5px;
        line-height: 40px;
        color: #ffffff;
        font-size: 16px;
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
