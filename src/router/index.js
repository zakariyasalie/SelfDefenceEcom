// src/router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Homeview.vue';
import About from '@/views/Aboutview.vue';
import Contact from '@/views/Contact.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
