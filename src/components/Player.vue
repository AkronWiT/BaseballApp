<template>
<!-- v-if's would be better as a filter -->
  <div class="playerBlock" 
      v-if="player.Position!='Pitcher' && player.id <='9'" >
    {{player.firstName}}
    {{player.lastName}}
  </div>
</template>

<script>
export default {
  name: 'Player',
  props: {
    id:{
      type: Number
    },
    player: {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
      @import '../assets/styles/player.css';
</style>
