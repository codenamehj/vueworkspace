<template>
  <div class="container">
    <h1>회원 정보 조회</h1>
    <div class="row">
      <table class="table">
        <tbody>
          <tr>
            <th>번호</th>
            <td>{{ userInfo.user_no }}</td>
          </tr>
          <tr>
            <th>아이디</th>
            <td>{{ userInfo.user_id }}</td>
          </tr>
          <tr>
            <th>비밀번호</th>
            <td>{{ userInfo.user_pwd }}</td>
          </tr>
          <tr>
            <th>이름</th>
            <td>{{ userInfo.user_name }}</td>
          </tr>
          <tr>
            <th>성별</th>
            <td>{{ userGender }}</td>
          </tr>
          <tr>
            <th>나이</th>
            <td>{{ userInfo.user_age }}</td>
          </tr>
          <tr>
            <th>가입일자</th>
            <td>{{ joinDate }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="row">
      <button class="btn btn-outline-dark col-4" @click="goToUpdate(userInfo.user_id)">수정</button>
      <router-link to="/" class="btn btn-outline-dark col-4">목록</router-link>
      <button class="btn btn-outline-dark col-4" @click="deleteInfo(userInfo.user_id)">삭제</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      userInfo: {}
    }
  },
  computed: {
    // 성별
    userGender() {
      let result = null;
      if (this.userInfo.user_gender == "M") {
        result = "남성"
      } else if (this.userInfo.user_gender == "F") {
        result = "여성"
      }
      return result;
    },
    // 가입날짜 : 년 월 일
    joinDate() {
      let result = null;
      if (this.userInfo.join_date != null) {
        let date = new Date(this.userInfo.join_date);

        let year = date.getFullYear();
        let month = ('0' + (date.getMonth() + 1)).slice(-2);
        let day = ('0' + date.getDate()).slice(-2);

        result = year + '년 ' + month + '월 ' + day + '일';
      }
      return result;
    }
  },
  created() {
    let searchNo = this.$route.query.userId;
    this.getUserInfo(searchNo);
  },
  methods: {
    async getUserInfo(userId) {
      // http://localhost:3000/users/user01
      // 1) '/api/users/' + userId
      // 2) `/api/users/${userId}`
      let result = await axios.get('/api/users/' + userId).catch(err => console.log(err));
      this.userInfo = result.data;
    },
    goToUpdate(userId) {
      // 수정폼 컴포넌트 호출
      console.log(userId);
      this.$router.push({ path: '/userForm', query: { "userId": userId } });
    },
    deleteInfo(userId) {
      // 서버에 해당 데이터를 삭제
      axios
        .delete(`/api/users/${userId}`)
        .then(result => {
          if (result.data.affectedRows != 0 && result.data.changedRows == 0) {
            alert(`정상적으로 삭제되었습니다.`);
            this.$router.push({ path: '/' });
          } else {
            alert(`삭제되지 않았습니다.\n메세지를 확인해주세요\n${result.data.message}`)
          }
        })
        .catch(err => console.log(err));
    }
  }
}
</script>