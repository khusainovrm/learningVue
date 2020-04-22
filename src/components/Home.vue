<template>
    <div>
        <h1>Commiting khowledge</h1>
        <hr>
        <TasksList
            v-bind:tasks="tasks"
            v-on:remove-task="rem"
        />
    </div>
</template>

<script>
    import TasksList from "@/components/TasksList";

    export default {
        name: "Home",
        props: ["tasks"],
        components: {
            TasksList
        },
        methods : {
            rem (id) {
                this.$emit("rem", id)
            }
        }
    }
</script>

<style scoped>

</style>