import {createApp} from 'vue';
import './style.css';
import App from './App.jsx';
import {createWebHistory, createRouter} from 'vue-router';

const routes = [
    // {path: '/', component: () => import('./App')},
    {path: '/App', component: () => import('@/components/Demo/App')},
];


const router = createRouter({
    history: createWebHistory('/index'),
    routes,
});

createApp(App)
    .use(router)
    .mount('#root');
