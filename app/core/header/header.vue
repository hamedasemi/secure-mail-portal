<template>
  <header>
    <slot></slot>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>