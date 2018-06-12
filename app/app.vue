<template>
  <article>
    <app-header>
      <app-logo></app-logo>
      <app-nav v-bind:navigations="navigations"></app-nav>
      <app-login v-on:my-event="myEventHandler"></app-login>
      <app-user></app-user>
    </app-header>
    <main>
      <router-view v-on:my-event-3="myEventHandler3"></router-view>
    </main>
  </article>
</template>

<script>
import AppHeader from "./core/header/header.vue";
import AppNav from "./core/nav/nav.vue";
import AppLogo from "./core/logo/logo.vue";
import AppUser from "./core/user/user.vue";
import AppAny from "./core/any/any.vue";

import AppLogin from "./login/login.vue";
import AppNotFound from "./not-found/not-found.vue";
import AppLogout from "./logout/logout.vue";

import Debug from "../node_modules/debug/src/browser.js";

const debug = new Debug("[app]");

debug.enabled = true;

export default {
  created: function() {
    this.$events.$on("router-push", this.onRouterPush);
  },
  methods: {
    myEventHandler: function() {
      debug("My custom event works.");
    },
    myEventHandler3: function() {
      debug("My custom event works 3333.");
    },
    onUserLoggedIn: function() {
      debug("User has been logged in.");
    },
    onUserLoggedOut: function() {
      debug("User has been logged out.");
    },
    onRouterPush: function(path) {
      debug("Router Push", path);
      this.$router.push(path);
    }
  },
  components: {
    AppNav,
    AppAny,
    AppLogo,
    AppLogin,
    AppUser,
    AppHeader,
    AppLogout,
    AppNotFound
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