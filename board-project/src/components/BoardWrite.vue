<template>
  <table id="list">
    <tr>
      <th style="width: 100px;">글제목</th>
      <td><input type="text" style="width: 480px;" v-model="title"></td>
    </tr>
    <tr>
      <th>글내용</th>
      <td><textarea v-model="content"></textarea></td>
    </tr>
  </table>
  <button style="float: right;margin: 10px;" v-on:click="boardSave">저장</button>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    boardSave() {
      this.$emit('save-board', this.title, this.content); // 부모 컴포넌트의 메소드 실행 요청
    }
  }
}
</script>
