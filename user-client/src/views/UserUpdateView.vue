<template>
  <div class="container">
    <h1>회원 정보 수정</h1>
    <div class="row">
      <table class="table">
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
          <td><input class="form-control" type="password" v-model="userInfo.user_pwd"></td>
        </tr>
        <tr>
          <th>이름</th>
          <td><input class="form-control" type="text" v-model="userInfo.user_name"></td>
        </tr>
        <tr>
          <th>성별</th>
          <td>
            <input type="radio" value="M" v-model="userInfo.user_gender">남자
            <input type="radio" value="F" v-model="userInfo.user_gender">여자
          </td>
        </tr>
        <tr>
          <th>나이</th>
          <td><input class="form-control" type="number" v-model="userInfo.user_age"></td>
        </tr>
        <tr>
          <th>가입일자</th>
          <td><input class="form-control" type="date" v-model="userInfo.join_date"></td>
        </tr>
      </table>
    </div>
    <div class="row">
      <button class="btn btn-dark col-4" @click="updateInfo()">저장</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      userInfo: {
        user_no: null,
        user_id: "",
        user_pwd: "",
        user_name: "",
        user_gender: null,
        user_age: null,
        join_date: null
      }
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
    updateInfo() {
      if (!this.validation()) return;

      let data = this.getSendData(); // data는 객체 아니면 배열이여야 함

      axios
        .put('/api/users/' + this.userInfo.user_id, data)
        .then(result => {
          if (result.data.changedRows == 0) {
            alert(`수정되지 않았습니다.\n메세지를 확인해주세요.\n${result.data.message}`);
          } else {
            alert(`정상적으로 수정되었습니다.`);
          }
        })
        .catch(err => console.log(err));
    },
    validation() { // else if로 쓰지 않고 if로 써야 함
      if (this.userInfo.user_pwd == "") {
        alert('비밀번호가 입력되지 않았습니다.');
        return false;
      }
      if (this.userInfo.user_name == "") {
        alert('이름이 입력되지 않았습니다.');
        return false;
      }
      return true;
    },
    getSendData() {
      let obj = this.userInfo
      let delData = ["user_no", "user_id"];
      let newObj = {};
      let isTargeted = null;
      for (let field in obj) {
        isTargeted = false;
        for (let target of delData) {
          if (field == target) {
            isTargeted = true;
            break;
          }
        }
        if (!isTargeted) {
          newObj[field] = obj[field];
        }
      }

      let sendData = {
        "param": newObj
      }
      return sendData;
    }
  }
}
</script>