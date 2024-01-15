<script setup>
import { useThemeSetting, useServices } from '@/stores';
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';

const themeSetting = useThemeSetting();

const route          = useRoute();
const service        = useServices();
const serviceDetails = ref({});

const getSingleService = async() =>{
    const res = await service.getSingleService(route.params.id);
    if(res.success){
        serviceDetails.value = res.result
    }
}

onMounted(() => {
    getSingleService();
})
</script>

<template>
    <div>
        <!-- <div class="container my-4"> -->
        <div class="container mt-4">
            <div class="page-single-banner" :style="'background-image: url('+ serviceDetails.banner_image +');padding:100px 0;'">
                <div class="text-center" style="position:relative;z-index:9;">
                    <h1 class="white">Service Details</h1>
                    <h4 class="white">{{ serviceDetails.title }}</h4>
                </div>
            </div>
        </div>
        <!-- </div> -->
        <div class="about-team my-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-6" :class="{'white' : themeSetting.isDarkMode == 'dark'}">
                        <div class="about-team-title" :class="{'white' : themeSetting.isDarkMode == 'dark'}">
                            <p v-html="serviceDetails.short_description_1"></p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <img :src="serviceDetails.first_image" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="our-team my-4" :class="{'transparent' : themeSetting.isDarkMode == 'dark'}">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <img :src="serviceDetails.second_image" alt="">
                    </div>
                    <div class="col-md-6" :class="{'white' : themeSetting.isDarkMode == 'dark'}">
                        <div class="about-team-title" :class="{'white' : themeSetting.isDarkMode == 'dark'}">
                            <p v-html="serviceDetails.short_description_2"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="about-service">
            <div class="container">
                <div class="row">
                    <div class="col-md-12" :class="{'white' : themeSetting.isDarkMode == 'dark'}">
                        <p v-html="serviceDetails.description"></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
img{
    max-width: 100%;
}
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
.page-single-banner h1{
    font-weight: 900;
}
.about-team{
    padding: 50px 0;
}
.our-team{
    background-color: #e9e9e9;
    padding: 50px 0;
}
.our-team .card{
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border: none;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    text-align: center;
    border-radius: 15px;
    position: relative;
    overflow: hidden;
    transition: 0.5s;
}
.our-team .card:hover{
    color: #fff;
}
.card-body{
    position: relative;
    z-index: 9;
}
.our-team .card::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 15px;
    background: #CA0F20;
    transition: 0.5s;
    z-index: 1;
}
.our-team .card:hover::before{
    height: 100%;
    transition: 0.5s;
}
.our-team .card img{
    border-radius: 100%;
}
.transparent{
    background: transparent;
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
</style>