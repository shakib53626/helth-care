import NProgress from 'nprogress'
import { useToken } from '@/stores'
import {createRouter, createWebHistory} from 'vue-router'

import Index from '@/views/pages/Index.vue'
import AboutUs from '@/views/pages/About.vue'
import ContactUs from '@/views/pages/Contact.vue'
import Login from '@/views/pages/auth/Login.vue' 
import Register from '@/views/pages/auth/Register.vue' 
import MyAccount from '@/views/pages/auth/MyAccount.vue'

import AllServices from '@/views/pages/Services.vue' 
import ServiceDetails from '@/views/pages/ServiceDetails.vue'
import ServiceTeam from '@/views/pages/ServicesTeam.vue' 
import BookingService from '@/views/pages/BookingService.vue' 

import ApplyForm from '@/views/pages/ApplyForm.vue' 
import Blogs from '@/views/pages/Blog.vue'
import BlogDetails from '@/views/pages/BlogDetails.vue'

import PrivacyPolicy from '@/views/pages/PrivacyPolicy.vue'

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
      path: '/my-account',
      name:'my-account',
      component: MyAccount,
      meta: { title: 'My Account Page', requiresAuth : true}
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
    { 
      path: '/services-team',
      name:'services-team',
      component: ServiceTeam,
      meta: { title: 'All Service Team'}
    },
    { 
      path: '/services-booking',
      name:'services-booking',
      component: BookingService,
      meta: { title: 'Booking a Service'}
    },
    { 
      path: '/apply-form',
      name:'apply-form',
      component: ApplyForm,
      meta: { title: 'Apply Form'}
    },
    { 
      path: '/blogs',
      name:'blogs',
      component: Blogs,
      meta: { title: 'All Blogs'}
    },
    { 
      path: '/blog-details/:id',
      name:'blog-details',
      component: BlogDetails,
      meta: { title: 'Blog Details'}
    },
    { 
      path: '/privacy-policy',
      name:'privacy-policy',
      component: PrivacyPolicy,
      meta: { title: 'Privacy and Policy'}
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
  const token = useToken();
  if(to.matched.some((record) => record.meta.requiresAuth)){
    if(!token.token){
      next({name:"login"});  
    }else{
      next();
    }
  }else if(to.matched.some((record) => record.meta.guest)){
    if(token.token){
      next({name:"my-account"});  
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