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
    <aside>
      <app-settings></app-settings>
    </aside>
    <footer>
      <small>hello footer</small>
    </footer>
  </article>
</template>

<script>
import AppHeader from "./core/header/header.vue";
import AppNav from "./core/nav/nav.vue";
import AppLogo from "./core/logo/logo.vue";
import AppUser from "./core/user/user.vue";

import AppLogin from "./login/login.vue";
import AppSettings from "./settings/settings.vue";
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
        name: "Dashboard",
        link: "/dashboard"
      },
      {
        name: "Settings",
        link: "/settings"
      },
      {
        name: "Help",
        link: "/help"
      }
    ];
    this.$state.invoices = [
      {
        id: 0,
        amount: 220
      },
      {
        id: 1,
        amount: 1800
      },
      {
        id: 2,
        amount: 70
      }
    ];

    setTimeout(() => {
      this.$state.navigations = [
        {
         name: "sdfghj",
        link: "/wertyui"
      },
      ]
      
    }, 2000);
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
    AppSettings,
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
  display: grid;
  grid-template-areas:
    "header header header header"
    "main main main aside"
    "footer footer footer footer";
  grid-template-columns: auto auto auto 200px;
  grid-template-rows: auto;
}
header {
  grid-area: header;
  background: salmon;
}
main {
  grid-area: main;
  background: rgb(255, 206, 71);
}
aside {
  grid-area: aside;
  background: rgb(46, 89, 139);
}
footer {
  grid-area: footer;
  background: rgb(62, 138, 100);
}
</style>