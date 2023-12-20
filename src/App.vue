<script setup>
import { useThemeSetting } from '@/stores'
import Header1 from '@/views/common/Header1.vue';
import Footer from '@/views/common/Footer.vue';
import { ref, watch, onMounted } from 'vue';
import { storeToRefs } from 'pinia';

const themeSetting = useThemeSetting();

const isOpen = ref('');
const isDarkMode  = ref('');

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

watch(isDarkMode, () => {
  updateStyles();
});

onMounted(() => {
  updateStyles();
})
</script>

<template>
  <div>
    <Header1 :isDarkMode="isDarkMode"/>
    <div :class="{'gray-slider' : themeSetting.isDarkMode=='gray', 'contrast' : themeSetting.isDarkMode == 'contrast'}">

      <router-view></router-view>

      
      <Footer/>
    </div>
    <div class="web-setting" @click.prevent="settingOpen">
      <div class="setting-icon" :class="{'setting-open' : isOpen, 'gray-slider' : themeSetting.isDarkMode=='gray', 'contrast' : themeSetting.isDarkMode == 'contrast'}" >
        <i class="fa-solid fa-gears text-light" style="font-size: 20px;width:100%;"> <span class="ms-2 pl-2" v-if="isOpen">Accessibility</span></i>
        <ul v-if="isOpen" class="bg-light">
          <li @click.prevent="increaseFontSize" style="font-size:20px;"><i class="fa-solid fa-magnifying-glass-plus"></i> Zoom Text</li>
          <li @click.prevent="decreaseFontSize" style="font-size:20px;"><i class="fa-solid fa-magnifying-glass-minus"></i> Zoom Out Text</li>
          <li @click.prevent="toggleDarkMode" style="font-size:20px;"><i class="fa-solid fa-moon"></i> Dark Mode</li>
          <li @click.prevent="lightMode" style="font-size:20px;"><i class="fa-solid fa-lightbulb"></i> Light Mode</li>
          <li @click.prevent="grayMode" style="font-size:20px;"><i class="fa-solid fa-barcode"></i> GrayScale</li>
          <li @click.prevent="contrastMode" style="font-size:20px;"><i class="fa-regular fa-sun"></i> High Contrast</li>
          <li @click.prevent="negativeContrastMode" style="font-size:20px;"><i class="fa-regular fa-sun"></i> Negative Contrast</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
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
.fa-gears{
  padding: 0 10px;
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

</style>
