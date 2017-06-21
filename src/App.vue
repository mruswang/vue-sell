<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    {{ tetal }}
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import header from './components/header/header.vue';
  export default{
    components: {
      'v-header': header
    },
    data() {
      return {
        seller: {}
      };
    },
    created() {
      this.$http.get('/api/seller').then(response => {
        response = response.body;
        this.seller = response.data;
        //  console.log(this.seller);
      });
    },
    computed: {
      tetal () {
        return this.$store.state.tetal;
      }
    }
  };
</script>

<style>

  #app .tab{
    display: flex;
    width: 100%;
    height: 40px;
    line-height:40px;
    border-bottom: 1px solid rgba(7,17,27,0.1);
  }
  #app .tab .tab-item{
    flex: 1;
    text-align: center;
  }
  #app .tab .tab-item a{
    display: block;
    font-size: 14px;
    color: rgb(77,85,93);
  }
  #app .tab .tab-item .active{
    color: red;
  }
  .clearfix{
    display: inline-block;
  }
  .clearfix:after{
    content: '';
    display: block;
    height: 0;
    line-height: 0;
    clear:both;
    visibility: hidden;
  }
</style>
