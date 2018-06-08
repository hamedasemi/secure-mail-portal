<template>
  <h1 v-on:click="clickHandler">hello {{msg}}</h1>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  },
  methods: {
    clickHandler(resource) {
      fetch('/package.json')
      .then(function (response) {
        return response.json()
      }).then(function (json) {
        console.log('parsed json', json)
      }).catch(function (ex) {
        console.log('parsing failed', ex)
      })
    }
  }
}
</script>

<style>
.example {
  color: var(--color);
}
</style>