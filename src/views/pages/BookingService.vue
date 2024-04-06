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

onMounted(() => {
    getServices();
})
</script>

<template>
    <div>
        <div style="position:relative;">
            <div class="d-flex justify-content-center align-items-center service-banner-area" style="height:60vh;color:#fff">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta perspiciatis adipisci et pariatur minima temporibus nostrum animi vero aperiam cum?</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div class="custom-shape-divider-bottom-1712133491">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
        </div>
        <div class="form-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <h5>About Our Expertise</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam et quia blanditiis, aperiam tempore velit exercitationem temporibus vero, in aliquid atque beatae debitis eligendi maxime soluta quae minus, hic expedita cum placeat facere officiis culpa necessitatibus? Amet neque perferendis molestias ad repudiandae, repellat sed velit? Dignissimos earum ipsam omnis sit commodi adipisci et magni nulla, quisquam nesciunt veritatis, mollitia hic facere inventore distinctio sed voluptatibus dicta velit maxime, blanditiis excepturi laudantium rem laboriosam nostrum. Molestiae, possimus necessitatibus. Eaque minima sint porro quam alias consequatur nam tenetur harum nihil dolores voluptates hic, voluptatum eius doloribus dolorum necessitatibus at, adipisci quia animi.</p>
                    </div>
                    <div class="col-md-1"></div>
                    <div class="col-md-5">
                        <div class="card">
                            <h3 class="mb-4">Book a Service</h3>
                            <div class="form-group mb-3">
                                <label for="name">Your Name</label>
                                <input type="text" id="name" class="form-control" placeholder="Your Name">
                            </div>
                            <div class="form-group mb-3">
                                <label for="email">Your Email</label>
                                <input type="email" id="email" class="form-control" placeholder="Your Email">
                            </div>
                            <div class="form-group mb-3">
                                <label for="postCode">Post Code</label>
                                <input type="text" id="postCode" class="form-control" placeholder="Post Code">
                            </div>
                            <div class="form-group mb-4">
                                <label for="service">Choose a Service</label>
                                <select name="" id="service" class="form-control">
                                    <option value="Select One"></option>
                                </select>
                            </div>
                            <div class="form-btn">
                                <button class="btn btn_one" style="width:100%;">Submit Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="offering-services">
            <div class="container">
                <h2 class="mb-4">Offering Our Best Services</h2>
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
        </div>
    </div>
</template>


<style scoped>
.custom-shape-divider-bottom-1712133491 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.custom-shape-divider-bottom-1712133491 svg {
    position: relative;
    display: block;
    width: calc(126% + 1.3px);
    height: 133px;
}

.custom-shape-divider-bottom-1712133491 .shape-fill {
    fill: #FFFFFF;
}
.service-banner-area{
    background: rgb(121,9,88);
    background: linear-gradient(90deg, rgba(121, 9, 9, 0.692) 41%, rgba(255,0,112,0.2553396358543417) 100%), url('@/assets/images/medical.jpg');
    background-position: center center;
    background-size: cover;
}
.form-section{
    padding: 50px 0;
}
.form-section .card{
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border: none;
    padding: 50px 30px;
    margin-top: -250px;
}
.form-section .card h3{
    text-align: center;
    font-weight: 700;
}
.form-group label{
    font-weight: 600;
    font-size: 18px;
}
.form-btn button{
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 2px;
}
.form-section h5{
    font-size: 32px;
    font-weight: 700;
}
.offering-services{
    padding: 50px 0;
}
.offering-services h2{
    font-weight: 700;
    text-align: center;
}
</style>