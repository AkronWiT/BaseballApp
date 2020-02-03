<template>
  <div v-if="players">
    <span  v-for="player in players" :key="player.id">
          {{ player }}
    </span>
    <button @click="loadPlayers">
      Players
    </button>
  </div>
</template>

<script>
import  { playersData } from '../shared';

export default {
  name: 'ScoreSheet',
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      players: [],
    };
  },
  async created() {
    await this.loadPlayers();
  },
  methods: {
    async loadPlayers() {
      this.player = [];
      this.message = 'getting the Players, please be patient';
      this.players = await playersData.getPlayers();
    }
  }
};
</script>
