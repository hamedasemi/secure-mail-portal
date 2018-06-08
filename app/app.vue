<template>
  <p>{{ greeting }} World! 
    <app-header></app-header> 
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>

      <router-view></router-view>

  </p>
</template>

<script>
import AppHeader from "./core/header.vue";

export default {
  components: {
    AppHeader
  },
  data: function() {
    return {
      greeting: "Hello"
    };
  }
};
</script>

<style scoped>
.router-link-active {
  color: aqua;
}
p {
  font-size: 2em;
  text-align: center;
  color: var(--color);
}
</style>