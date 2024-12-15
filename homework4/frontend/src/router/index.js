import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue';
import Signup from '../views/Signup.vue';
import Post from "../views/Post.vue";
import AddPost from "../views/AddPost.vue";

const routes = [
  {
    path: '/',
    redirect: '/login', // Redirect root to login
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/signup',
    component: Signup,
  },
  {
    path: '/home',
    component: Home,
    meta: { requiresAuth: true }, // Protected route
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import(/* webpackChunkName: "about" */ '../views/Contacts.vue')
  },
  {
    path: '/post',
    component: Post,
    meta: { requiresAuth: true },
  },
  {
    path: '/addpost',
    component: AddPost,
    meta: { requiresAuth: true },
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = !!localStorage.getItem('authToken'); // Check if token exists
  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login'); // Redirect to login if not authenticated
  } else {
    next(); // Proceed if authenticated or route doesn't require auth
  }
});

export default router
