<script setup>
import { useSocialContact, useAuth, useToken, useNotification } from '@/stores'
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useThemeSetting } from '@/stores';
import { useRoute } from 'vue-router';

const auth          = useAuth();
const token         = useToken();
const route         = useRoute();
const themeSetting  = useThemeSetting();
const socialContact = useSocialContact();
const notification  = useNotification();

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

const logout = async() =>{
    const res = await auth.logout();
    if(res.success){
        notification.Success("Logout Success")
    }
}

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
                        <router-link :to="{name : 'apply-form'}" class="btn_one mr-2">Apply</router-link>
                        <router-link :to="{name : 'services-booking'}" class="btn_one">Booking Service</router-link>
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
                    <div class="container d-flex justify-content-between responsive-sidebar">
                        <ul>
                            <li><router-link :to="{name : 'index'}" :class="{'active' : route.name == 'index'}" @click.prevent="burgerButton">Home</router-link></li>
                            <li><router-link :to="{name : 'services'}" :class="{'active' : route.name == 'services'}" @click.prevent="burgerButton">Our Services</router-link></li>
                            <li><router-link :to="{name : 'about'}" :class="{'active' : route.name == 'about'}" @click.prevent="burgerButton">About us</router-link></li>
                            <li><router-link :to="{name : 'contact'}" :class="{'active' : route.name == 'contact'}" @click.prevent="burgerButton">Contact us</router-link></li>
                            <li><router-link :to="{name : 'blogs'}" :class="{'active' : route.name == 'blogs'}" @click.prevent="burgerButton">Blog</router-link></li>
                        </ul>
                        <div>
                            <div class="user-login" v-if="auth.user">
                                <a @click.prevent="burgerButton" class="d-flex align-items-center">
                                    <i class="fa-solid fa-user login-icon"></i>
                                    <span>{{ auth.user?.name ? auth.user?.name : 'Login' }}</span>
                                </a>
                                <div class="profile-dropdown" :class="{'bg_dark' : themeSetting.isDarkMode=='dark'}" v-if="token.token">
                                    <ul>
                                        <li>
                                            <div class="user-identity">
                                                <img src="@/assets/images/logo.png" alt="">
                                                <h4>{{ auth.user?.name }}</h4>
                                            </div>
                                        </li>
                                        <li><router-link :to="{name:'my-account'}"><i class="fa-solid fa-user"></i> My Account</router-link></li>
                                        <li><router-link :to="{name:'my-account', query:{isActive:'changePassword'} }"><i class="fa-solid fa-key"></i> Change Password</router-link></li>
                                        <li v-if="auth.logoutLoading"><a><i class="fa-solid fa-spinner fa-spin"></i> Loading....</a></li>
                                        <li v-else><a @click="logout"><i class="fa-solid fa-right-from-bracket"></i> Logout</a></li>
                                    </ul>
                                </div>
                                <div class="profile-dropdown-logout" :class="{'bg_dark' : themeSetting.isDarkMode=='dark'}" v-else>
                                    <ul>
                                        <li><router-link :to="{name:'login'}"><i class="fa-solid fa-user"></i> Login</router-link></li>
                                        <li><router-link :to="{name:'register'}"><i class="fa-solid fa-user-plus"></i> Register</router-link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
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
.user-login{
    margin: 0 10px;
    cursor: pointer;
    position: relative;
}
.login-icon{
    font-size: 20px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    border: 2px solid #fff;
    border-radius: 50%;
    margin: 7px 10px;
}
.user-login span{
    text-transform: uppercase;
    display: inline-block;
    border-bottom: 2px solid #fff;
    font-weight: 500;
}
.user-login:hover .profile-dropdown{
    height: 288px;
    transition: 0.5s;
    z-index: 99;
}
.user-login:hover .profile-dropdown-logout{
    height: 72px;
    transition: 0.5s;
}
.profile-dropdown,
.profile-dropdown-logout{
    position: absolute;
    height: 0;
    top: 45px;
    left: 0;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    overflow: hidden;
    transition: 0.5s;
}
.profile-dropdown-logout{
    width: 200px;
}

.profile-dropdown ul,
.profile-dropdown-logout ul{
    margin: 0;
    padding: 0;
    display: block;
}
.profile-dropdown ul li,
.profile-dropdown-logout ul li{
    list-style: none;
}
.profile-dropdown ul li a i,
.profile-dropdown-logout ul li a i{
    color: #CA0F20;
}
.user-identity{
    background-color: #CA0F20;
    width: 250px;
    text-align: center;
    padding: 20px;
}
.user-identity img{
    max-width: 100px;
    border: 4px solid #e4e4e4;
    border-radius: 50%;
}
.user-identity h4{
    font-weight: 700;
    color: #fff;
    margin-top: 10px;
    margin-bottom: 0;
}
.profile-dropdown ul li a,
.profile-dropdown-logout ul li a{
    display: inline-block;
    border-top: 1px solid #CA0F20;
    width: 100%;
    padding: 5px 10px;
    text-decoration: none;
    font-weight: 600;
    color: #CA0F20;
}
.profile-dropdown-logout ul li a:hover,
.profile-dropdown ul li a:hover{
    border-top: 1px solid #fff;
    background-color: #CA0F20;
    color: #fff;
}
.profile-dropdown ul li a:hover .profile-dropdown ul li a i{
    color: #fff;
}
.bg_dark{
    background-color: #1A1A1A;
}
@media screen and (max-width: 768px) {
    .responsive-sidebar{
        display: flex;
        flex-direction: column;
    }
    .responsive-sidebar ul{
        order: 2;
    }
}

</style>