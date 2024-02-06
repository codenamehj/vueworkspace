<!-- UserListView.vue -->
<template>
  <div class="container">
    <h1>전체 회원 조회</h1>
    <table class="table table-striped">
      <caption>Total : {{ cnt }}</caption>
      <thead>
        <tr>
          <th>#</th>
          <th>아이디</th>
          <th>이름</th>
          <th> 성별</th>
          <th> 가입날짜</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="user.user_no" v-for="user in userList">
          <td>{{ user.user_no }}</td>
          <td>{{ user.user_id }}</td>
          <td v-text="user.user_name" />
          <td v-text="user.user_gender" />
          <td>{{ getDate(user.join_date) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      userList: []
    }
  },
  computed: {
    cnt() { // 값
      return this.userList.length;
    }
  },
  watch: { // 프로세스
    userList() {
      console.log('데이터가 변경되었습니다.');
    }
  },
  created() {
    this.getUserList() // 비동기 작업
  },
  methods: {
    async getUserList() { // 동기 작업
      let result = await axios.get('/api/users').catch(err => { console.log(err) });
      let list = result.data;
      this.userList = list;
    },
    getDate(edate) {
      let eDate = new Date(edate);

      let year = eDate.getFullYear();
      let month = ('0' + (eDate.getMonth() + 1)).slice(-2);
      let day = ('0' + (eDate.getDate())).slice(-2);

      let result = year + '.' + month + '.' + day;

      return result;
    }
  }
}
</script>
