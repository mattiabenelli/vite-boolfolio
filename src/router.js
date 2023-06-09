import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./pages/HomePage.vue";
import ProjectList from "./pages/ProjectList.vue";
import SingleProject from "./pages/SingleProject.vue";
import Contacts from "./pages/Contacts.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/blog',
            name: 'project_list',
            component: ProjectList
        },
        {
            path: '/blog/:slug',
            name: 'single_project',
            component: SingleProject
        },
        {
            path: '/contatti',
            name: 'contact',
            component: Contacts
        }
    ]
});

export { router }