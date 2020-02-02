<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Player from './components/Player.vue'
import AtBat from './components/AtBat.vue'
import Inning from './components/Inning.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    Player,
    AtBat,
    Inning
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
