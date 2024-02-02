<template>
  <header>
    <h2>간단 게시판</h2>
    <p>뷰로 만드는 게시판</p>
  </header>
  <p>{{ rootList }}</p>
  <p>{{ rootStr }}</p>
</template>


<script>
export default {
  // props: ['rootData'], // 바로 상위에 있는 값만 전달받을 수 있음
  inject: ['rootList','rootStr'] // 부모 뿐만 아니라 조상에 있는 값도 받아올 수 있음.
}
</script>