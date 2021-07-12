import axios from "axios";

const baseURL = process.env.VUE_APP_SWAPI;

const instance = axios.create({
  baseURL,
});

export default {
  getCharacter: (id) => instance.get(`people/${id}`),
};
