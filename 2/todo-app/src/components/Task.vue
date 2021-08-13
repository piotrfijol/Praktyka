<template>
    <div class="task d-flex justify-content-between mb-2" :class="task.is_done ? 'task-done' : ''">
        <div class="info d-flex flex-column text-start p-3">
            <p class="text-secondary date">Added on {{ dateFormatted }}</p>
            <p class="text-break">{{ task.title ? task.title : '...' }}</p>
        </div>
        <div class="buttons d-flex align-items-center p-3">
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" :checked="task.is_done" @input="handleInput" @click="$emit('toggle', task.id)" />
            </div>
            <button @click="removeTask" class="btn btn-danger"><img class="cross-icon" src="../assets/close.svg" alt=""></button>
        </div>
    </div>
</template>

<script>
import moment from 'moment';

export default {
    name: 'task',
    props: {
        task: Object
    },
    computed: {
        dateFormatted: function() {
            return moment(this.task.created_at).format("MMM, Do YYYY | HH:mm:ss");
        }
    },
    methods: {
        decreaseSize(el) {
            el.style.height = parseInt(window.getComputedStyle(el, null).height)-8 + "px";
            if(parseInt(window.getComputedStyle(el, null).height) > 5) {
                window.requestAnimationFrame(this.decreaseSize.bind(null, el));
            } else {
                this.$emit('remove', this.task.id);
            }
        },
        removeTask(ev) {
            let task = ev.currentTarget.parentNode.parentNode;
            task.style.visibility = "hidden";
            window.requestAnimationFrame(this.decreaseSize.bind(null, task));
        },
        handleInput(ev) {
            ev.target.checked = this.task.is_done;
        }
    }
}
</script>

<style scoped>
    .task {
        box-sizing: border-box;
        max-width: 800px;
        border-radius: 5px;
        box-shadow: 0px 1px 3px #777;
        margin: 0 auto;
        word-wrap: break-word;
        background-color: #FFF;
    }

    .task:hover {
        cursor: grab;
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