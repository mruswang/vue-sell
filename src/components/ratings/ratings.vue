<template>
  <div>
    这里是ratings
    <input type="text" v-model="myVlue">
    <test :my-vlaue="myVlue" @my-event="get">
      <p slot="header">11111 header</p>
      <P>456</P>
      <p slot="footer">2222  footer</p>
    </test>
    <button @click="addone">add</button>
  </div>
</template>

<script type="text/ecmascript-6">
  import test from '../test/test';
  export default {
    data() {
      return {
        myVlue: '',
        price: 5
      };
    },
    components: {
      test
    },
    methods: {
      get(hello) {
        console.log(hello);
      },
      addone() {
        this.$store.commit('increment', this.price);
      }
    }
  };
</script>

<style>
  input{
    border:1px solid red;
  }
</style>
