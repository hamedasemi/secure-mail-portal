<template>
  <h1 class="example">Bar</h1>
</template>

<script>
export default {
  created() {
    console.log(14);
  }
};
</script>

<style scoped>
@keyframes identifier {
  from {
    opacity: 0;
    transform: translateY(100%);
  }
}
.example {
  animation: identifier 1s;
}
</style>