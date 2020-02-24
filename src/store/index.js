import Vue from 'vue';
import Vuex from 'vuex';
import { GET_CELLS, GET_SCORES } from "./mutationTypes.js";
import { Data } from "../shared/data";

Vue.use(Vuex);

const state = {
    scores:[],
    cells:[]
};

const mutations = {
    [GET_CELLS](state, cells){
      state.cells = cells;
    },
    [GET_SCORES](state, scores){
      state.scores = scores;
    }
};

const actions = {
  async getCellsAction({commit}){
    const cells = await Data.getCells();
    commit(GET_CELLS,cells);
  }, 
  async getScoresAction({commit},value){
    const scores = await Data.getScoring(value);
    commit(GET_SCORES,scores);
  }
};

const modules = {
};

const getters = {
  getCellById: state => id => state.cells.find(cells => cells.id === id),
  getScoresOptions: state => options => state.scores.find(scores =>  scores.options === options),
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
  getters
})
