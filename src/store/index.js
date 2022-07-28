import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    reviews:[],
    loading: false,
  },
  getters:{
    getLoading(state){ return state.loading},
    getReviews(state){ return state.reviews},
    getRatingRound(state){
      const result = state.reviews.reduce(
        (mean, item) => mean + item.rating / state.reviews.length, 
        0
      )
      return Math.round(result);
    }
  },
  mutations: {
    setLoading(state, payload){ state.loading = payload },
    setReviews(state, payload){ state.reviews.unshift(payload) }
  },
  actions: {
    async setPostReviews({commit}, payload){
      const { fullname, rating, text } = payload;
      try{

        if(Object.values(payload).some((p) => p === undefined)){
          throw new Error('Не усі данні передані.')
        }
        commit('setLoading', true);

        const result = new Promise((resolve, reject) => {
          setTimeout(
            () => {
              const options = {
                year: '2-digit',
                month: 'long',
                day: '2-digit',
                weekday: 'short',
                hour: '2-digit',
                minute: '2-digit',
              };
              const date = new Date().toLocaleDateString('uk', options);
              resolve({fullname, rating, text, date})
            },
            500
          );
        });
        
        result.then((res) => {
          console.log(res);
          commit('setLoading', false);
          commit('setReviews', res)
        });
      }catch(e){
        console.log(e)
      }
    }
  },
  modules: {
  }
})
