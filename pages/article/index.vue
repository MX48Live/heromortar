<template>
  <div id="article">
    <div class="container">
      <div class="title">
        <h1>เรื่องน่ารู้</h1>
      </div>
      <div class="row article">
        <div class="col-md-4">
          <nuxt-link to="/article/template">
            <div class="img" style="background-image: url(/img/article.jpeg);"></div>
            <div class="desc">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
          </nuxt-link>
        </div>
        <div class="col-md-4">
          <nuxt-link to="/article/template">
            <div class="img" style="background-image: url(/img/article.jpeg);"></div>
            <div class="desc">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
          </nuxt-link>
        </div>
        <div class="col-md-4">
          <nuxt-link to="/article/template">
            <div class="img" style="background-image: url(/img/article.jpeg);"></div>
            <div class="desc">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
          </nuxt-link>
        </div>
        <div class="col-md-4">
          <nuxt-link to="/article/template">
            <div class="img" style="background-image: url(/img/article.jpeg);"></div>
            <div class="desc">
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
            </div>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
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
