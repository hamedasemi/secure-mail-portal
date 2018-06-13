<template>
  <section>
    <form v-on:submit="submitHandler">
    <input type="text">
    <input type="password">
    <button>Login</button>
    <app-spinner v-bind:status="status"></app-spinner>
  </form>
  </section>
</template>

<script>
import AppSpinner from "../core/spinner/spinner.vue";
import authentication from "../../app/shared/authentication/authentication.js";

export default {
  components: { AppSpinner },
  data: function() {
    return {
      status: "loaded"
    };
  },
  methods: {
    submitHandler: function(event) {
      event.preventDefault();
      this.$emit("my-event");
      this.status = "loading";
      authentication.login().subscribe(() => {
        document.body.setAttribute("isUserLoggedIn", true);
        this.$router.replace("dashboard");
        this.status = "loaded";
      });
    }
  }
};
</script>

<style scoped>
</style>