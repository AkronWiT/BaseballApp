import Vue from 'vue';
import Vuex from 'vuex';
import { GET_SCORE, GET_SCORES, UPDATE_SCORE } from "./mutationTypes.js";
import { Data } from "../shared/data";

Vue.use(Vuex);

const state = {
    scores:[],
    score:[]
};

const mutations = {
    [GET_SCORE](state, score){
      state.score = score;
    },
    [UPDATE_SCORE](state, score) {
      const index = state.scores.findIndex(h => h.id === score.id);
      state.scores.splice(index, 1, score);
      state.scores = [...state.scores];
    },
    [GET_SCORES](state, scores){
      state.scores = scores;
    }
};

const actions = {
  async getScoreAction({commit},ids){
    const score = await Data.getScore(ids[0],ids[1]);
    commit(GET_SCORE,score);
  }, 
  async getScoresAction({commit}){
    const scores = await Data.getScoring();
    commit(GET_SCORES,scores);
  },
  async updateScoreAction({commit},scoresItem){
    const scores = await Data.updateScore(scoresItem);
    commit(UPDATE_SCORE,scores);
  }
};

const modules = {
};

const getters = {
  // getCellById: state => id => state.score.find(score => score.id === id),
  // getScoresOptions: state => options => state.scores.find(scores =>  scores.options === options),
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
  getters
})
