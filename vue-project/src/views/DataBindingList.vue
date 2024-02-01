<template>
  <!-- DataBindingList.vue -->
  <div>
    <table>
      <thead>
        <tr>
          <th>번호</th>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>
      <tbody>
        <tr v-bind:key="idx" v-for="(product, idx) in productList" v-show="product.price > 30000">
          <td>{{ idx + 1 }}</td>
          <td>{{ product.product_name }}</td>
          <td>{{ Number(product.price).toLocaleString() + " 원" }}</td>
          <td>{{ product.category }}</td>
          <td>{{ Number(product.delivery_price).toLocaleString() + " 원" }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 v-if="score >= 90">A</h3>
  <h3 v-else-if="score >= 80">B</h3>
  <h3 v-else>C</h3>

  <h3 v-show="score >= 90">90보다 큽니다.</h3>
</template>

<script>
export default {
  data() {
    return {
      score: 90,
      productList: [
        { "product_name": "기계식키보드", "price": 25000, "category": "노트북/태블릿", "delivery_price": 5000 },
        { "product_name": "무선마우스", "price": 12000, "category": "노트북/태블릿", "delivery_price": 5000 },
        { "product_name": "아이패드", "price": 725000, "category": "노트북/태블릿", "delivery_price": 5000 },
        { "product_name": "태블릿거치대", "price": 32000, "category": "노트북/태블릿", "delivery_price": 5000 },
        { "product_name": "무선충전기", "price": 42000, "category": "노트북/태블릿", "delivery_price": 5000 }
      ]
    };
  },
  methods: {

  }
}
</script>

<style>
table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
</style>