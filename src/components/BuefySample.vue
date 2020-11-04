<template>
  <div class="container">
    <h1>Buefyサンプル</h1>
    <div class="columns">
      <div class="column">First column</div>
      <div class="column">Second column</div>
      <div class="column">Third column</div>
      <div class="column">Fourth column</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BuefySample",
  props: {
    msg: String,
    detail_msg: String,
  },
  methods: {
    clear() {
      this.msg = "";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
