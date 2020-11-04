<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="ようこそ Vue.js App" detail_msg="こんな感じです" />
    <Postal />
    <Basic />
    <CoinCalculator />
    <BuefySample />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Postal from "./components/Postal.vue";
import Basic from "./components/Basic.vue";
import CoinCalculator from "./components/CoinCalculator.vue";
import BuefySample from "./components/BuefySample.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Postal,
    Basic,
    CoinCalculator,
    BuefySample,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
