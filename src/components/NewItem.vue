<template>
  <form @submit.prevent="addItem">
    <input
        v-model:title="titleOfItem"
      type="text">
    <button >Create</button>
  </form>
</template>

<script>
  export default {
    name: "NewItem",
    data () {
      return {
        titleOfItem: ""
      }
    },
    methods : {
      addItem () {
        if (this.titleOfItem.trim()) {
          const newItem = {id: Date.now(), title : this.titleOfItem, done: false}
          this.$emit("addItem", newItem)
          this.titleOfItem=""
        }
      }
    },
  }
</script>

<style scoped>
  input {
    width: 400px;
  }

</style>