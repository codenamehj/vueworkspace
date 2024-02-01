<template>
  <div>
    <h1>{{ `${lastName} / ${firstName}` }}</h1>
    <h1>{{ `${fullName}` }}</h1>
  </div>
  <input type="text" v-model="firstName">
</template>

<script>
export default {
  data() {
    return {
      firstName: 'gildong',
      lastName: 'Hong',
    }
  },
  computed: { // 복합데이터 처리
    fullName() {
      return `${this.lastName} / ${this.firstName}`;
    }
  },
  watch: { // 데이터 변경 이전,이후
    firstName(curr, bef) {
      console.log(curr, bef);
    }
  }
}
</script>