<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <stat  type="Disciplina" max="3" />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Stat from './components/Stat.vue'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    Stat
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
