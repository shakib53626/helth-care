import NProgress from 'nprogress'
import {createRouter, createWebHistory} from 'vue-router'
import Index from '@/views/pages/Index.vue' 
import Login from '@/views/pages/auth/Login.vue' 
import Register from '@/views/pages/auth/Register.vue' 

const routes =[	
    { 
      path: '/',
      name:'index',
      component: Index,
      meta: { title: 'Home', guest: true }
    },
    { 
      path: '/login',
      name:'login',
      component: Login,
      meta: { title: 'Login', guest: true }
    },
    { 
      path: '/register',
      name:'register',
      component: Register,
      meta: { title: 'Register', guest: true }
    },
  ];


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0, behavior:"smooth" }
  },
})

const DEFAULT_TITLE = "404";
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || DEFAULT_TITLE;
  NProgress.start();
  next();
  // const loggedIn = useAuth();
  // if(to.matched.some((record) => record.meta.requiresAuth)){
  //   if(!loggedIn.user.meta){
  //     next({name:"login"});  
  //   }else{
  //     next();
  //   }
  // }else if(to.matched.some((record) => record.meta.guest)){
  //   if(loggedIn.user.meta){
  //     next({name:"my-account"});  
  //   }else{
  //     next();
  //   }
  // }else{
  //   next();
  // }
})
router.afterEach(() => {
  NProgress.done()
})

export default router;