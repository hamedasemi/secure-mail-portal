<template>
<div>
  <h1>Hello user</h1>
  <form v-on:submit="submitHandler">
    <button>Logout</button>
  </form>
</div>
</template>

<script>
import storage from "../../shared/storage/storage";

export default {
  methods: {
    submitHandler: function(event) {
      event.preventDefault();
      console.log(12)
      this.$events.$emit("logout");
    }
  }
};
</script>

<style scoped>
body[isUserLoggedIn="false"] div,
div {
  display: none;
}
body[isUserLoggedIn="true"] div {
  display: block;
}
</style>