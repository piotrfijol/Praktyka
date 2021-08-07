import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home';
import ToDo from '../views/ToDo';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }, 
    {
        path: '/todo',
        name: 'Todo',
        component: ToDo
    }
]

const router = createRouter({
    history: createWebHistory('/Praktyka/2/'),
    routes
});

export default router;
