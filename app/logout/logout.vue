<template>
  <form v-on:submit="submitHandler">
    <button>Logout</button>
    <app-spinner v-bind:status="status"></app-spinner>
  </form>
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
      this.status = "loading";
      authentication.logout().subscribe(() => {
        document.body.setAttribute("isUserLoggedIn", false)
        this.$router.replace("dashboard");
        this.status = "loaded";
      });
    }
  }
};
</script>

<style scoped>

</style>