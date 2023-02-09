<template>
  <div>
    <div class="new-task-form">
      <form @submit.prevent="handleSubmit">
        <input type="text" v-model="newTask" placeholder="I need to..."/>
        <button type="submit">Add</button>
      </form>
    </div>
    <nav class="filter">
      <button @click="showAll">Show All Tasks</button>
      <button @click="showFave">Show Favorite Tasks</button>
    </nav>
    
    <div class="task-list" v-if="faveTask === false">
      <p>You have {{ totalCount }} tasks left to do.</p>
      <div v-for="task in tasks" :key="task.id">
        <Task :task="task" />
      </div>
    </div>
    <div class="task-list" v-if="faveTask === true">
      <p>You have {{ favCount }} tasks in your favs list.</p>
      <div v-for="task in favTasks" :key="task.id">
        <Task :task="task" />
      </div>
    </div>
    
  </div>
</template>
 
<script>
import { mapGetters, mapActions } from 'vuex'
import Task from '../components/Task.vue';
export default {
  data() {
    return {
      newTask: '',
      faveTask: false
    }
  },
  computed: {
    ...mapGetters(['tasks', 'favTasks','totalCount', 'favCount'])
  },
  methods: {
    ...mapActions(['addTask', 'removeTask']),
    handleSubmit() {
      if (this.newTask) {
        this.addTask({
          title: this.newTask,
          isFav: false,
          id: Date.now()
        })
        this.newTask = ''
      }
    },
    showFave(){
      this.faveTask = true;
    },
    showAll(){
      this.faveTask = false;
    }
  },
  components: {
    Task
  }
}
</script>