<template>
  <ul id="myUL" v-for="todo in  todoList " v-bind:key="todo.no">
    <li @click="todoChecked(todo.no)" :class="cancelFlag">{{ todo.todo }}<span class="close"
        @click="deleteTodo(todo.no)">x</span></li>
  </ul>
</template>

<script>
export default {
  props: ['todoList'],
  methods: {
    todoChecked(no) {
      this.$emit('todo-checked', no);
    },
    deleteTodo(no) {
      this.$emit('todo-delete', no);
    }
  }
}
</script>