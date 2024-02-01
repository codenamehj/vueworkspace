<template>
  <div>
    <input type="text" v-model="todo" @keyup.enter="addTodo">
    <button @click="addTodo">추가</button>
  </div>
  <div>
    <ul v-bind:key="todo.no" v-for="todo in todoList">
      <li>
        {{ todo.no }} - {{ todo.text }}
        <button v-on:click="deleteTodo(todo.no)">삭제</button>
      </li>
      <!-- <ul v-bind:key="idx" v-for="(todo, idx) in todoList">
      <li>{{ idx + 1 }} - {{ todo.text }}</li> -->
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todo: '그 다음 할 일',
      todoList: [{ no: 1, text: '할일1' }, { no: 2, text: '할일2' }]
    }
  },
  methods: {
    addTodo() {
      let no, text;
      no = this.todoList[this.todoList.length - 1].no + 1;
      text = this.todo;
      this.todoList.splice(this.todoList.length, 0, { no, text });
      // this.todoList.push({ text: this.todo });
      this.todo = '';
    },
    deleteTodo(no) {
      console.log(no);
      this.todoList = this.todoList.filter(todo => todo.no == no ? false : true)
    },
  }
}
</script>