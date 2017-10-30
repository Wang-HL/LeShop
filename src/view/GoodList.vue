<template>
  <div>
    <nav-header></nav-header>
    <nav-bread>
      <span>Good</span>
    </nav-bread>
    <div class="accessory-result-page accessory-page">
      <div class="container">
        <div class="filter-nav">
          <span class="sortby">Sort by:</span>
          <a href="javascript:void(0)" class="default cur">Default</a>
          <a href="javascript:void(0)" class="price">Price <svg class="icon icon-arrow-short"><use xlink:href="#icon-arrow-short"></use></svg></a>
          <a href="javascript:void(0)" class="filterby stopPop" @click="showFilterPop">Filter by</a>
        </div>
        <div class="accessory-result">
          <!-- filter -->
          <div class="filter stopPop" id="filter" v-bind:class="{'filterby-show':filterBy}">
            <dl class="filter-price">
              <dt>Price:</dt>
              <dd><a href="javascript:void(0)" v-bind:class="{'cur':checkNow=='all'}" @click="checkNow='all'">All</a></dd>
              <dd v-for="(price,index) in priceFilter">
                <a href="javascript:void(0)" @click="setPriceFilter(index)" v-bind:class="{'cur':checkNow == index}">{{price.priceStart}} - {{price.priceEnd}}</a>
              </dd>
            </dl>
          </div>

          <!-- search result accessories list -->
          <div class="accessory-list-wrap">
            <div class="accessory-list col-4">
              <ul>
                <li v-for="item in goodList">
                  <div class="pic">
                    <a href="#"><img v-lazy="'/static/img/' + item.prodcutImg" alt=""></a>
                  </div>
                  <div class="main">
                    <div class="name">{{item.productName}}</div>
                    <div class="price">{{item.prodcutPrice}}</div>
                    <div class="btn-area">
                      <a href="javascript:;" class="btn btn--m">加入购物车</a>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
    import './../assets/css/base.css'
    import './../assets/css/product.css'
    import './../assets/css/login.css'
    import NavHeader from './../components/NavHeader.vue'
    import NavBread from './../components/NavBread.vue'
    import NavFooter from './../components/NavFooter.vue'
    import axios from 'axios'

    export default {
      data() {
        return {
          goodList:[],
          priceFilter:[
            {
              priceStart:'0.00',
              priceEnd:'500.00'
            },
            {
              priceStart:'500.00',
              priceEnd:'1000.00'
            },
            {
              priceStart:'1000.00',
              priceEnd:'3000.00'
            }
          ],
          checkNow:"all",
          filterBy:false
        }
      },
      components:{
        NavHeader:NavHeader,
        NavFooter:NavFooter,
        NavBread:NavBread
      },
      mounted:function () {
        this.getGoodList();
      },
      methods:{
        getGoodList(){
          axios.get("/goods").then((result) => {
            var res = result.data;
            this.goodList = res.result;
          });
        },
        showFilterPop(){
          this.filterBy = true;
        },
        setPriceFilter(index){
          this.checkNow = index;
          this.filterBy = false;
        }
      }
    }
</script>
