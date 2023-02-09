<template>
  <main>
    <!-- heading -->
    <header>
      <img src="https://pinia.vuejs.org/logo.svg" alt="pinia logo">
      <h1>Vuex Tasks</h1>
    </header>

    <TaskList></TaskList>
  </main>
</template>

<script>
  import TaskList from './components/TaskList.vue'
  export default {
    components: { TaskList }
  }
</script>