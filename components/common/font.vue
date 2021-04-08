<template>
</template>

<style lang="less">

  @font-face {
    font-family: 'Kanit';
    src: url('~/fonts/kanit-medium-webfont.eot');
    src: url('~/fonts/kanit-medium-webfont.eot?#iefix') format('embedded-opentype'),
         url('~/fonts/kanit-medium-webfont.woff2') format('woff2'),
         url('~/fonts/kanit-medium-webfont.woff') format('woff'),
         url('~/fonts/kanit-medium-webfont.ttf') format('truetype'),
         url('~/fonts/kanit-medium-webfont.svg#kanitmedium') format('svg');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Kanit';
    src: url('~/fonts/kanit-regular-webfont.eot');
    src: url('~/fonts/kanit-regular-webfont.eot?#iefix') format('embedded-opentype'),
         url('~/fonts/kanit-regular-webfont.woff2') format('woff2'),
         url('~/fonts/kanit-regular-webfont.woff') format('woff'),
         url('~/fonts/kanit-regular-webfont.ttf') format('truetype'),
         url('~/fonts/kanit-regular-webfont.svg#kanitregular') format('svg');
    font-weight: 400;
    font-style: normal;
}

  @red: #631010;
  @black: #303030;

  html, body {
    font-size: 8.5px;
    font-family: 'Kanit';
    -webkit-font-smoothing: antialiased;
  }

  @media (min-width: 768px) {
    html, body {
      font-size: 9px;
      color: @black;
    }
  }

  @media (min-width: 992px) {
    html, body {
      font-size: 10px;
    }
  }

  @media (min-width: 1200px) {
    html, body {
      font-size: 10px;
    }
  }

  h1, h2, h3 {
    font-weight: 500;
    letter-spacing: 0.1px;
    color: @black;
  }

  p, input, textarea, li {
    letter-spacing: 0.2px;
    font-weight: 400;
    font-size: 1.5rem;
    color: @black;
  }

  a {
    font-size: 1em;
    color: @red;
  }

  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 2rem;
  }
</style>

<script>
  export default {
  }
</script>
