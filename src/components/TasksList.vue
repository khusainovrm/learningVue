<template>
    <ol>
        <TaskItem
        v-for="task in tasks"
        v-bind:task="task"
        v-on:remove-task="rem"

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
        }
    }


    }
</script>

<style scoped>
    ol {
        display: block;
    }
</style>