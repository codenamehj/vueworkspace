<template>
  <div>
    <table id="list">
      <thead>
        <tr>
          <th>글번호</th>
          <th>제목</th>
          <th>조회수</th>
          <th>삭제</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="board.no" v-for="board in list">
          <td>{{ board.no }}</td>
          <td v-on:click="showRead(board)">{{ board.title }}</td>
          <td>{{ board.view }}</td>
          <td><button v-on:click="deleteBoard(board.no)">삭제</button></td>
        </tr>
      </tbody>
    </table>
    <button style="float: right;margin: 10px;" @click="showWrite">글쓰기</button>
  </div>
</template>

<script>
export default {
  props: ['list'], // 부모 컴포넌트의 전달값을 받은 속성
  data() {
    return {

    }
  },
  methods: {
    showWrite() {
      // 이렇게 쓰면 나중에 유지보수가 힘들어짐.
      // this.$parent.listView = false;
      // this.$parent.writeView = true;

      // 부모컴포넌트 데이터를 변경
      this.$emit('show-write'); //부모컴포넌트의 이벤트를 실행하기 위한 호출
    },
    showRead(board) {
      // 상세화면 보여주기
      this.$emit('show-read', board);
    },
    deleteBoard(no) { // 파라미터도 전달
      this.$emit('board-delete', no);
    }
  }
}
</script>
