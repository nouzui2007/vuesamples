<template>
  <div class="postal">
    <h1>住所検索（アメリカ）</h1>
    <h2>
      <p v-if="address.length > 0">
        {{ address }}
      </p>
      <p v-else>No Text</p>
    </h2>

    <h1>住所検索（日本）</h1>
    <h2>
      <p v-if="address_jp.length > 0">
        {{ address_jp }}
      </p>
      <p v-else>No Text</p>
    </h2>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Postal",
  props: {
    address: String,
    address_jp: String,
  },
  // イベント追加
  created() {
    fetch(
      "http://www.geonames.org/postalCodeLookupJSON?postalcode=10504&country=US"
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((json) => {
        this.address = json.postalcodes[0].adminName1;
      })
      .catch((err) => {
        this.address = err; // エラー処理
      });

    // 環境変数の確認
    let key = process.env.NODE_ENV;
    console.log(key);
    this.address_jp = "";

    // Proxy targetがnot foundなどエラーになるとき、コンソールにはlocalhostが表示されるので注意
    axios
      .get("/postal/3400033")
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log("エラー発生");
        console.log(err);
      });

    axios
      .get("/postal/3400033")
      .then((response) => {
        console.log(response);
        return response.data;
      })
      .then((json) => {
        this.address_jp =
          json.results[0].address1 +
          json.results[0].address2 +
          json.results[0].address3;
      })
      .catch((err) => {
        this.address_jp = err; // エラー処理
      });
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
