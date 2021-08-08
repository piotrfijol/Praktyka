<template>
    <div class="container mt-5">
        <div class="input-group mb-5">
            <input  @keypress="handleKeyPress" v-model="newTask.name" type="text" class="form-control py-3" placeholder="New task">
            <button @click="addTask" class="btn btn-success px-4" type="button" id="button-addon2">Add</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'add-task',
    data() {
        return {
            newTask: {
                name: '',
                isDone: false
            }
        }
    },
    methods: {
        handleKeyPress(ev) {
            if(ev.keyCode === 13) {
                this.addTask();
            }
        },
        addTask() {
            this.$emit('addTask', this.newTask);
            this.newTask = {
                name: '',
                isDone: false
            }
        }
    },
}
</script>

<style scoped>
    .container {
        max-width: 800px;
    }
</style>