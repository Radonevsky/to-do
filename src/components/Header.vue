<template>
  <header class="header">
    <h1 class="title">
      My To Do list:
    </h1>
    <input class="input" type="text" v-model="inputText" placeholder="What needs to be done?" @keydown.enter="addTask">
    <div class="info">
      <p class="count">Item left: {{ taskCount }}</p>
      <div class="filters">
        <p class='filter' :class="sort === 'all' ? 'active' : ''" @click="setSort('all')">All</p>
        <p class='filter' :class="sort === 'active' ? 'active' : ''" @click="setSort('active')">Active</p>
        <p class='filter' :class="sort === 'completed' ? 'active' : ''" @click="setSort('completed')">Completed</p>
      </div>
      <button @click="clearCompleted" :disabled="allTaskCount <= taskCount">Clear completed</button>
    </div>
  </header>
</template>

<script>
export default {
  name: "app-header",
  data() {
    return {
      inputText: '',
    }
  },
  methods: {
    addTask() {
      if (this.inputText.length > 0) {
        this.$store.commit('addTask', {
          id: this.randomId(),
          text: this.inputText,
          done: false,
        })
        this.inputText = ''
      }
    },
    randomId() {
      return Math.floor(Math.random() * (9999 - 1000) + 1000)
    },
    setSort(sort) {
      this.activeFilter = sort
      this.$store.commit('setSort', sort)
    },
    clearCompleted() {
      this.$store.commit('clearCompleted')
    }
  },
  computed: {
    taskCount() {
      return this.$store.getters.taskCount
    },
    allTaskCount() {
      return this.$store.getters.allTaskCount
    },
    sort() {
      return this.$store.getters.sort
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid #82cce9;
  font-family: Arial, sans-serif;
}
.title {
  padding: .3em;
  font-size: 32px;
  text-align: center;
  color: #136b8a;
}

.input {
  width: 100%;
  padding: 0.75em;
  font-size: 18px;
  border: 1px solid #a7babe;
  border-radius: 0.5em;

  &:focus {
    outline: none;
    border-color: #82cce9;
    box-shadow: rgba(129, 202, 232, 0.5) 0 0 8px;
  }
}

.info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  .filters {
    display: flex;
    .filter {
      cursor: pointer;
      padding: .5em;
      border-radius: 5px;
      margin-right: 1em;
    }
  }
  .active {
    border: 1px solid #ccc;
  }
}

button {
  padding: .5em;
  background: none;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #f3f3f3;
  }
  &:active {
    background-color: #d9d9d9;
  }
  &:disabled {
    cursor: default;
    background-color: #f3f3f3;
  }
}

</style>
