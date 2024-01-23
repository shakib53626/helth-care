<script setup>
import { useThemeSetting, useSocialContact } from '@/stores';
import { onMounted, ref } from 'vue';

const themeSetting  = useThemeSetting();
const socialContact = useSocialContact();
const contactInfo   = ref('');

const getSocialContact = async() =>{
    const res = await socialContact.getSocialContacts();
    if(res.success){
        contactInfo.value = res.result;
    }
}

const connectWhatsApp = (whatsAppNumber) =>{
  const phoneNumber = whatsAppNumber;
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  window.open(whatsappLink, "_blank");
}

onMounted(() => {
    getSocialContact();
});
</script>

<template>
    <div>
        <!-- <div class="container my-4"> -->
            <div class="page-single-banner" style="background-image: url('http://localhost:5173/src/assets/images/banner/banner3.jpg');">
                <div class="text-center" style="position:relative;z-index:9;">
                    <img src="@/assets/images/light-logo.png" width="100" alt="">
                    <h1 class="white">Contact Us</h1>
                </div>
            </div>
        <!-- </div> -->
        <section class="footer_get_touch_outer contact-form" :class="{'transparent' : themeSetting.isDarkMode == 'dark' || themeSetting.isDarkMode == 'negative-contrast',}">
            <div class="container">
                <div class="footer_get_touch_inner grid-70-30">
                    <div class="colmun-30 get_say_form">
                        <h5>Say Hi!</h5>
                        <ul class="get_say_info_sec" style="margin-bottom: 100px;">
                          <template v-for="(social, index) in contactInfo.data" :key="index">
                            <li v-if="social.type == 'Email'">
                                <i class="fa fa-envelope"></i>
                                <a :href="'mailto:'+ social.contact +''">{{ social.contact }}</a>
                            </li>
                            <li @click="connectWhatsApp(social.contact)" v-if="social.type == 'Whatsapp'">
                                <i class="fa-brands fa-whatsapp"></i>
                                <a href="javascript::void(0)">{{ social.contact }}</a>
                            </li>
                            <li v-if="social.type == 'Phone'">
                                <i class="fa-solid fa-phone"></i>
                                <a :href="'tel:'+ social.contact +''">{{ social.contact }}</a> 
                            </li>
                          </template>
                        </ul>  
                        <ul class="get_say_social-icn">
                          <template v-for="(social, index) in contactInfo.data" :key="index">
                            <li v-if="social.type == 'Phone'"><a :href="social.contact" target="_blank"><i class="fa-brands fa-facebook-f"></i></a></li>
                            <li v-if="social.type == 'Instagram'"><a :href="social.contact"><i class="fa-brands fa-instagram"></i></a></li>
                            <li v-if="social.type == 'Twitter'"><a :href="social.contact"><i class="fa-brands fa-twitter"></i></a></li>
                            <li v-if="social.type == 'Linkedin'"><a :href="social.contact"><i class="fa-brands fa-linkedin-in"></i></a></li>
                          </template>
                        </ul>          
                    </div> 
                    <div class="colmun-70 get_form">
                        <div class="get_form_inner" :class="{'transparent' : themeSetting.isDarkMode == 'dark'}">
                            <div class="get_form_inner_text">
                            <h3 :class="{'white' : themeSetting.isDarkMode == 'dark'}">Get In Touch</h3>
                            </div>
                            <form action="#">
                            <div class="grid-50-50">
                                <input type="text" placeholder="First Name">
                                <input type="text" placeholder="Last Name">
                                <input type="email" placeholder="Email">
                                <input type="tel" placeholder="Phone/Skype">
                            </div>
                            <div class="grid-full">
                                <textarea placeholder="About Your Project" cols="30" rows="10"></textarea>
                                <input type="submit" value="Submit">
                            </div>
                            </form>
                        </div>  
                    </div>       
                </div>
            </div>
        </section>
    </div>
</template>


<style scoped>
.page-single-banner{
    padding: 20px 0;
    background-position: center center;
    background-size: cover;
    position: relative;
}
.page-single-banner::before{
    content: '';
    position: absolute;
    background-color: #000000a6;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.footer_get_touch_outer {
  padding: 100px 0;
  background-color: #f2f4f6;
}
.grid-70-30 {
  display: grid;
  grid-template-columns: 30% 70%;
}
.get_form_inner {
  display: block;
  padding: 50px 40px;
  background: #fff;
  box-shadow: -4px -2px 20px -7px #cfd5df;
}
.contact-form input[type="text"], .contact-form input[type="text"], .contact-form input[type="email"], .contact-form input[type="tel"] {
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  color: #333;
  height: 42px;
  padding: 0 0 0 20px;
  width: 100%;
  outline: 0;
}
.grid-50-50 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}
.grid-full {
  margin: 20px 0;
}
.contact-form textarea {
  border: 1px solid #dbdbdb;
  border-radius: 2px;
  color: #333;
  padding: 12px 0 0 20px;
  width: 100%;
  outline: 0;
  margin-bottom: 20px;
}
.get_form_inner_text h3 {
  color: #333;
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 40px;
}
.contact-form input[type="submit"] {
  display: inline-block;
  font-size: 16px;
  text-transform: uppercase;
  background: transparent;
  border: 2px solid;
  font-weight: 500;
  padding: 10px 20px;
  outline: 0;
  cursor: pointer;
  color: #CA0F20;
  transition: all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  -webkit-transition: all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  -moz-transition: all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  -ms-transition: all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  -o-transition: all 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.contact-form input[type="submit"]:hover {
  background-color: #CA0F20;
  border-color: #CA0F20;
  color: #fff;
}
.get_say_form {
  display: inline-block;
  padding: 45px 0 25px 30px;
  background: #CA0F20;
  position: relative;
}
.get_say_form h5 {
  color: #fff;
  font-size: 26px;
  margin: 0 0 40px;
}
.contact-form ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.get_say_social-icn {
  display: flex;
  position: absolute;
  bottom: 40px;
}
.get_say_social-icn a {
  font-size: 22px;
  color: #fff;
  padding: 0 20px 0 0;
}
.get_say_info_sec i {
  color: #fff;
  font-size: 32px;
}
.get_say_info_sec > li {
  display: grid;
  grid-template-columns: 40px auto;
  align-items: center;
  margin-bottom: 40px;
}
.get_say_info_sec > li a {
  width: 100%;
  display: block;
  padding: 15px 25px;
  color: #CA0F20;
  font-size: 16px;
  text-decoration: unset;
  font-weight: 500;
  background: #fff;
  border-radius: 5px 0 0 5px;
  transition: background 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  -webkit-transition: background 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  -moz-transition: background 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  -ms-transition: background 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  -o-transition: background 0.3s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.get_say_info_sec > li a:hover {
  background-color: #000;
  color: #fff;
}
</style>