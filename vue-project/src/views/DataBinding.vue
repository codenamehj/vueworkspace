<template>
  <h1>Hello, {{ msg }}</h1>
  <div>{{ htmlStr }}</div>
  <div v-html="htmlStr"></div>
  <input type="text" v-model="vmodel" />
  <p>{{ vmodel }}</p>
  <textarea cols="30" rows="10" v-model="message"></textarea>
</template>

<script>
export default {
  data() {
    return {
      msg: "World",
      htmlStr: "<p style='color:red;'>Hello</p>",
      vmodel: "Nice",
      message: "여러라인의 값을 \n읽습니다."
    };
  },
};
</script>