<script setup>
import { ref, onMounted, watch } from 'vue'
import { useThemeSetting, useHomeSlider, useServices } from '@/stores'
import { SliderSkeleton, ServicesSkeleton } from '@/components'

const service      = useServices();
const slider       = useHomeSlider();
const themeSetting = useThemeSetting();
const isDarkMode   = ref(themeSetting.isDarkMode);

const sliders  = ref({});
const services = ref({});

const getSliders = async() =>{
    const res = await slider.getSliders();
    if(res.success){
        sliders.value = res.result;
    }
} 

const getServices = async(page=1) =>{
    const res = await service.getServices(page, 6);
    if(res.success){
        services.value = res.result
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
    getServices();
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
                                        <div style="position: absolute; top: 0; right: 0; bottom: 0; left: 0; background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(255, 17, 0, 0.1));" hidden></div>
                                        <div class="row" style="padding: 0 50px;">
                                            <div class="col-md-8 d-flex align-items-center" style="height: 400px;">
                                                <div class="">
                                                    <h3 class="text-light" v-show="slider.title != 'null' && slider.title != 'undefined'">{{ slider.title }}</h3>
                                                    <p class="mb-4 text-light" style="font-size:18px;" v-show="slider.description != 'null' && slider.description != 'undefined'">{{ slider.description }}</p>
                                                    <a :href="slider.link" class="btn btn-danger" v-show="slider.link && slider.link != 'null' && slider.link != 'undefined'">Click View</a>
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
                    <p :class="{'white' : isDarkMode=='dark'}">Homestay Home Healthcare provides specialized medical care, daily living assistance, and comfort care directly in patient homes.</p>
                </div>
                <div class="row mt-4">
                    <template v-if="service.loading">
                        <ServicesSkeleton/>
                    </template>
                    <template v-else>
                        <div class="col-md-4 mb-4" v-for="(service, index) in services?.data" :key="index">
                            <div class="service-box">
                                <div class="service-content">
                                    <h3 class="white mb-4">{{ service.title }}</h3>
                                    <img :src="service.banner_image" alt="">
                                    <router-link :to="{name: 'service-details', params : {id:service.id} }" class="btn btn-danger mt-4">View Details</router-link>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
                <div class="row mt-4">
                    <router-link :to="{name:'services'}" class="btn btn-danger btn-lg m-auto">See More</router-link>
                </div>
            </div>
        </section>
        <section class="mt-4 mb-4 care-section">
            <div class="p-4 care-area" style="background-image: url('http://localhost:5173/src/assets/images/banner/banner3.jpg');">
                <div class="container care-content">
                    <div class="section-header text-center">
                        <h1 class="text-center white" style="font-weight:900;">Home Healthcare That Comes to You</h1>
                        <p class="white">At Homestay, we understand that recovering in the comfort of your own home can make all the difference. </p>
                    </div>
                    <div class="row mt-4">
                        <div class="col-md-4">
                            <img src="@/assets/images/service/service1.jpg" alt="">
                        </div>
                        <div class="col-md-8">
                            <h4 class="white">Getting Quality Care Doesn't Require Leaving Home</h4>
                            <p class="white">We bring the services you need directly into your home, so quality care never requires leaving your comfort zone. Our customized care programs can include skilled nursing, physical therapy, home health aides, meal deliveries, medication management, personal care assistance like bathing and dressing, or referrals to additional resources you may require. We handle all the coordination and preparations for you.</p>
                            <h4 class="white">Your well-being is Our Top Priority </h4>
                            <p class="white">We know your health encompasses more than expert medical treatment. That is why we take the time to truly listen to you and develop overall plans that meet both your physical and emotional needs. Our staff is available 24/7 to answer questions, provide updates, and respond to emergencies.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="mt-4 mb-4">
            <div class="container">
                <div class="section-header text-center">
                    <h1 class="text-center" style="font-weight:900;" :class="{'white' : isDarkMode=='dark'}">Our Mission </h1>
                    <p :class="{'white' : isDarkMode=='dark'}">At Homestay, our mission is to simplify life for those recovering from illness, managing chronic conditions, or facing health challenges. We fulfill our mission through</p>
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
                                    <h4>Responsive Care</h4>
                                    <p>Providing patient-centered care with kindness, empathy, and respect.</p>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-6 mb-4">
                                <div class="mission-item text-center" :class="{'white' : isDarkMode=='dark'}">
                                    <i class="mission-icon fa-solid fa-house-medical-circle-check" style="font-size: 30px;"></i>
                                    <h4>Customized Services</h4>
                                    <p>Providing personalized care plans for each patient's specific needs.</p>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-6 mb-4">
                                <div class="mission-item text-center" :class="{'white' : isDarkMode=='dark'}">
                                    <i class="mission-icon fa-solid fa-house-medical-circle-check" style="font-size: 30px;"></i>
                                    <h4>Home Environment </h4>
                                    <p>Enabling healing and independence within the comfort of familiar surroundings.</p>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-6 mb-4">
                                <div class="mission-item text-center" :class="{'white' : isDarkMode=='dark'}">
                                    <i class="mission-icon fa-solid fa-house-medical-circle-check" style="font-size: 30px;"></i>
                                    <h4>Overall Support </h4>
                                    <p>Addressing physical, emotional, and psychosocial health factors.</p>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-6 mb-4">
                                <div class="mission-item text-center" :class="{'white' : isDarkMode=='dark'}">
                                    <i class="mission-icon fa-solid fa-house-medical-circle-check" style="font-size: 30px;"></i>
                                    <h4>Continuous Communication</h4>
                                    <p>Maintaining 24/7 contact for questions, updates, and responsive care.</p>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-6 mb-4">
                                <div class="mission-item text-center" :class="{'white' : isDarkMode=='dark'}">
                                    <i class="mission-icon fa-solid fa-house-medical-circle-check" style="font-size: 30px;"></i>
                                    <h4>Community Resources </h4>
                                    <p>Connecting patients and caregivers with additional support services.</p>
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