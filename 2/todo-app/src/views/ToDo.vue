<template>
    <div class="container">
        <add-task @addTask="addTask" />
        
        <tasks v-if="tasks.length" >
            <task  
                v-bind:key="task.id" 
                v-for="task in tasks" 
                @remove="removeTask"
                @toggle="toggleStatus"
                :taskId="task.id" 
                :title="task.name" 
                :taskStatus="task.isDone"
                :date="task.date"
            />
        </tasks>
        <div v-else>
            <p>You don't have anything to do! 😎</p>
        </div>
        
    </div>
</template>

<script>
    import Tasks from '../components/Tasks.vue';
    import Task from '../components/Task.vue';
    import AddTask from '../components/AddTask.vue';
    import tasksData from '../../default-tasks.json';


    export default {
        name: 'todo',
        data() {
            return {
                tasks: [],
                snapshots: []
            }
        },
        created() {
            this.downloadData();
        },
        beforeUpdate() {
            this.takeSnapShot();
        },
        updated() {
            this.saveData();
        },
        components: {
            Tasks,
            Task,
            AddTask
        },
        methods: {
            takeSnapShot() {
            },
            addTask({ name, isDone }) {
                this.tasks.unshift({
                    id: Math.floor(Math.random()*10000),
                    date: new Date(),
                    name,
                    isDone
                })
            },
            removeTask(taskId) {
                this.tasks = this.tasks.filter(task => task.id != taskId);
            },
            toggleStatus(taskId) {
                let idInArr = -1;
                this.tasks.forEach((task, id) => {
                    if(task.id === taskId) {
                        idInArr = id;
                    }
                });

                let task = {
                    ...this.tasks[idInArr]
                }
                task.isDone = !task.isDone;
                this.tasks = this.tasks.slice(0, idInArr).concat(task, this.tasks.slice(idInArr+1));
            },
            downloadData() {
                if(!localStorage.getItem('tasks'))
                    this.tasks = [...tasksData];
                else {
                    this.tasks = JSON.parse(localStorage.getItem('tasks'));
                }
            },
            saveData() {
                localStorage.setItem('tasks', JSON.stringify(this.tasks));
            }
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
