<template>
  <div id="app">
    <Home
        v-bind:tasks="tasks"
        @rem="removeItem"
        @addItem="addItem"
    />
  </div>
</template>

<script>
import Home from '@/components/Home'


export default {
  name: 'App',
  data () {
    return  {
      tasks : []
    }
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(response => response.json())
        .then(json => this.tasks=json)
  },
  components: {
    Home
  },
  methods : {
    removeItem(id) {
      this.tasks = this.tasks.filter(i => i.id !== id)
    },
    addItem(item) {
      this.tasks.push(item)
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
