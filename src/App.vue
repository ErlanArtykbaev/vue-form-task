<template>
  <div id="app">
		<Form />
  </div>
</template>

<script>
import Form from './components/Form'

export default {
  name: 'App',
  components: {
		Form
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
