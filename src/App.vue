<template>
  <div id="app">
    <comment-list class="comments-list"></comment-list>
  </div>
</template>

<script>
import CommentList from "./components/CommentList.vue";
export default {
  components: {
    CommentList,
  },
};
</script>

<style>
body {
  position: absolute;
  left: 30%;
  background-color: gray;
}
.comments-list {
  display: flex;
  flex-direction: column;
}
</style>
