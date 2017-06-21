<template>
  <div>
    <button @click="minone">minone</button>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        price: 10
      };
    },
    methods: {
      minone() {
        this.$store.dispatch('decr', this.price);
      }
    }
  };
</script>

<style>

</style>
