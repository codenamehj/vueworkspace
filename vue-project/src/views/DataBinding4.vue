<template>
  <div class="container" v-bind:class="simpleClass">
    Hello
  </div>
  <div class="container" v-bind:class="{ active: activeValue, 'text-white': whiteValue }">
    Hello
  </div>
  <div class="container" v-bind:class="[activeClass, whiteClass]">
    Hello
  </div>
  <div style="color: white; background: pink;">
    style1
  </div>
  <div v-bind:style="{ color: att1, background: att2 }">
    style2
  </div>
  <div v-bind:style="colorStyle">
    style3
  </div>
</template>

<script>
export default {
  data() {
    return {
      simpleClass: 'text-white active',
      activeValue: true,
      whiteValue: false,
      activeClass: 'active',
      whiteClass: 'text-white',
      att1: 'white',
      att2: 'pink',
      // colorStyle: 'color:red;background:yellow' // 1
      colorStyle: {
        color: 'white',
        background: 'pink'
      }
    };
  },
  mounted() {
    console.log(this);
  },
  method: { // 이벤트 실행함수

  }
};
</script>

<style>
.container {
  width: 100%;
  height: 50px;
}

.active {
  background-color: pink;
  font-weight: bold;
}

.text-white {
  color: white;
}
</style>