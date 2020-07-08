import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import VueAxios from 'vue-axios'
import mutations from '../mutations/mutations.js'
import actions from "../actions/actions.js"
import getters from "../getters/getters.js"
 
Vue.use(VueAxios, axios);
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      count:6,
      maplist:"",
      kong:[]
      },

  mutations,
  actions,
  getters 
});
