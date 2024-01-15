<script setup>
import { useThemeSetting, useSocialContact } from '@/stores'
import Header1 from '@/views/common/Header1.vue';
import Footer from '@/views/common/Footer.vue';
import { ref, watch, onMounted } from 'vue';
import { storeToRefs } from 'pinia';

const themeSetting  = useThemeSetting();
const socialContact = useSocialContact();

const isOpen     = ref('');
const isOpenChat = ref('');
const isDarkMode = ref('');
const contactInfo= ref('');

const getSocialContact = async() =>{
    const res = await socialContact.getSocialContacts();
    if(res.success){
        contactInfo.value = res.result;
    }
}

const settingOpen = () => {
  isOpen.value = !isOpen.value;
};

const toggleDarkMode = () => {
   let res = themeSetting.toggleDarkMode();
   isDarkMode.value = res;
  updateStyles(); 
};

const lightMode = () => {
   let res = themeSetting.lightMode();
   isDarkMode.value = res;
  updateStyles(); 
};
const grayMode = () => {
   let res = themeSetting.grayMode();
   isDarkMode.value = res;
  updateStyles(); 
};
const contrastMode = () => {
   let res = themeSetting.contrastMode();
   isDarkMode.value = res;
  updateStyles(); 
};

const negativeContrastMode = () => {
   let res = themeSetting.negativeContrastMode();
   isDarkMode.value = res;
  updateStyles(); 
};

const chatOpen = () =>{
  isOpenChat.value = !isOpenChat.value
}

const increaseFontSize = () => {
  const currentFontSize = parseFloat(document.documentElement.style.fontSize || '18px');
  const newFontSize = currentFontSize * 1.5;
  document.documentElement.style.fontSize = newFontSize + 'px';
};

const decreaseFontSize = () => {
  const currentFontSize = parseFloat(document.documentElement.style.fontSize || '18px');
  const newFontSize = currentFontSize / 1.5;
  document.documentElement.style.fontSize = newFontSize + 'px';
};

const updateStyles = () => {
  const body = document.querySelector('body');
  if (themeSetting.isDarkMode == 'dark') {
    body.style.backgroundColor = '#1a1a1a';
    body.style.color = '#fff !important';
  }else if(themeSetting.isDarkMode == 'negative-contrast') {
    body.style.backgroundColor = '#57F0F0';
    body.style.color = '#fff !important';
  } else {
    body.style.backgroundColor = '#fff';
    body.style.color = '#333';
  }
};

const connectWhatsApp = (whatsappNumber) =>{
  const phoneNumber = whatsappNumber;
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  window.open(whatsappLink, "_blank");
}

const connectPhone = (number) =>{
  const phoneNumber = number;
  const phoneLink = `tel:${phoneNumber}`;
  window.location.href = phoneLink;
}
const connectMessenger = (messengerLink) =>{
  const messengerLinkIOS = "fb-messenger://user-thread/shakibul5362";
  // For Android devices
  const messengerLinkAndroid = "fb-messenger://user/123456789"; // Replace 123456789 with the user's Facebook ID

  // Check if the user is using iOS or Android
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  
  // Open the Messenger app
  if (isIOS) {
    window.open(messengerLinkIOS, "_blank");
  } else {
    window.location.href = messengerLinkAndroid;
  }
}

watch(isDarkMode, () => {
  updateStyles();
});

onMounted(() => {
  updateStyles();
  getSocialContact();
})
</script>

<template>
  <div>
    <Header1 :isDarkMode="isDarkMode"/>
    <div :class="{'gray-slider' : themeSetting.isDarkMode=='gray', 'contrast' : themeSetting.isDarkMode == 'contrast'}">

      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>

      
      <Footer/>
    </div>
    <div class="web-setting" @click.prevent="settingOpen">
      <div class="setting-icon" :class="{'setting-open' : isOpen, 'gray-slider' : themeSetting.isDarkMode=='gray', 'contrast' : themeSetting.isDarkMode == 'contrast'}" >
        <i class="fa-solid fa-wheelchair text-light" style="font-size: 24px;width:100%;"> <span class="ms-2 pl-2" :class="{ 'opacity' : !isOpen }">Accessibility</span></i>
        <ul v-if="isOpen" class="bg-light" style="margin-top:-5px;">
          <li @click.prevent="increaseFontSize" style="font-size:20px;"><i class="fa-solid fa-magnifying-glass-plus"></i> Zoom Text</li>
          <li @click.prevent="decreaseFontSize" style="font-size:20px;"><i class="fa-solid fa-magnifying-glass-minus"></i> Zoom Out Text</li>
          <li @click.prevent="toggleDarkMode" style="font-size:20px;"><i class="fa-solid fa-moon"></i> Dark Mode</li>
          <li @click.prevent="grayMode" style="font-size:20px;"><i class="fa-solid fa-barcode"></i> GrayScale</li>
          <li @click.prevent="contrastMode" style="font-size:20px;"><i class="fa-regular fa-sun"></i> High Contrast</li>
          <li @click.prevent="negativeContrastMode" style="font-size:20px;"><i class="fa-regular fa-sun"></i> Negative Contrast</li>
          <li @click.prevent="lightMode" style="font-size:20px;"><i class="fa-solid fa-rotate-left"></i> Reset</li>
        </ul>
      </div>
    </div>
    <div class="social-contact">
        <ul class="chat-item" :class="{ 'openChatItems' : isOpenChat }">
          <template v-for="(social, index) in contactInfo.data" :key="index">
            <li class="phone" @click.prevent="connectPhone(social.contact)" v-if="social.type=='Phone'"><i class="fa-solid fa-phone"></i></li>
            <li class="whatsapp" @click.prevent="connectWhatsApp(social.contact)" v-if="social.type=='WhatsApp'"><i class="fa-brands fa-whatsapp"></i></li>
            <li class="messenger" @click.prevent="connectMessenger(social.contact)" v-if="social.type=='Messenger'"><i class="fa-brands fa-facebook-messenger"></i></li>
          </template>
        </ul>
      <div class="message-icon" @click.prevent="chatOpen">
        <i class="fa-solid fa-xmark text-light" style="font-size: 20px;width:100%;" v-if="isOpenChat"></i>
        <i class="fa-regular fa-comment-dots text-light" style="font-size: 20px;width:100%;" v-else></i>
      </div>
      <div class="chat-text text-danger">
        Live Chat
      </div>
    </div>
  </div>

    <!-- @media screen and (max-width:768px) {
    .chat-item{
      right: 80px;
      bottom: 84px;
    }
    .social-contact .chat-text{
      right: 70px;
      bottom: 80px;
    }
    .social-contact .message-icon{
      right: 80px;
      bottom: 100px;
    }
  } -->
</template>

<style scoped>
.chat-item{
    position: fixed;
    bottom: 34px;
    right: 50px;
    z-index: 9;
    transition: 0.5s;
}
.openChatItems li{
  position: relative;
  transition: 0.5s;
}
.openChatItems li:nth-child(1) {
  margin-bottom: 60px;
}

.openChatItems li:nth-child(2) {
  margin-bottom: 120px;
}
.openChatItems li:nth-child(3) {
  margin-bottom: 180px;
}
.openChatItems li:nth-child(4) {
  margin-bottom: 240px;
}
.chat-item li{
  list-style: none;
  width: 50px;
  height: 50px;
  line-height: 55px;
  text-align: center;
  color: #fff;
  border-radius: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  cursor: pointer;
  transition: 0.5s;
}
.phone,
.whatsapp{
  background-color: #02B43C;
}
.messenger{
  background-color: #01A0F7;
}
.chat-item li i{
  font-size: 24px;
}
.opacity{
  opacity: 0;
  transition: 0.5s;
}
.web-setting .setting-icon{
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #CA0F20;
    position: fixed;
    top: 30%;
    right: 0;
    z-index: 99;
    cursor: pointer;
    transition: 0.5s;
}
.social-contact .message-icon{
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: #CA0F20;
    position: fixed;
    bottom: 50px;
    right: 50px;
    z-index: 99;
    cursor: pointer;
    transition: 0.5s;
    border-radius: 100%;
    border: 2px solid #fff;
}
.social-contact .chat-text{
    position: fixed;
    bottom: 30px;
    right: 40px;
    z-index: 99;
    font-weight: 700;
}
.fa-wheelchair{
  padding: 0 14px;
  margin-top: -4px;
  line-height: 2.3;
}
.web-setting .setting-open{
    width: 200px;
    text-align: left;
    transition: 0.5s;
}
.web-setting ul{
  width: 100%;
  border: 2px solid #CA0F20;
  padding: 0;
}
.web-setting ul li{
  list-style: none;
  padding: 5px 15px;
  line-height: 25px;
  color: #CA0F20;
}
.web-setting ul li:hover{
  background-color: #CA0F20;
  color: #fff;
}

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }

  .fade-enter-to,
  .fade-leave-from {
    opacity: 1;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }


</style>
