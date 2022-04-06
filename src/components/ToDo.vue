<template>
  <div class="todo">
    <p v-show="taskList.length === 0" class="not">
      There is not any tasks yet...
    </p>
    <ul>
      <li v-for="task in taskList" :key="task.id"
          class="task"
          :class="task.done ? 'done' : ''"
          @click="task.done = true">
        <div class="inner">
          <p>{{ task.text }}</p>
          <button @click="deleteTask(task.id)">&#10008;</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'TaskList',
  props: {
  },
  data() {
    return {}
  },
  created() {

  },
  methods: {
    deleteTask(id) {
      this.$store.commit('deleteTask', id)
    },
  },
  computed: {
    taskList() {
      return this.$store.getters.taskList
    }
  }
}
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
  list-style: none;
}
p {
  margin: 0;
}
.inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.task {
  width: 100%;
  padding: 0.3em 30px;
  margin-top: 10px;

  font-family: Arial, sans-serif;
  font-size: 20px;
  border: 1px solid #82cce9;
  border-radius: 10px;
  color: #136b8a;
  cursor: pointer;
  transition: background-color .2s linear;
  &:hover {
    background-color: #f4fff4;
  }
  button {
    background: none;
    border: none;
    color: #a7cce5;
    font-size: 1.5em;
    &:hover {
      cursor: pointer;
      color: #4598bd;
    }

  }
}

.done {
  border: 2px solid #85e982;
  color: #85e982;
  position: relative;
  background-color: #e7fde7;
  &:before {
    content: '\2714';
    position: absolute;
    left: -34px;
    top: 6px;
    font-size: 30px;
  }
  &:hover {
    background-color: #e7fde7;
  }
}
.not {
  margin-top: 2em;
  font-size: 22px;
  font-family: Arial, 'sans-serif';
  text-align: center;
  color: #7a7a7a;
  cursor: default;
}
</style>
