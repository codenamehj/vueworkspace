<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/board">게시판</router-link> |
    <router-link to="/todo">Todo</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  // data() {
  //   return {
  //     rootData: 'hello'
  //   }
  // },
  provide() { // 손자들에게도 값을 줄 수 있음 but 읽기 전용 수정 불가
    return {
      rootList: 'Hello, Hello',
      rootStr: 'World'
    }
  }
}
</script>

<style>
@import url("../src/assets/style.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #92AD65;
}
</style>
