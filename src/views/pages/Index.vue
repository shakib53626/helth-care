<script setup>
import { ref, onMounted, watch } from 'vue'
import { useThemeSetting, useHomeSlider } from '@/stores'
import { SliderSkeleton } from '@/components'

const slider       = useHomeSlider();
const themeSetting = useThemeSetting();
const isDarkMode   = ref(themeSetting.isDarkMode);

const sliders   = ref({});

const getSliders = async() =>{
    const res = await slider.getSliders();
    if(res.success){
        sliders.value = res.result;
    }
} 

watch(() => themeSetting.isDarkMode, (newValue) => {
  isDarkMode.value = newValue;
});

import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
const modules = ref([Navigation, Pagination, Mousewheel, Keyboard, Autoplay]);

onMounted(() => {
    getSliders();
})
</script>
<template>
    <div>
        <section>
            <div class="container">
                <div class="home-slider">
                    <swiper
                        :cssMode="true"
                        :loop="true"
                        :autoplay="{
                            delay: 50000,
                        }"
                        :navigation="true"
                        :pagination="true"
                        :mousewheel="true"
                        :keyboard="true"
                        :modules="modules"
                        class="mySwiper"
                    >
                        <template v-if="slider.loading"> 
                            <SliderSkeleton/>
                        </template>
                        <template v-else>
                            <swiper-slide v-for="(slider, index) in sliders.data" :key="index">
                                <div class="single-slide align-center-left animation-style-02 bg-2">
                                    <div class="slider-progress"></div>
                                    <div class="slider-content" :style="'background-image:url('+ slider.image +');width:100%;'">
                                        <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(255, 17, 0, 0.1));"></div>
                                        <div class="row" style="padding: 0 50px;">
                                            <div class="col-md-8 d-flex align-items-center" style="height: 400px;">
                                                <div class="">
                                                    <h3 class="text-light">{{ slider.title }}</h3>
                                                    <p class="mb-4 text-light" style="font-size:18px;">At State Care, we are experts in supplying a wide variety of healthcare professionals to a diverse range of clients, including hospitals and care homes. </p>
                                                    <button class="btn btn-danger">All Services</button>
                                                </div>
                                            </div>
                                            <div class="col-md-4"></div>
                                        </div>
                                        <!-- <img src="@/assets/images/banner/banner3.jpg" alt=""> -->
                                    </div>
                                </div>
                            </swiper-slide>
                        </template>
                    </swiper>
                </div>
            </div>
        </section>
        <section class="mt-4">
            <div class="container">
                <div class="section-header text-center">
                    <h1 class="text-center" style="font-weight:900;" :class="{'white' : isDarkMode=='dark'}">Our Service</h1>
                    <p :class="{'white' : isDarkMode=='dark'}">State Care provides exceptional personal care services that allow our clients to continue living within the comfort of their homes. We are proud to be widely recognised as one of the best staff suppliers in our industry.</p>
                </div>
                <div class="row mt-4">
                    <div class="col-md-4 mb-4">
                        <div class="service-box">
                            <div class="service-content">
                                <h3 class="white mb-4">Domiciliary Care Services</h3>
                                <img src="@/assets/images/service/service1.jpg" alt="">
                                <button class="btn btn-danger mt-4">Find Out More</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="service-box">
                            <div class="service-content">
                                <h3 class="text-light mb-4" >Domiciliary Care Services</h3>
                                <img src="@/assets/images/service/service1.jpg" alt="">
                                <button class="btn btn-danger mt-4">Find Out More</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="service-box">
                            <div class="service-content">
                                <h3 class="text-light mb-4" >Domiciliary Care Services</h3>
                                <img src="@/assets/images/service/service1.jpg" alt="">
                                <button class="btn btn-danger mt-4">Find Out More</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="service-box">
                            <div class="service-content">
                                <h3 class="text-light mb-4" >Domiciliary Care Services</h3>
                                <img src="@/assets/images/service/service1.jpg" alt="">
                                <button class="btn btn-danger mt-4">Find Out More</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="service-box">
                            <div class="service-content">
                                <h3 class="text-light mb-4" >Domiciliary Care Services</h3>
                                <img src="@/assets/images/service/service1.jpg" alt="">
                                <button class="btn btn-danger mt-4">Find Out More</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 mb-4">
                        <div class="service-box">
                            <div class="service-content">
                                <h3 class="text-light mb-4" >Domiciliary Care Services</h3>
                                <img src="@/assets/images/service/service1.jpg" alt="">
                                <button class="btn btn-danger mt-4">Find Out More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="mt-4 mb-4 care-section">
            <div class="p-4 care-area" style="background-image: url('http://localhost:5173/src/assets/images/banner/banner3.jpg');">
                <div class="container care-content">
                    <div class="section-header text-center">
                        <h1 class="text-center white" style="font-weight:900;">State Care</h1>
                        <p class="white">At State Care, we recruit expert professional nursing and support staff and supply them to an extensive range of clients within the healthcare industry.</p>
                    </div>
                    <div class="row mt-4">
                        <div class="col-md-4">
                            <img src="@/assets/images/service/service1.jpg" alt="">
                        </div>
                        <div class="col-md-8">
                            <h4 class="white">We offer flexibility and unconditional support.</h4>
                            <p class="white">Regardless of our staff’s work requirements, we can provide both part-time and full-time positions in a location convenient to you. We offer a diverse range of roles to suit those who require flexible shifts or temporary employment within hospitals, care homes and other healthcare environments.</p>
                            <h4 class="white">Benefit from outstanding rates of pay</h4>
                            <p class="white">At State Care, our staff are our priority. Considering this, we offer our team outstanding and competitive pay rates to ensure they remain happy and can deliver exemplary service to every client.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="mt-4 mb-4">
            <div class="container">
                <div class="section-header text-center">
                    <h1 class="text-center" style="font-weight:900;" :class="{'white' : isDarkMode=='dark'}">Our Mission </h1>
                    <p :class="{'white' : isDarkMode=='dark'}">We aim to provide a homely environment where care and support is provided involving all our clients, their relatives, friends, medical professionals and other relevant personnel as appropriate to meet the essential needs of our clients. </p>
                </div>
                <div class="row mt-4">
                    <div class="col-md-6 mb-4 mission-img">
                        <img src="https://concordcare.co.uk/_nuxt/mission-img.e0daf02e.webp" alt="">
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-6 col-sm-6 mb-4">
                                <div class="mission-item text-center" :class="{'white' : isDarkMode=='dark'}">
                                    <i class="mission-icon fa-solid fa-house-medical-circle-check" style="font-size: 30px;"></i>
                                    <h4>Supported Living</h4>
                                    <p>Home care for specialist dementia service users.</p>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-6 mb-4">
                                <div class="mission-item text-center" :class="{'white' : isDarkMode=='dark'}">
                                    <i class="mission-icon fa-solid fa-house-medical-circle-check" style="font-size: 30px;"></i>
                                    <h4>Supported Living</h4>
                                    <p>Home care for specialist dementia service users.</p>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-6 mb-4">
                                <div class="mission-item text-center" :class="{'white' : isDarkMode=='dark'}">
                                    <i class="mission-icon fa-solid fa-house-medical-circle-check" style="font-size: 30px;"></i>
                                    <h4>Supported Living</h4>
                                    <p>Home care for specialist dementia service users.</p>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-6 mb-4">
                                <div class="mission-item text-center" :class="{'white' : isDarkMode=='dark'}">
                                    <i class="mission-icon fa-solid fa-house-medical-circle-check" style="font-size: 30px;"></i>
                                    <h4>Supported Living</h4>
                                    <p>Home care for specialist dementia service users.</p>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-6 mb-4">
                                <div class="mission-item text-center" :class="{'white' : isDarkMode=='dark'}">
                                    <i class="mission-icon fa-solid fa-house-medical-circle-check" style="font-size: 30px;"></i>
                                    <h4>Supported Living</h4>
                                    <p>Home care for specialist dementia service users.</p>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-6 mb-4">
                                <div class="mission-item text-center" :class="{'white' : isDarkMode=='dark'}">
                                    <i class="mission-icon fa-solid fa-house-medical-circle-check" style="font-size: 30px;"></i>
                                    <h4>Supported Living</h4>
                                    <p>Home care for specialist dementia service users.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<style scoped>
.home-slider{
    margin-top: 16px;
}
.slider-content{
    background-position: center center;
    background-size: cover;
    background-repeat: no-repeat;
}
.swiper-slide{
    height: 100%;
}
.service-box{
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    padding: 20px;
    text-align: center;
    position: relative;
}
.service-box::before{
    content: '';
    position: absolute;
    background-color: #CA0F20;
    width: 100%;
    height: 28%;
    border-bottom-left-radius: 50%;
    border-bottom-right-radius: 50%;
    left: 0;
    top: 0;
    transition: 0.5s;
}

.service-box:hover::before{
    height: 100%;
    border-radius: 0;
    transition: 0.5s;
}
.service-box:hover button{
    background-color: #fff;
    color: #CA0F20;
    transition: 0.5s;
}
.service-content{
    position: relative;
    z-index: 9;
}
.service-content h3{
    padding-bottom: 20px;
}
.service-box img{
    max-width: 100%;
    margin-top: 50px;
}
.care-section{
    position: relative;
}
.care-section::before{
    content: '';
    position: absolute;
    background: #000000b7;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}
.care-content{
    position:relative;
    z-index: 1;
}
.care-content img{
    max-width: 100%;

}
.care-area{
    background-attachment: fixed;
    background-size:cover;
}
.mission-img img{
    max-width: 100%;
    width: 100%;
    border-radius: 25px;
}
.mission-item{
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    padding: 10px;
    border-radius: 6px;
}
.mission-item i{
    margin : 5px 0;
    color: #CA0F20;
}
.mission-item:hover{
    background-color: #CA0F20;
    color: #fff;
}
.mission-item:hover .mission-icon{
    color: #fff !important;
}
.gray-slider {
    filter: grayscale(100%) !important;
}
</style>