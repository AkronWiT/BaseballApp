<template >
<div>
  <div v-if="players">
      <div v-for="n in 10" :key="n">
          <Inning
            :in="n"
            v-bind:class="{ 'grid-blank': n==1, 'grid-inning': n>1}"
          />
      </div>
  </div>
  
  <div  v-for="player in players" :key="player.name">
    <!-- need to filter players TODO Remove v-if -->
    <div v-if="player.id<=9">
    <router-link to="/PlayerInfo">
          <Player 
              :id="player.id"
              :player="player"
              class="grid-player"
          />
    </router-link>
    
    <div v-for="n in 9" :key="n">
      <router-link to="/AtBatPage">
          <AtBat
            :in="n" 
            class="grid-item"
          />
      </router-link>
    </div>
   
  </div>
  </div>
</div>
</template>

<script>
import  { playersData } from '../shared';
import Player from '../components/Player';
import AtBat from '../components/AtBat';
import Inning from '../components/Inning';

export default {
  name: 'ScoreSheet',
  components:  {
    Player,
    AtBat,
    Inning
  },
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      players: [],
      Innings: [1,2,3,4,5,6,7,8,9]
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
