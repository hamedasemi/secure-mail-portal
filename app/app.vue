<template>
  <article>
    <app-header>
      <app-logo></app-logo>
      <app-nav></app-nav>
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

import AppLogin from "./login/login.vue";
import AppNotFound from "./not-found/not-found.vue";
import authentication from "./shared/authentication/authentication.js";

import Debug from "../node_modules/debug/src/browser.js";

const debug = new Debug("[app]");

debug.enabled = DEBUG;

export default {
  created: function() {
    this.$events.$on("router-push", this.onRouterPush);
    this.$events.$on("logout", this.onLogout);
    this.$state.navigations = { name: "Hamed" };
    document.body.setAttribute("isUserLoggedIn", authentication.status());
    this.$state.navigations = [
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
    ];
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
    },
    onLogout: function() {
      authentication.logout().subscribe(() => {
        document.body.setAttribute("isUserLoggedIn", false);
        this.$router.push("login");
        debug("Authentication logout");
      });
    }
  },
  components: {
    AppNav,
    AppLogo,
    AppLogin,
    AppUser,
    AppHeader,
    AppNotFound
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