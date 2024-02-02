<template>
  <div>
    <table id="list">
      <tr>
        <th style="width: 100px;">글제목</th>
        <td>{{ board.title }}</td>
      </tr>
      <tr style="height: 200px;">
        <th>글내용</th>
        <td>{{ board.content }}</td>
      </tr>
    </table>
    <button style="float: right;margin: 10px;" @click="showList">목록</button>
  </div>
</template>

<script>
export default {
  props: ['board'],
  data() {
    return {

    }
  },
  methods: {
    showList() {
      this.$emit('show-list'); // 부모 컴포넌트의 메소드 실행 요청
    }
  }
}
</script>


