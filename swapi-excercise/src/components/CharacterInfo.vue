<template>
  <v-row class="text-center">
    <v-col cols="12">
      <v-card>
        <v-card-title
          ><span class="accent--text">{{ char.name }}</span></v-card-title
        >

        <v-card-text>
          <p class="text-body-1 primary--text">
            {{ char.name }} is a {{ char.gender }} born in {{ planet.name }}, a
            planet with over {{ planet.population }} habitants, a
            {{ planet.terrain }} terrain and {{ planet.climate }} weather.
          </p>
          <p class="text-body-1 primary--text">
            {{ char.name }} also has apeared in over
            {{ char.films.length }} films, and those films are:
          </p>
          <v-list flat>
            <v-subheader>Films</v-subheader>
            <v-list-item-group>
              <v-list-item v-for="(film, i) in films" :key="i">
                <v-list-item-content>
                  <v-list-item-title
                    >{{ film.title }} - {{ film.release_date }} by
                    {{ film.director }}</v-list-item-title
                  >
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    char: {
      type: Object,
      required: true,
    },
    planet: {
      type: Object,
    },
    films: {
      type: Array,
    },
  },
};
</script>
