// importing router library
import { createRouter, createWebHistory } from 'vue-router';

// Import all components for the routes
import ContactList from "@/components/ContactList.vue";
import AddContact from "@/components/AddContact.vue";

// defining of Components' name and their route
const routes = [
    {
        name: 'ContactListComponent',
        path: '/',
        component: ContactList,
    },
    {
        name: 'AddContactComponent',
        path: '/add-contact',
        component: AddContact
    }
]

// using the router library
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;