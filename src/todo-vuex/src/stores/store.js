import { createStore } from 'vuex'
 
const TaskStore = {
  state: {
    tasks: []
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task)
    },
    toggleFav(state, id) {
      const task = state.tasks.find(task => task.id === id)
      if (task) {
        task.isFav = !task.isFav
      }
    },
    removeTask(state, id) {
      const index = state.tasks.findIndex(task => task.id === id)
      if (index !== -1) {
        state.tasks.splice(index, 1)
      }
    }
  },
  actions: {
    addTask({ commit }, task) {
      commit('addTask', task)
    },
    toggleFav({ commit }, id) {
      commit('toggleFav', id)
    },
    removeTask({ commit }, id) {
      commit('removeTask', id)
    }
  },
  getters: {
    tasks: state => state.tasks,
    favTasks: state => state.tasks.filter(task => task.isFav),
    totalCount: state => state.tasks.length,
    favCount: state => state.tasks.filter(task => task.isFav).length
  }
}
 
export default createStore({
  modules: {
    TaskStore
  }
})