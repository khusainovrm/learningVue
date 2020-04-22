<template>
  <div id="app">
    <Home
        v-bind:tasks="tasks"
        @rem="removeItem"
    />
  </div>
</template>

<script>
import Home from '@/components/Home'


export default {
  name: 'App',
  data () {
    return  {
      tasks : [
        {id: 1, title: "NodeJs", done: false},
        {id: 2, title: "VueJS", done: false},
        {id: 3, title: "Angular", done: false},
      ]
    }
  },
  components: {
    Home
  },
  methods : {
    removeItem(id) {
      this.tasks = this.tasks.filter(i => i.id !== id)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
