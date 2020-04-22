<template>
    <li>
        <span
            v-bind:class="{todo:task.done}">
            <input type="checkbox" v-on:change="task.done=!task.done">
            {{index+1}}. {{task.title | toUpperCase}}
        </span>
        <button class="rem" v-on:click="$emit('remove-task', task.id)">&times;</button>
    </li>
</template>

<script>
    export default {
        name: "TaskItem",
        props:{
            task :{
                type: Object, require: true
            },
            index : {
                type: Number
            }
        },
        filters : {
            toUpperCase (value) {
                return value.toUpperCase()
            }
        },
    }
</script>

<style scoped>
    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 1px solid #ccc;
        padding-right: 1rem;
        padding-left: 1rem;
        height: 3rem;
        width: 60%;
        margin: 10px auto;
    }


    input {
        margin-right: 1rem;
    }
    .todo {
        text-decoration: line-through;
    }

    .rem {
        background: red;
        font-weight: bold;
        color: white;
        border-radius: 50%;
    }

</style>