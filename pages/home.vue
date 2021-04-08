<template>
  <div id="index">
    <div class="hero">
      <div class="container">
        <div class="row">
          <Carousel autoplay :autoplayTimeout=5000 :perPage=1 loop :paginationEnabled=false :speed=1000>
            <Slide>
              <img src="/img/hero/hero.jpg">
            </Slide>
            <Slide>
              <img src="/img/hero/hero1.jpg">
            </Slide>
            <Slide>
              <img src="/img/hero/hero2.jpg">
            </Slide>
            <Slide>
              <img src="/img/hero/hero3.jpg">
            </Slide>
            <Slide>
              <img src="/img/hero/hero4.jpg">
            </Slide>
          </Carousel>
        </div>
      </div>
    </div>

    <section class="product">
      <div class="container">
        <div class="title">
          <h2>ผลิตภัณฑ์</h2>
        </div>
          <div class="row product-list">
            <div class="col-6 col-sm-4 col-md-2" v-for="mortar in mortarList">
              <nuxt-link :to="'/mortar/' + mortar.alias" class="item">
                <div class="img" :style="{'border-color': mortar.color}">
                  <img :src="mortar.img">
                </div>
                <div class="product-name">
                  <p>{{ mortar.name }}<br/>{{ mortar.code }}</p>
                </div>
              </nuxt-link>
            </div>
          </div> <!-- product-list -->
        </div> <!-- container -->
      </section> <!-- product -->

      <section class="customer">
        <div class="container">
          <div class="title">
            <h2>ลูกค้าของเรา</h2>
            <nuxt-link to="/customer" tag="a" class="read-more">ดูทั้งหมด ></nuxt-link>
          </div>
          <div class="row">
            <div class="col-12">
             <p>สำหรับโครงการอื่นๆ ที่ใช้ผลิตภัณฑ์ ปูนตรา HERO ทางบริษัท อาร์ เอ็น เอ็น ซัพพลาย จำกัด กำลังรวบรวมเพื่อเพิ่มรายนามลูกค้าให้ทราบ เร็ว ๆ นี้</p>
             <br>
           </div>
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
        </div> <!-- container -->
      </section> <!-- customer -->

      <!-- <section class="article">
        <div class="container">
          <div class="title">
            <h2>เรื่องน่ารู้</h2>
            <nuxt-link to="/article" tag="a" class="read-more">ดูทั้งหมด ></nuxt-link>
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
          </div>
        </div>
      </section> --> <!-- article -->

      <section class="aboutus">
        <div class="container">
          <div class="title">
            <h2>เกี่ยวกับเรา</h2>
          </div>
          <div class="row aboutus">
            <div class="col-md-5 img" style="background-image: url(/img/aboutus.jpeg);">
            </div>
            <div class="col-md-6">
              <div class="desc">
                <p>
                  <strong>บริษัท อาร์ เอ็น เอ็น ซัพพลาย จำกัด</strong><br/>
                  บริษัท อาร์ เอ็น เอ็น ซัพพลาย จำกัด ก่อตั้ง โดยกลุ่มผู้เชี่ยวชาญทางด้านผลิตภัณฑ์ด้านการก่อสร้าง ซึ่งได้ร่วมกันคิดค้นผลิตภัณฑ์ปูนซีเมนต์ มอร์ตาร์ สำหรับฉาบผนังคอนกรีต ซึ่งมีความแข็งแรงและการยึดเกาะสูง ผลิตด้วยซีเมนต์ผงปอร์ตแลนด์ประเภท 1 ซึ่งมีความแข็งแรงสูง ทั้งยังช่วยลดขั้นตอนในการทำงาน ด้วยการผสมน้ำสะอาดแล้วฉาบได้ทันที ไม่ต้องสลัดดอก ชิบหน้าลาย หรือรีดปูนกาวเพื่อช่วยในเรื่องการยึดเกาะระหว่างปูนฉาบกับผนังคอนกรีต ไม่หลุดร่อนแม้ในความหนา 4-5 เซนติเมตร ก่อให้เกิด ปูนฉาบคอนกรีต HERO H111... 
                  <nuxt-link to="/aboutus">อ่านต่อ ></nuxt-link>
                </p>
              </div>
            </div>
          </div> <!-- row -->
        </div>
      </section> <!-- aboutus -->

      <section class="contactus">
        <div class="container">
          <div class="title">
            <h2>ติดต่อเรา</h2>
          </div>
          <div class="row contactus">
            <div class="col-md-3">
              <div class="map">
                <img src="/img/qrcode.jpg">
                <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1935.2924814914998!2d100.6633845803124!3d14.042598676225017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d7f8204c827e1%3A0xe31c910ffe42db66!2zMTIg4LiW4LiZ4LiZ4LmA4Lil4Li14Lii4Lia4LiE4Lil4Lit4LiH4Liq4Liy4LihIFRhbWJvbiBLaGxvbmcgU2FtLCBBbXBob2UgS2hsb25nIEx1YW5nLCBDaGFuZyBXYXQgUGF0aHVtIFRoYW5pIDEyMTIw!5e0!3m2!1sen!2sth!4v1504318913796" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe> -->
              </div>
            </div>
            <div class="col-md-9">
              <div class="desc">
                <p><strong>บริษัท:</strong> บริษัท อาร์ เอ็น เอ็น ซัพพลาย จำกัด</p>
                <p><strong>ที่อยู่:</strong> 40/2116 ม.4 ต.คลองสาม อ.คลองหลวง จ.ปทุมธานี 12120</p>
                <p><strong>โทร :</strong> 092-319-5087</p>
                <p><strong>FAX :</strong> 02-902-3103</p>
                <p><strong>อีเมล:</strong> rnnsupply@outlook.co.th</p>
                <p><strong>Facebook: </strong> <a href="https://www.facebook.com/ปูนตรา-HERO-500165013461722/" target="_blank"> ปูนตรา HERO</a></p>
              </div>
            </div>
          </div>
        </div> <!-- container -->
      </section> <!-- contactus -->

  </div> <!-- root -->
</template>

<style lang="less">
  #index {
    section {
      padding: 60px 0 0px 0;
    }
    .VueCarousel-wrapper {
      background-image: url('/img/hero/hero.jpg');
      background-size: 100%;
      background-repeat: no-repeat;
    }
    // .VueCarousel-inner {
    //   visibility: visible !important;
    // }
    // .VueCarousel-slide img {
    //   max-width: 100%;
    // }
    .hero img {
      width: 100%;
      height: 100% !important;
    }

    .title {
      padding: 20px 0 0px 0;
      border-bottom: 1px solid #631010;
      margin-bottom: 30px;
      h2 {
        background-color: #631010;
        color: #ffffff;
        display: inline-block;
        padding: 10px 50px;
        margin: 0;
      }
      .read-more {
        margin-top: 15px;
        float: right;
        font-size: 1.5rem;
      }
    }

    section.product {
      // background-color: #FFF5F5;
      .product-list {
        a {
          display: block;
        }
        .item {
          text-align: center;
          margin-bottom: 20px;

          &:hover {
            .img {
              transition: border .1s ease-in-out; 
              border: 2px solid;
            }
          }
          .img {
            padding-top: 10px;
            padding-bottom: 10px;
            border-radius: 5px;
            margin-bottom: 5px;
            border: 0px solid;
            transition: border .1s ease-in-out; 
            img {
              max-width: 100%;
              mix-blend-mode: multiply;
            }
          }
        }
      }
    }

    section.customer {
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

    section.aboutus {
      .aboutus .img {
        background: center center no-repeat;
        background-size: cover;
        min-height: 200px;
        margin-bottom: 20px;
        margin: 0 15px 10px 15px;
        @media (min-width: 768px) { 
          margin: 0 0 0 15px;
        }
      }
      .aboutus .desc {
        @media (min-width: 768px) { 
          padding-left: 20px;
        }
      }
    }

    section.contactus {
      .map {
        margin-bottom: 15px;
        text-align: center;
      }
      .map img {
        max-width: 200px;
        width: 100%;
        mix-blend-mode: multiply;
        margin:  0 auto;
      }
    }

    section.article {
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

<script>
  import { mapGetters } from 'vuex'
  import { Carousel, Slide } from 'vue-carousel'

  export default {
    computed: {
      ...mapGetters({
        'mortarList': 'product/mortarList',
        'customerList': 'product/customerList'
      })
    },
    components: {
      Carousel,
      Slide
    }
  }
</script>
