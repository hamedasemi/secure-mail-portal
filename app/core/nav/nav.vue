<template>
  <nav>
    <router-link v-for="navigation in navigations" :to="navigation.link" :key="navigation.id">{{navigation.name}}</router-link>
  </nav>
</template>

<script>
export default {
  props: ["navigations"]
};
</script>

<style scoped>
nav {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.router-link-active {
  color: aqua;
}
</style>