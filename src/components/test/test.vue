<template>
  <div>
    <p>{{ myVlaue }}</p>
    <button @click="emit">emit</button>
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer"></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      'my-vlaue': String
    },
    data() {
      return {
        hello: 'i am component a'
      };
    },
    methods: {
      emit() {
        this.$emit('my-event', this.myVlaue);
      }
    }
  };
</script>

<style>

</style>
