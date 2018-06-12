<template>
<div>
  <h1>Hello user</h1>
  <button>Logout</button>
</div>
</template>

<script>
import storage from "../../shared/storage/storage";

export default {

};
</script>

<style scoped>
body[isUserLoggedIn="false"] div, div {
  display: none;
}
body[isUserLoggedIn="true"] div {
  display: block;
}
</style>