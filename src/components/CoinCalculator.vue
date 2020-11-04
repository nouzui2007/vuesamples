<template>
  <div class="coin">
    <h1>小銭の計算</h1>
    <div>
      <p>いくら？</p>
      <p>
        <input type="number" name="price" v-model="price" /><button
          @click="Calculate()"
        >
          計算
        </button>
      </p>
    </div>
    <ul>
      <li v-for="(value, key) in results" :key="key">
        {{ key }}円 {{ value }}枚
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CoinCalculator",
  props: {
    price: Number,
    results: Object,
  },
  methods: {
    Calculate() {
      let coins = [500, 100, 50, 10, 5, 1];
      var remains = this.price;
      for (var i = 0; i < coins.length; i++) {
        console.log(coins[i]);
        this.results[coins[i]] = Math.floor(remains / coins[i]);
        remains = remains % coins[i];
      }
    },
  },
  created() {
    this.results = {
      500: 0,
      100: 0,
      50: 0,
      10: 0,
      5: 0,
      1: 0,
    };
  },
};
</script>
