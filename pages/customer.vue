<template>
  <div id="customer">
    <div class="container">
      <div class="title">
        <h1>ลูกค้าของเรา</h1>
      </div>
      <div class="row customer-list">
        <div class="col-6 col-sm-4 col-md-3" v-for="customer in customerList">
          <div class="item">
            <div class="img" :style="{ 'background-image': 'url(' + customer.img + ')' }"></div>
            <div class="name">
              <p>{{ customer.name }}</p>
            </div>
          </div>
        </div>
      </div> <!-- row -->
    </div>
  </div>
</template>


<style lang="less">
  #customer {
    .title {
      margin: 20px 0;
      @media (min-width: 768px) {
        margin: 50px 0 30px;
      }
    }

    .customer-list {
      .item {
        margin-bottom: 20px;
        text-align: center;
        .img {
          background: top center no-repeat;
          background-size: cover;
          margin-bottom: 5px;
          height: 130px;
          width: 100%;
        }
      }
    }
  }
</style>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        'customerList': 'product/customerList'
      })
    },
    head: {
      title: 'ลูกค้าของเรา - ปูนตราฮีโร่ (Hero Mortar)'
    }
  }
</script>
