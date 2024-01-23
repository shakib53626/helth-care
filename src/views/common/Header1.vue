<script setup>
import { useSocialContact } from '@/stores'
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useThemeSetting } from '@/stores';
import { useRoute } from 'vue-router';

const route         = useRoute()
const themeSetting  = useThemeSetting();
const socialContact = useSocialContact();

const burger        = ref(false);
const contactInfo   = ref('');

const getSocialContact = async() =>{
    const res = await socialContact.getSocialContacts();
    if(res.success){
        contactInfo.value = res.result;
    }
}

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
    getSocialContact();
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
                        <template v-for="(email, index) in contactInfo.data" :key="index">
                            <div class="contact_icon" v-if="email.type == 'Email'">
                                <i class="fa-solid fa-envelope danger"></i>
                                <a class="text-dark" :class="{'white' : themeSetting.isDarkMode=='dark'}" :href="'mailto:'+ email.contact +''">{{ email.contact }}</a>
                            </div>
                        </template>
                        <template v-for="(phone, index) in contactInfo.data" :key="index">
                            <div class="contact_icon" v-if="phone.type == 'Phone'">
                                <i class="fa-solid fa-phone danger"></i>
                                <a class="text-dark" :class="{'white' : themeSetting.isDarkMode=='dark'}" :href="'tel:'+ phone.contact +''">{{ phone.contact }}</a>
                            </div>
                        </template>
                    </div>
                    <div class="social_links">
                            <template v-for="(social, index) in contactInfo.data" :key="index">
                                <a :href="social.contact" target="_blank" v-if="social.type == 'Linkedin'"><i class="fa-brands fa-linkedin-in"></i></a>
                                <a :href="social.contact" target="_blank" v-if="social.type == 'Facebook'"><i class="fa-brands fa-facebook-f"></i></a>
                                <a :href="social.contact" target="_blank" v-if="social.type == 'Youtube'"><i class="fa-brands fa-youtube"></i></a>
                            </template>
                        </div>
                    </div>
                    <div class="header_cta">
                        <router-link :to="{name : 'apply-form'}" class="btn_one">Apply Now</router-link>
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
                            <li><router-link :to="{name : 'services'}" :class="{'active' : route.name == 'services'}" @click.prevent="burgerButton">Our Services</router-link></li>
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