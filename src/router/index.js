import {createRouter, createWebHistory} from 'vue-router'
import ToDo from "@/components/ToDo";

const routes = [
    {
        path: '/',
        name: 'ToDo',
        component: ToDo
    },
]

const index = createRouter({
    history: createWebHistory(),
    routes
})

export default index