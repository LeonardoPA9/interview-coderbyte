<template>
  <v-row>
    <v-col cols="12" md="3">
      <v-text-field
        @keydown.enter="searchHandler"
        v-model.number="search"
        type="number"
        min="1"
        outlined
        label="Search character by ID"
      />
    </v-col>
    <v-col cols="12" md="1">
      <v-btn
        :loading="loading"
        @click="searchHandler"
        color="accent"
        class="mt-2"
        >Search</v-btn
      >
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
    },
  },
  data: () => ({
    search: 1,
  }),
  methods: {
    searchHandler() {
      this.$store.dispatch("getCharacter", this.search);
    },
  },
};
</script>

<style></style>
