<template>
    <div class="container">
        <add-task @addTask="addTask" />
        
        <tasks :isLoading="isLoading">
            <task  
                v-bind:key="task.id" 
                v-for="task in tasks" 
                @remove="removeTask"
                @toggle="toggleStatus"
                :task="task"
            />
        </tasks>
        <div v-if="!tasks.length && !isLoading">
            <p>No tasks found.</p>
        </div>
        
    </div>
</template>

<script>
    import Tasks from '../components/Tasks.vue';
    import Task from '../components/Task.vue';
    import AddTask from '../components/AddTask.vue';
    import moment from 'moment';


    export default {
        name: 'todo',
        data() {
            return {
                tasks: [],
                isLoading: true
            }
        },
        created() {
            this.downloadData();
        },
        components: {
            Tasks,
            Task,
            AddTask
        },
        methods: {
            addTask({ title, isDone }) {
                let date = new Date();
                let newTask = {
                    created_at: moment(date).format("YYYY-MM-DD HH:mm:ss"),
                    title,
                    is_done: isDone ? 1 : 0
                }
                fetch('http://localhost:8888/tasks', {
                    mode: 'cors',
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(newTask),
                }).then((data) => data.json())
                .then(dataParsed => {
                    this.tasks.push({
                        id: dataParsed.id,
                        ...newTask
                    });
                });
            },
            removeTask(taskId) {
                fetch('http://localhost:8888/tasks/' + taskId, {
                    method: 'DELETE'
                })
                this.tasks = this.tasks.filter(task => task.id != taskId);
            },
            toggleStatus(taskId) {
                let newVal = false;
                this.tasks.forEach((task) => {
                    if(task.id === taskId) {
                        task.is_done = (newVal = !task.is_done);
                    }
                });

                fetch('http://localhost:8888/tasks/' + taskId, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        "is_done": newVal ? 1 : 0
                    })
                })
                .catch(err => console.error(err));
            },
            async downloadData() {
                this.tasks = await fetch('http://localhost:8888/tasks')
                .then(data => {

                    if(data.status !== 200)
                        return new Error("Problem with database connection");
                    
                    this.isLoading = false;
                    return data.json();
                })
                .catch(err => console.error(err));
            },
        }
    }

</script>

<style scoped>
    
    .container::before {
        content: '';
        display: block;
        height: 60px;
    }

</style>
