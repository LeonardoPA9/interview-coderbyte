import Vue from "vue";
import Vuex from "vuex";
import api from "./../api/api";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  // in a real application I would have also have splitted into modules the store, but clock is ticking
  state: {
    character: null,
    planet: null,
    films: null,
    loading: false,
  },
  mutations: {
    setState(state, { property, payload }) {
      state[property] = payload;
      console.log(`${property}`, state[property]);
    },
    loadHandler(state) {
      state.loading = !state.loading;
    },
  },
  actions: {
    async getCharacter({ commit }, id) {
      try {
        commit("loadHandler");
        let films = [];
        const character = await api.getCharacter(id);
        const planet = await axios.get(character.data.homeworld);
        for (const film of character.data.films) {
          const res = await axios.get(film);
          films.push(res.data);
        }
        commit("setState", { property: "films", payload: films });
        commit("setState", { property: "planet", payload: planet.data });
        commit("setState", { property: "character", payload: character.data });
      } catch (error) {
        alert("Not found, please, search another id :)");
      } finally {
        commit("loadHandler");
      }
    },
  },
  modules: {},
});
