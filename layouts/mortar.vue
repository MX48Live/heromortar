<template>
  <div id="mortar">
    <common />
    <header-web />
    <div class="container">
      <div class="title">
        <h1>ผลิตภัณฑ์</h1>
      </div>

      <div class="row">
        <div class="col-sm-4 col-md-3 ">
          <div class="product-menu">
            <product-menu />
          </div>
        </div>

        <div class="col-sm-8 col-md-9">
          <nuxt />
        </div>
      </div>
    </div>
    <footer-web />
  </div>
</template>

<style></style>

<script>
import headerWeb from "~/components/common/headerWeb.vue";
import footerWeb from "~/components/common/footerWeb.vue";
import common from "~/components/common/common.vue";
import productMenu from "~/components/productMenu.vue";

export default {
  components: {
    headerWeb,
    common,
    productMenu,
    footerWeb
  }
};
</script>

<style lang="less">
#mortar {
  .title {
    margin: 20px 0;
    @media (min-width: 768px) {
      margin: 50px 0 30px;
    }
  }
}

.product-menu {
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

      &.active,
      &:hover {
        background-color: #631010;
        a {
          text-decoration: none;
          color: #fff;
        }
      }
    }
  }
}

#mortar-detail {
  .product-photo {
    text-align: center;
    margin-bottom: 20px;

    img {
      max-width: 100%;
    }
  }

  .title {
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
