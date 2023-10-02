import { createRouter, createWebHistory } from 'vue-router';
  import homepage from './pages/homepage.vue';
 import projects from './pages/projects.vue';
 import info from './pages/info.vue';

const router = createRouter({
    history: createWebHistory(), //history è il tipo di router che vogliamo usare, createWebHistory è quello che usa le history API del browser
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: homepage
        },
        {
            path: '/projects',
            name: 'projects',
            component: projects
        },
        {
            path: '/info',
            name: 'info',
            component: info
        }
    ]
});

export  {router};