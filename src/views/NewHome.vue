<template>
  <div>

    <h2>Commiting khowledge Second page</h2>
    <hr>
    <a href="/">Home</a>
    <a href="/tasks">Tasks</a>
    <NewItem @addItem="addItem"/>
    <TasksList
        v-bind:tasks="tasks"
        v-on:remove-task="rem"

    />

  </div>
</template>

<script>
  import TasksList from "@/components/TasksList";
  import NewItem from "@/components/NewItem";

  export default {
    name: "NewHome",
    props: ["tasks"],
    components: {
      TasksList, NewItem
    },
    methods : {
      rem (id) {
        this.$emit("rem", id)
      },
      addItem(item) {
        this.$emit("addItem", item)
      }
    }
  }
</script>

<style scoped>

</style>