<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useThemeSetting } from '@/stores';
import { useRoute } from 'vue-router';

const route = useRoute()
const themeSetting = useThemeSetting();

const burger = ref(false);

const burgerButton = () => {
  burger.value = !burger.value;
};

const handleScroll = () => {
    const navWrapper = document.querySelector('.nav-wrapper');
    if (navWrapper) {
        const offset = window.scrollY;
        if (offset > 0) {
            navWrapper.classList.add('fixed');
        } else {
            navWrapper.classList.remove('fixed');
        }
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <div>
        <header id="header">
            <div class="container" style="padding:0;" :class="{'gray-slider' : themeSetting.isDarkMode=='gray', 'contrast' : themeSetting.isDarkMode=='contrast'}">
                <div class="header_flex">
                <div v-if="themeSetting.isDarkMode == 'dark'">
                    <router-link :to="{name: 'index'}"><img src="@/assets/images/light-logo.png" width="80" alt="logo" class="logo"></router-link>
                </div>
                <div v-else>
                    <router-link :to="{name: 'index'}"><img src="@/assets/images/logo.png" width="80" alt="logo" class="logo"></router-link>
                </div>
                <div class="d_flex gap_26">
                    <div class="d_flex gap_26">
                    <div class="contact_links">
                        <div class="contact_icon">
                            <i class="fa-solid fa-envelope danger"></i>
                            <a class="text-dark" :class="{'white' : themeSetting.isDarkMode=='dark'}" href="mailto:sudipbhowmick80@gmail.com"> sudipbhowmick80@gmail.com</a>
                        </div>
                        <div class="contact_icon">
                            <i class="fa-solid fa-phone danger"></i>
                            <a class="text-dark" :class="{'white' : themeSetting.isDarkMode=='dark'}" href="tel:918898244769"> +91 88982447698</a>
                        </div>
                    </div>
                    <div class="social_links">
                        <a href="#" target="_blank"><i class="fa-brands fa-linkedin-in"></i></a>
                        <a href="#" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                        <a href="#" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                    </div>
                    </div>
                    <div class="header_cta">
                        <router-link :to="{name : 'login'}" class="btn_one">Login</router-link>
                    </div>

                    <button type="button" class="burger" :class="{'active' : burger}" id="burger" @click.prevent="burgerButton">
                        <span class="burger_line"></span>
                        <span class="burger_line"></span>
                        <span class="burger_line"></span>
                    </button>
                </div>
                </div>
            </div>
            <div class="overlay" :class="{'active' : burger}" @click.prevent="burgerButton"></div>
            <div class="nav-wrapper" :class="{'gray-slider' : themeSetting.isDarkMode=='gray', 'contrast' : themeSetting.isDarkMode=='contrast'}">
                <nav class="dark_bg" id="menu" :class="{'active' : burger}">
                    <div class="container">
                        <ul>
                            <li><router-link :to="{name : 'index'}" :class="{'active' : route.name == 'index'}" @click.prevent="burgerButton">Home</router-link></li>
                            <li><router-link :to="{name : 'about'}" :class="{'active' : route.name == 'about'}" @click.prevent="burgerButton">About us</router-link></li>
                            <li><router-link :to="{name : 'contact'}" :class="{'active' : route.name == 'contact'}" @click.prevent="burgerButton">Contact us</router-link></li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    </div>
</template>
<style>
#header {
  transition: 0.3s ease-in-out;
  z-index: 1000; /* Set a higher z-index value */
}
.nav-wrapper {
    position: relative;
    z-index: 1000;
}

.nav-wrapper.fixed {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.1);
}


</style>