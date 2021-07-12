import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#000000",
        secondary: "#FEE821",
        accent: "#60C9D6",
        error: "#b71c1c",
      },
    },
  },
});
