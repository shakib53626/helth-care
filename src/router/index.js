import NProgress from 'nprogress'
import { useAuth } from '@/stores'
import {createRouter, createWebHistory} from 'vue-router'
import Index from '@/views/pages/Index.vue'
import AboutUs from '@/views/pages/About.vue'
import ContactUs from '@/views/pages/Contact.vue'
import Login from '@/views/pages/auth/Login.vue' 
import Register from '@/views/pages/auth/Register.vue' 

import AllServices from '@/views/pages/Services.vue' 
import ServiceDetails from '@/views/pages/ServiceDetails.vue' 

const routes =[	
    { 
      path: '/',
      name:'index',
      component: Index,
      meta: { title: 'Home'}
    },
    { 
      path: '/login',
      name:'login',
      component: Login,
      meta: { title: 'Login', guest : true}
    },
    { 
      path: '/register',
      name:'register',
      component: Register,
      meta: { title: 'Register', guest : true}
    },
    { 
      path: '/about-us',
      name:'about',
      component: AboutUs,
      meta: { title: 'About Us'}
    },
    { 
      path: '/contact-us',
      name:'contact',
      component: ContactUs,
      meta: { title: 'Contact Us'}
    },
    
    { 
      path: '/services',
      name:'services',
      component: AllServices,
      meta: { title: 'All Services'}
    },
    { 
      path: '/service-details/:id',
      name:'service-details',
      component: ServiceDetails,
      meta: { title: 'Service Details'}
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
  const loggedIn = useAuth();
  if(to.matched.some((record) => record.meta.requiresAuth)){
    if(!loggedIn.user.meta){
      next({name:"login"});  
    }else{
      next();
    }
  }else if(to.matched.some((record) => record.meta.guest)){
    if(loggedIn.user.meta){
      next({name:"index"});  
    }else{
      next();
    }
  }else{
    next();
  }
})
router.afterEach(() => {
  NProgress.done()
})

export default router;