<template>
  <nav>
    <router-link to="/dashboard">Go to Dashboard</router-link>
    <router-link to="/settings">Go to Settings</router-link>
    <router-link to="/help">Go to Help</router-link>
    <router-link to="/login">Go to Login</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  display: flex;
  flex-direction: column;
}
.router-link-active {
  color: aqua;
}
</style>