<template>
    <div class="task d-flex justify-content-between pr-5 mb-2" :class="isDone ? 'task-done' : ''">
        <div class="info d-flex flex-column text-start">
            <p class="text-secondary date">Added on {{ dateFormatted }}</p>
            <p>{{ title }}</p>
        </div>
        <div class="buttons d-flex align-items-center">
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" v-model="isDone" />
            </div>
            <button @click="$emit('remove', taskId)" class="btn btn-danger">X</button>
        </div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    name: 'task',
    data() {
        return {
            isDone: false
        }
    },
    props: {
        taskId: Number,
        title: String,
        date: Date
    },
    computed: {
        dateFormatted: function() {
            return moment(this.date).format("MMM, Do YYYY | HH:MM:SS");
        }
    }
}
</script>

<style scoped>
    .task {
        padding: 1em;
        max-width: 800px;
        border-radius: 5px;
        box-shadow: 0px 1px 3px #777;
        margin: 0 auto;
        word-wrap: break-word;
        background-color: #FFF;
    }

    .date {
        font-size: 10px;
        margin-bottom: 3px;
    }

    .task-done {
        opacity: .4;
        background-color: rgb(225, 255, 227);
        box-shadow: 0px 1px 3px rgb(12, 37, 9);
        animation-name: bounceOut;
        animation-duration: .5s;
        animation-fill-mode: forwards;
    }

    .form-check-input:hover {
        cursor: pointer;
    }

    @keyframes bounceOut {
        20% {transform: scale(.95);}
        40% {transform: scale(1);}
        100% {transform: scale(.9);}
    }

</style>