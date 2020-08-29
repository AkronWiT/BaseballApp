<template>
  <div id="atBatPage">
    <div id="topPage">
        <div id="bases" v-bind:class="{ 'toFirst': binding.hits[0]!=0, 'toSecond': toSecond(1), 'toThird': binding.runs[1]!=0, 'toHome': binding.runs[2]!=0 }">
          <div class="square">
            <!-- todo make a better logic for hiding squares -->
            <div v-for="n in 11" :key="n" >
              <span @click="setField(1,n)" 
              v-if="binding.plays[n-1]!==0" 
              class="fielding">{{binding.plays[n]}}</span>
            </div>
              <!-- <span @click="setValue(1,0)" class="fielding">{{binding.plays[0]}}</span>
              <span v-if="binding.plays[0]!=0" @click="setPlay(1,1)" class="fielding">{{binding.plays[1]}}</span>
              <span v-if="binding.plays[1]!=0" @click="setPlay(1,2)" class="fielding">{{binding.plays[2]}}</span>
              <span  v-if="binding.plays[2]!=0" @click="setField(1,3)" class="fielding">{{binding.plays[3]}}</span>
              <span  v-if="binding.plays[3]!=0" @click="setField(1,4)" class="fielding">{{binding.plays[4]}}</span>
              <span  v-if="binding.plays[4]!=0" @click="setField(1,5)" class="fielding">{{binding.plays[5]}}</span>
              <span  v-if="binding.plays[5]!=0" @click="setField(1,6)" class="fielding">{{binding.plays[6]}}</span>
              <span  v-if="binding.plays[6]!=0" @click="setField(1,7)" class="fielding">{{binding.plays[7]}}</span>
              <span  v-if="binding.plays[7]!=0" @click="setField(1,8)" class="fielding">{{binding.plays[8]}}</span>
              <span  v-if="binding.plays[8]!=0" @click="setField(1,9)" class="fielding">{{binding.plays[9]}}</span>
              <span  v-if="binding.plays[9]!=0" @click="setField(1,10)" class="fielding">{{binding.plays[10]}}</span>
              <span  v-if="binding.plays[10]!=0" @click="setField(1,11)" class="fielding">{{binding.plays[11]}}</span> -->
          </div>
        </div>
        <div class="runGroup" >
          <span @click="setField(0,0)" class="run first">2nd:{{binding.runs[0]}} </span>
          <span @click="setField(0,1)" class="run">3rd:{{binding.runs[1]}}</span>
        </div>
        <div class="runGroup" >
          <span @click="setField(0,2)" class="run last">Home:{{binding.runs[2]}}</span>
        </div>
        <div class="hitGroup">
          <span @click="setField(2,0)" class="hit">{{binding.hits[0]}}</span>
        </div>
    </div>
    <div id="bottomPage" v-if="scores[value]">
        <!-- This does not work because you can iterate on a Model
          <div class="options"
        v-for="score in scores[value]['options']" :key="score">
            <input v-model="score" 
                @click="setField(score)"/>  -->
        <div>
          <span  class="options" 
          v-for="scoreItem in scores[value]['options']" :key="scoreItem"
          @click="selectedScore(scoreItem)">
              {{scoreItem}}
          </span>
        </div>
    </div>
    <router-link :to="{name: 'ScoreSheet'}">
          <button type="button" @click='saveAtBat()'>Save!</button>
      </router-link>
    
  </div>
  
</template>

<script>
// import  { Data } from '../shared';
import { mapState, mapActions, mapGetters } from 'vuex'

export default {
  name: 'AtBatPage',
  props: {
    cellId: {
      type: Number,
      default: 0,
    },
    playerId: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      binding:{
        plays:[0,0,0,0,0,0,0,0,0,0,0,0],
        runs:[0,0,0],
        hits:[0]
      },
      fieldSquare:0,
      value:0,
      ids:[]
    };
  },
  async created() {
    this.ids.push(this.$route.params.playerId);
    this.ids.push(this.$route.params.cellId);
    await this.loadScores();
    await this.loadScore(this.ids);
    this.binding.id = this.score.id;
    for(var i =0 ;i <this.score.plays.length; i++){
        this.binding.plays[i] = this.score.plays[i];
    }
    for(i =0 ;i <this.score.runs.length; i++){
        this.binding.runs[i] = this.score.runs[i];
    }
    for(i =0 ;i <this.score.hits.length; i++){
        this.binding.hits[i] = this.score.hits[i];
    }
     this.$forceUpdate()
  },
  computed: {
    ...mapState(["scores","score"]),
    // ...mapGetters(['getScoresOptions','getCellById']),
    ...mapGetters(),
  },
  methods: {
    ...mapActions(["getScoresAction","getScoreAction", "updateScoreAction"]),
    async loadScores() {
      await this.getScoresAction();
    },
    async loadScore(ids){
      await this.getScoreAction(ids);
    },
    setField(value,position){
      this.value = value;
      this.fieldSquare = position;
      
    },
    saveAtBat(){
        this.updateScoreAction(this.binding);
    },
    selectedScore(scoreItem){
      if(this.value === 0){
          this.binding.runs[this.fieldSquare]=scoreItem;
      }else if(this.value ===1){
            this.binding.plays[this.fieldSquare]=scoreItem;
      }else if(this.value === 2){
            this.binding.hits[this.fieldSquare]=scoreItem;
      }
      this.$forceUpdate();
    },
    toSecond(base){
        if(this.binding.hits[0]=="T" || this.binding.runs[base]!=0) return true;
        else return false;
    }
  }
};
</script>

<style scoped>
      @import '../assets/styles/AtBatPage.css';
</style>


    