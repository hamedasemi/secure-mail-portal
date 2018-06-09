<template>
  <article>
    <app-header>
      <app-nav></app-nav> 
    </app-header>
    <main>
      <router-view></router-view>
    </main>

  </article>
</template>

<script>
import AppHeader from "./core/header/header.vue";
import AppNav from "./core/nav/nav.vue";

export default {
  components: {
    AppNav,
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

article {
  font-size: 2em;
  text-align: center;
  color: var(--color);
} 

</style>