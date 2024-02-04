<template>
  <ul id="myUL">
    <li v-for="todo in  todoList " v-bind:key="todo.no" @click="cancelTodo(todo.no)" :class="{ checked: todo.cancelFlag }">
      {{ todo.todo }}<span class="close" @click="deleteTodo(todo.no)">x</span></li>
  </ul>
</template>

<script>
export default {
  props: ['todoList'],
  methods: {
    cancelTodo(no) {
      this.$emit('cancel-todo', no);
    },
    deleteTodo(no) {
      this.$emit('todo-delete', no);
    }
  }
}
</script>