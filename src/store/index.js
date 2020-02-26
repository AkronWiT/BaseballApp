import Vue from 'vue';
import Vuex from 'vuex';
import { GET_CELL, GET_SCORES } from "./mutationTypes.js";
import { Data } from "../shared/data";

Vue.use(Vuex);

const state = {
    scores:[],
    cell:[]
};

const mutations = {
    [GET_CELL](state, cell){
      state.cell = cell;
    },
    [GET_SCORES](state, scores){
      state.scores = scores;
    }
};

const actions = {
  
  async getCellAction({commit},ids){
    const cell = await Data.getCell(ids[0],ids[1]);
    commit(GET_CELL,cell);
  }, 
  async getScoresAction({commit}){
    const scores = await Data.getScoring();
    commit(GET_SCORES,scores);
  }
};

const modules = {
};

const getters = {
  // getCellById: state => id => state.cell.find(cell => cell.id === id),
  // getScoresOptions: state => options => state.scores.find(scores =>  scores.options === options),
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
  getters
})
