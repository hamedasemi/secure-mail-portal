<template>
  <section>
    <h1>Dashboard</h1>
    <ul>
      <li v-for="(invoice, index) in invoices" v-bind:key="index">{{invoice.amount}}</li>
    </ul>
  </section>
</template>

<script >
export default {
  computed: {
    invoices: function() {
      console.log(0)
      return this.$state.invoices;
    }
  }
};
</script>

<style scoped>
@keyframes transition {
  from{
    transform: scale(.8)
  }
}
section {
  animation: transition 1s;
}
</style>