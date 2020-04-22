<template>
    <ol>
        <TaskItem
        v-for="(task, i) in tasks"
        v-bind:task="task"
        :index="i"
        v-on:remove-task="rem"
        @addItem="addItem"

        />
    </ol>
</template>



<script>
    import TaskItem from "@/components/TaskItem";

    export default {
        name: "TasksList",
        props: ['tasks'],
        components : {
            TaskItem
        },
        methods : {
            rem (id) {
                this.$emit('remove-task', id)
            },
            addItem(item) {
                this.$emit("addItem", item)
            }
        }
    }
</script>



<style scoped>
    ol {
        display: block;
    }
</style>