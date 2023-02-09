<template>
  <div class="task">
    <h3>{{ task.title }}</h3>
    <div class="icons">
      <i 
        class="material-icons" 
        @click="deleteTask(task.id)">
        delete
      </i>
      <i 
        class="material-icons"
        :class="{active: task.isFav}" 
        @click="toggleFav(task.id)">
        favorite
      </i>
    </div>
  </div>
</template>

 
<script>
  export default {
    props: ['task'],
    methods:{
      deleteTask(id){
        this.$store.dispatch('removeTask', id);
      },
      toggleFav(id){
        this.$store.dispatch('toggleFav', id);
      }
    }
  }
</script>