<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Death Star"
          class="shrink mr-2"
          contain
          src="https://img.icons8.com/color/452/darth-vader.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/640px-Star_Wars_Logo.svg.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container>
        <search :loading="loading" />
        <character-info
          v-if="character"
          :char="character"
          :films="films"
          :planet="planet"
        />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import CharacterInfo from "./components/CharacterInfo";
import Search from "./components/SearchComponent";
import { mapState } from "vuex";

export default {
  name: "App",

  components: {
    CharacterInfo,
    Search,
  },

  computed: {
    ...mapState(["character", "planet", "films", "loading"]),
  },
};
</script>
