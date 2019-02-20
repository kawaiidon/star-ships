import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const API = 'https://swapi.co/api'

export default new Vuex.Store({
  state: {
    shipsData: null,
    ship: null
  },
  getters: {
    ships: (state) => (search = '') => {
      return state.shipsData ? state.shipsData.results.filter(ship => ship.name.toLowerCase().indexOf(search.toLowerCase()) !== -1) : null
    }
  },
  mutations: {
    UPDATE_SHIPS_DATA (state, amount) {
      state.shipsData = amount
    },
    UPDATE_SHIP (state, amount) {
      state.ship = amount
    }
  },
  actions: {
    GET_SHIPS_DATA (context, page = 1) {
      return new Promise((resolve, reject) => {
        axios.get(`${API}/starships/?page=${page}`, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => {
            context.commit('UPDATE_SHIPS_DATA', response.data)
            resolve(response.data)
          })
          .catch(e => {
            console.log(e)
            reject(e)
          })
      })
    },
    GET_SHIP (context, id) {
      return new Promise((resolve, reject) => {
        axios.get(`${API}/starships/${id}/`, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => {
            context.commit('UPDATE_SHIP', response.data)
            resolve(response.data)
          })
          .catch(e => {
            console.log(e)
            reject(e)
          })
      })
    }
  }
})
