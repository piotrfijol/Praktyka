<template>
    <div class="task d-flex justify-content-between pr-5 mb-2" :class="isDone ? 'task-done' : ''">
        <div class="info d-flex flex-column text-start pr-4">
            <p class="text-secondary date">Added on {{ dateFormatted }}</p>
            <p class="text-break">{{ title ? title : '...' }}</p>
        </div>
        <div class="buttons d-flex align-items-center">
            <div class="form-check form-switch">
                <input @click="$emit('toggle', taskId)" class="form-check-input" type="checkbox" v-model="isDone" />
            </div>
            <button @click="$emit('remove', taskId)" class="btn btn-danger"><img class="cross-icon" src="../assets/close.svg" alt=""></button>
        </div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    name: 'task',
    data() {
        console.log(this.taskStatus)
        return {
            isDone: this.taskStatus
        }
    },
    props: {
        taskId: Number,
        title: String,
        taskStatus: Boolean,
        date: Date
    },
    computed: {
        dateFormatted: function() {
            return moment(this.date).format("MMM, Do YYYY | HH:mm:ss");
        }
    },
    methods: {
        toggleStatus() {
            this.is
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

    .info {
        padding-right: 45px;
    }

    .cross-icon {
        width: 15px;
    }
</style>