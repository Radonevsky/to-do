<template>
  <div class="todo">
    <ul v-show="todoList.length > 0">
      <li v-for="task in todoList" :key="task.id" class="task">{{ task.text }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
  },
  data() {
    return {
      todoList: [
        {
          id: 1,
          text: 'Something need to do'
        },
        {
          id: 2,
          text: 'Something else'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  padding: 0;
  list-style: none;
}

.task {
  width: 100%;
  padding: 10px 30px;
  margin-top: 20px;
  font-family: Arial, sans-serif;
  font-size: 18px;
  border-top: 2px solid #932e2e;
  border-bottom: 2px solid #932e2e;
}
</style>
