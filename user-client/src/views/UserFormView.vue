<!-- UserFormView.vue -->

<template>
  <div class="container">
    <h3 class="text-center">{{ title }}</h3>
    <div class="row">
      <table class="table">
        <tbody>
          <tr>
            <th>번호</th>
            <td><input class="form-control" type="number" v-model="userInfo.user_no" readonly></td>
          </tr>
          <tr>
            <th>아이디</th>
            <td><input class="form-control" type="text" v-model="userInfo.user_id" v-bind:readonly="isUpdated">
            </td> <!-- 등록 or 수정 -->
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
            <td><input class="form-control" type="number" v-model="userInfo.user_age" min="0" max="150"></td>
          </tr>
          <tr>
            <th>가입일자</th>
            <td><input class="form-control" type="date" v-model="userInfo.join_date"></td> <!-- yyyy-MM-dd -->
          </tr>
        </tbody>
      </table>
    </div>
    <div class="d-grid gap-2 col-6 mx-auto">
      <!-- 첫번째 -->
      <button type="button" class="btn btn-outline-dark" @click="saveInfo(searchNo)">저장</button>
      <!-- 두번째 => jsp 에서는 잘 쓰이지 않음 -->
      <!-- <button type="button" class="btn btn-outline-dark" @click="isUpdated ? updateInfo() : insertInfo()">저장</button>  -->
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
      },
      searchNo: null, // 등록 or 수정
      isUpdated: false
    }
  },
  computed: {
    title() {
      return this.isUpdated ? '회원 정보 수정' : '회원 정보 등록';
    }
  },
  created() {
    this.searchNo = this.$route.query.userId;
    if (this.searchNo != null && this.searchNo != undefined) {
      this.getUserInfo();
    } else {
      this.userInfo.join_date = this.getDate('');
    }
  },
  methods: {
    async getUserInfo() {
      let result = await axios.get('/api/users/' + this.searchNo).catch(err => console.log(err));
      let info = result.data;

      let newDate = this.getDate(info.join_date);
      info.join_date = newDate;

      this.userInfo = info;
      this.isUpdated = true;
    },
    getDate(value) {
      if (value == null) return null;

      let date = value == '' ? new Date() : new Date(value);
      let year = date.getFullYear();
      let month = ('0' + (date.getMonth() + 1)).slice(-2);
      let day = ('0' + date.getDate()).slice(-2);

      return year + '-' + month + '-' + day;
    },
    saveInfo(id) { // 첫번째
      // 1) 보낼 데이터 산출
      let info = this.getSendInfo(id);

      // 2) ajax
      axios(info)
        .then(result => {
          console.log(result);
        })
        .catch(err => console.log(err));
    },
    getSendInfo(id) {
      // method, url, data
      let method = '';
      let url = '';
      let data = null;

      if (id == null || id == undefined) { // 등록
        method = 'post';
        url = `/api/users`;
        data = {
          "param": {
            user_id: this.userInfo.user_id,
            user_pwd: this.userInfo.user_pwd,
            user_name: this.userInfo.user_name,
            user_gender: this.userInfo.user_gender,
            user_age: this.userInfo.user_age,
            join_date: this.userInfo.join_date
          }
        };
      } else { // 수정
        method = 'put';
        url = `/api/users/${id}`;
        data = {
          "param": {
            user_pwd: this.userInfo.user_pwd,
            user_name: this.userInfo.user_name,
            user_gender: this.userInfo.user_gender,
            user_age: this.userInfo.user_age,
            join_date: this.userInfo.join_date
          }
        };
      }
      return {
        method,
        url,
        data
      }
    }
  }
}
</script>