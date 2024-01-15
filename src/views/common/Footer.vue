<script setup>
import { useThemeSetting, useSocialContact } from '@/stores';
import { onMounted, ref } from 'vue';

const themeSetting  = useThemeSetting();
const socialContact = useSocialContact();

const contactInfo = ref('');

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
        <div class="footer-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 text-light">
                        <div class="text-center">
                            <a href="/"><img src="@/assets/images/light-logo.png" width="120" alt="logo" class="logo"></a>
                        </div>
                        <p>We are dedicated to responsive home healthcare, focusing on individual patient needs for greater dignity, comfort, and improved well-being. Contact us today to learn more about our services.</p>
                    </div>
                    <div class="col-md-2 white mt-4">
                        <span style="font-size:22px;">Quick Link</span>
                        <ul>
                            <li><router-link :to="{name: 'index'}" class="white">Home</router-link></li>
                            <li><a href="" class="white">Our Services</a></li>
                            <li><a href="" class="white">About Us</a></li>
                            <li><a href="" class="white">Contact Us</a></li>
                            <li><a href="" class="white">Our Mission</a></li>
                        </ul>
                    </div>
                    <div class="col-md-2 white mt-4">
                        <span style="font-size:22px;">Social Link</span>
                        <ul>
                            <template v-for="(social, index) in contactInfo.data" :key="index">
                                <li v-if="social.type == 'Facebook'"><a :href="social.contact" class="white" target="_blank">Facebook</a></li>
                                <li v-if="social.type == 'Twitter'"><a href="" class="white"  target="_blank">Twitter</a></li>
                                <li @click="connectWhatsApp(social.contact)" v-if="social.type == 'Whatsapp'"><a href="javascript::void(0)" class="white">WhatsApp</a></li>
                                <li v-if="social.type == 'Linkedin'"><a :href="social.contact" class="white" target="_blank">Linkedin</a></li>
                                <li v-if="social.type == 'Youtube'"><a :href="social.contact" class="white" target="_blank">Youtube</a></li>
                            </template>
                        </ul>
                    </div>
                    <div class="col-md-4 white mt-4">
                        <span style="font-size:22px;">Let's Connect</span>
                        <div>
                            <i class="fa-solid fa-location-dot text-light pr-2"></i>
                            <span>Head Office Broadway, Postcode: E15 1XH, London, United Kingdom</span><br>
                            <i class="fa-solid fa-envelope text-light pr-2"></i>
                            <span>info@homestaycare.com</span><br>
                            <i class="fa-solid fa-phone text-light pr-2"></i>
                            <span> +44 20 8058 0821</span>
                        </div>
                        <!-- <p>

                            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100064321142836&tabs=timeline&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="130" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                        </p> -->
                        <div>
                            <div class="social-icon mt-4">
                                <template v-for="(social, index) in contactInfo.data" :key="index">
                                    <a :href="social.contact" v-if="social.type == 'Facebook'" target="_blank">
                                        <i class="fa-brands fa-facebook-f" style="color:#0775E2;"></i>
                                    </a>
                                    <a :href="social.contact" v-if="social.type == 'Twitter'" target="_blank">
                                        <i class="fa-brands fa-twitter" style="color:#00B2E5;"></i>
                                    </a>
                                    <a :href="social.contact" v-if="social.type == 'Youtube'" target="_blank">
                                        <i class="fa-brands fa-youtube" style="color:#F70000;"></i>
                                    </a>
                                    <a href="javascript::void(0)" v-if="social.type == 'Whatsapp'" @click="connectWhatsApp(social.contact)">
                                        <i class="fa-brands fa-whatsapp" style="color:#40A84D;"></i>
                                    </a>
                                    <a :href="social.contact" v-if="social.type == 'Linkedin'" target="_blank">
                                        <i class="fa-brands fa-linkedin-in" style="color:#0A63BC;"></i>
                                    </a>
                                </template>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright text-center" :class="{'white' : themeSetting.isDarkMode=='dark'}">
            <p>© 2023 HomeStay Care | Developed By <a href="https://servicekey.io/">Service Key</a>.</p>
        </div>
    </div>
</template>


<style scoped>
.footer-area{
    background-color: #CA0F20;
    padding: 50px;
}
.footer-area ul li{
    transition: 0.5s;
}
.footer-area ul li:hover{
    transform: translateX(10px);
    transition: 0.5s;
    color: yellow;
}
.footer-area ul li:hover .footer-area ul li a{
    color: yellow;
}

.social-icon i{
    background-color: #fff;
    width: 35px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    border-radius: 4px;
    margin-left: 10px;
}
.copyright{
    padding: 15px 0;
}
.copyright p{
    margin-bottom: 0;
}


</style>