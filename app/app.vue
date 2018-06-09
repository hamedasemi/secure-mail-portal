<template>
  <article>
    <app-header>
      <app-logo></app-logo>
      <app-nav :navigations="navigations"></app-nav> 
    </app-header>
    <main>
      <router-view></router-view>
    </main>

  </article>
</template>

<script>
import AppHeader from "./core/header/header.vue";
import AppNav from "./core/nav/nav.vue";
import AppLogo from "./core/logo/logo.vue";

export default {
  components: {
    AppNav,
    AppLogo,
    AppHeader
  },
  data: function() {
    return {
      navigations: [
        {
          id: 0,
          name: "Dashboard",
          link: "/dashboard"
        },
        {
          id: 1,
          name: "Settings",
          link: "/settings"
        },
        {
          id: 2,
          name: "Help",
          link: "/help"
        },
        {
          id: 3,
          name: "Login",
          link: "/login"
        }
      ]
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