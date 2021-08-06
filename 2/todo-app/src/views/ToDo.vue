<template>
    <div class="container">
        <add-task @addTask="addTask" />
        <tasks v-bind:key="task.id" v-for="task in tasks">
            <task @remove="removeTask" :taskId="task.id" :title="task.name" :date="task.date"/>
        </tasks>
    </div>
</template>

<script>
    import Tasks from '../components/Tasks.vue';
    import Task from '../components/Task.vue';
    import AddTask from '../components/AddTask.vue';

    export default {
        name: 'todo',
        data() {
            return {
                tasks: [
                    {
                        id: 1,
                        name: 'Taskk',
                        date: new Date()
                    },
                    {
                        id: 2,
                        name: 'Taskkkkk',
                        date: new Date()
                    }
                ]
            }
        },
        components: {
            Tasks,
            Task,
            AddTask
        },
        methods: {
            addTask({ name }) {
                this.tasks.push({
                    id: Math.floor(Math.random()*10000),
                    date: new Date(),
                    name
                })
            },
            removeTask(taskId) {
                console.log(taskId)
                this.tasks = this.tasks.filter(task => task.id != taskId);
            }
        }
    }

</script>

<style scoped>
    
</style>
