import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    state () {
        return {
            taskList: [],
            sort: 'all'
        }
    },
    getters: {
        taskList(state) {
            if (state.sort === 'active') {
                return state.taskList.filter(item => item.done === false)
            } else if (state.sort === 'completed') {
                return state.taskList.filter(item => item.done === true)
            }
            return state.taskList
        },
        taskCount(state) {
            return state.taskList.filter(item => item.done === false).length
        },
        allTaskCount(state) {
            return state.taskList.length
        },
        sort(state) {
            return state.sort
        }
    },
    mutations: {
        addTask(state, task) {
            state.taskList.push(task)
        },
        deleteTask(state, id) {
            const changedTaskList = state.taskList.filter(item => item.id !== id)
            state.taskList = changedTaskList
        },
        setSort(state, sort) {
            state.sort = sort
        },
        clearCompleted(state) {
            state.taskList = state.taskList.filter(item => item.done === false)
        }
    },
    plugins: [createPersistedState()],
})

export default store
