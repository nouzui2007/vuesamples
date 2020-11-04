<template>
  <div class="basic">
    <h1>基本的な文法</h1>
    <h2>v-for</h2>
    <ul>
      <li v-for="(person, key) in persons" :key="key">
        {{ key }} {{ person.name }} ({{ person.age }})
      </li>
    </ul>

    <h2>v-on</h2>
    <div>{{ counter }}</div>
    <div><button v-on:click="increase">1をたす</button></div>
    <div><button @click="increase10">10をたす</button></div>

    <h2>v-bind</h2>
    <img v-bind:src="imagePath" :width="imageWidth" />
    <div>
      <button @click="changeDog">犬</button>
      <button @click="changeCat">猫</button>
      <button @click="widenImage">拡大する</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Basic",
  data() {
    return {
      persons: [
        {
          name: "山田",
          age: 39,
        },
        {
          name: "田中",
          age: 40,
        },
        {
          name: "中西",
          age: 41,
        },
      ],
      counter: 0,
      imagePath: "",
      imageWidth: 100,
    };
  },
  methods: {
    increase() {
      this.counter++;
    },
    increase10() {
      this.counter += 10;
    },
    changeDog() {
      this.imagePath =
        "https://dol.ismcdn.jp/mwimgs/7/1/670m/img_71c53c1d81500a1cf73a4f543e72413f27838.jpg";
    },
    changeCat() {
      this.imagePath = "https://www.nekobu.com/blog/kd20190710-1.JPG";
    },
    widenImage() {
      this.imageWidth = 500;
    },
  },
};
</script>
