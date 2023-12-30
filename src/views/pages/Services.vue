<script setup>
import { ServicesSkeleton } from '@/components'
import { useThemeSetting, useServices } from '@/stores';
import { onMounted, ref } from 'vue'

const themeSetting = useThemeSetting();

const service  = useServices();
const searchQuery = ref('');
const paginateSize = ref(24);
const services = ref({});

const getServices = async(page=1) =>{
    const res = await service.getServices(page, paginateSize.value, searchQuery.value);
    if(res.success){
        services.value = res.result
    }
}

const searchData = () =>{
    getServices();
}

const paginateSizeWiseData = () =>{
    getServices();
}

onMounted(() => {
    getServices();
})
</script>

<template>
    <div>
        <!-- <div class="container my-4"> -->
            <div class="page-single-banner" style="background-image: url('http://localhost:5173/src/assets/images/banner/banner3.jpg');">
                <div class="text-center" style="position:relative;z-index:9;">
                    <img src="@/assets/images/light-logo.png" width="100" alt="">
                    <h1 class="white">All Services</h1>
                </div>
            </div>
        <!-- </div> -->
        <section class="mt-4">
            <div class="container">
                <div class="section-header d-flex justify-content-between">
                    <div class="form-group d-flex align-items-center" style="width: 350px;" :class="{'white': themeSetting.isDarkMode == 'dark'}">
                        <label for="search-service" >Search : </label>
                        <input type="text" style="width:250px;" class="form-control ml-2" placeholder="Enter your search key...." v-model="searchQuery" @input="searchData">
                    </div>
                    <div class="form-group d-flex align-items-center" style="width: 200px;" :class="{'white': themeSetting.isDarkMode == 'dark'}">
                        <label for="sort">Sort : </label>
                        <select name="paginate" id="sort" class="form-control ml-2" style="width:100px;" v-model="paginateSize" @change="paginateSizeWiseData">
                            <option value="24">24</option>
                            <option value="48">48</option>
                            <option value="96">96</option>
                        </select>
                    </div>
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
            </div>
        </section>
    </div>
</template>


<style>
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

.service-box:hover .service-content .btn-danger {
    background-color: #fff !important;
    color: #CA0F20 !important;
    transition: 0.5s !important;
}

</style>