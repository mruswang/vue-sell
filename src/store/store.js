/**
 * Created by wangsir on 2017/6/21.
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tetal: 0
  },
  mutations: {
    increment (state, price) {
      state.tetal += price;
    },
    decrement (state, price) {
      state.tetal -= price;
    }
  },
  actions: {
    decr (context, price) {
      context.commit('decrement', price);
    }
  }
});
