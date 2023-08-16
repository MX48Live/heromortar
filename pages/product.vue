<template>
  <div id="product">
    <div class="container">
      <div class="title">
        <h1>ผลิตภัณฑ์</h1>
      </div>

      <div class="row product-list">
        <div
          class="col-6 col-sm-4 col-md-2"
          v-for="mortar in mortarList"
          :key="mortar"
        >
          <nuxt-link :to="'/mortar/' + mortar.alias" class="item">
            <div class="img" :style="{ 'border-color': mortar.color }">
              <img :src="mortar.img" />
            </div>
            <div class="product-name">
              <p>{{ mortar.name }}</p>
            </div>
          </nuxt-link>
        </div>
      </div>
      <!-- product-list -->
    </div>
  </div>
</template>

<style lang="less">
#product {
  .title {
    margin: 20px 0;
    @media (min-width: 768px) {
      margin: 50px 0 30px;
    }
  }

  .product-list {
    .item {
      text-align: center;
      margin-bottom: 20px;

      &:hover {
        .img {
          transition: border 0.1s ease-in-out;
          border: 2px solid;
        }
      }
      .img {
        border-radius: 5px;
        margin-bottom: 5px;
        border: 0px solid;
        transition: border 0.1s ease-in-out;
        img {
          max-width: 100%;
          mix-blend-mode: multiply;
        }
      }
    }
  }
}
</style>

<script>
import { mapGetters } from "vuex";

export default {
  head: {
    title: "ผลิตภัณฑ์ - ปูนตราฮีโร่ (Hero Mortar)"
  },
  computed: {
    ...mapGetters({
      mortarList: "product/mortarList"
    })
  }
};
</script>
