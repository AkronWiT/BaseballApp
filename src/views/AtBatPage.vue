<template>
  <div id="atBatPage">
    <div id="topPage">
        <div  class="top left right bottom diamond">
          <div class="square">
            <!-- todo make a better logic for hiding squares -->
              <span @click="setValue(1,0)" class="fielding">{{binding.field[0]}}</span>
              <span v-if="binding.field[0]!=0" @click="setValue(1,1)" class="fielding">{{binding.field[1]}}</span>
              <span v-if="binding.field[1]!=0" @click="setValue(1,2)" class="fielding">{{binding.field[2]}}</span>
              <span  v-if="binding.field[2]!=0" @click="setValue(1,3)" class="fielding">{{binding.field[3]}}</span>
              <span  v-if="binding.field[3]!=0" @click="setValue(1,4)" class="fielding">{{binding.field[4]}}</span>
              <span  v-if="binding.field[4]!=0" @click="setValue(1,5)" class="fielding">{{binding.field[5]}}</span>
              <span  v-if="binding.field[5]!=0" @click="setValue(1,6)" class="fielding">{{binding.field[6]}}</span>
              <span  v-if="binding.field[6]!=0" @click="setValue(1,7)" class="fielding">{{binding.field[7]}}</span>
              <span  v-if="binding.field[7]!=0" @click="setValue(1,8)" class="fielding">{{binding.field[8]}}</span>
              <span  v-if="binding.field[8]!=0" @click="setValue(1,9)" class="fielding">{{binding.field[9]}}</span>
              <span  v-if="binding.field[9]!=0" @click="setValue(1,10)" class="fielding">{{binding.field[10]}}</span>
              <span  v-if="binding.field[10]!=0" @click="setValue(1,11)" class="fielding">{{binding.field[11]}}</span>
          </div>
        </div>
        <div>
          <span @click="setValue(0,12)" class="run first">{{binding.field[12]}}</span>
          <span @click="setValue(0,13)" class="run">{{binding.field[13]}}</span>
          <span @click="setValue(0,14)" class="run last">{{binding.field[14]}}</span>
      </div>
      <div >
          <span @click="setValue(2,15)" class="hit">{{binding.field[15]}}</span>
      </div>
    </div>
    <div id="bottomPage" v-if="scores">
        <!-- This does not work because you can iterate on a Model
          <div class="options"
        v-for="score in scores[value]['options']" :key="score">
            <input v-model="score" 
                @click="setField(score)"/>  -->
        <div>
          <span  class="options" 
          v-for="score in scores[value]['options']" :key="score"
          @click="setField(score)">
              {{score}}
          </span>
        </div>
    </div>
  </div>
  
</template>

<script>
import  { Data } from '../shared';

export default {
  name: 'AtBatPage',
  props: {
    id: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      binding:{field:[0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
      fieldSquare:0,
      value:0,
      scores:[],
      message:""
    };
  },
  async created() {
      await this.loadScores();
  },
  computed: {
  },
  methods: {
    async loadScores() {
      this.scores = [];
      this.message = 'getting the Players, please be patient';
      this.scores = await Data.getScoring();
    },
    setValue(value,position){
      this.value = value;
      this.fieldSquare = position;
    },
    setField(score){
      this.binding.field[this.fieldSquare]=score;
      this.$forceUpdate()
    }

  }
};
</script>

<style scoped>
      @import '../assets/styles/AtBatPage.css';
</style>


    