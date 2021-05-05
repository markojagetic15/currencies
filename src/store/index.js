import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rates: [],
    selectedCountry: 'Australija',
    selectedCurrency: 'AUD',
    currency:'EUR'
  },
  getters: {
  },
  mutations: {
    updateCountry (state, country){
      state.selectedCountry = country;
    },
    updateCurrency(state, currency){
      state.selectedCurrency = currency;
    }
  },
  actions: {
    getRates(/*currency*/) {
      axios
      .get(`https://api.hnb.hr/tecajn/v2?datum-primjene-od=2021-04-28&datum-primjene-do=2021-05-03`)
      .then(response => (this.state.rates = response) )
    },
  },
  modules: {
  }
})
