<script setup>
import { ServiceTeamSkeleton } from '@/components'
import { useThemeSetting, useServiceTeam } from '@/stores';
import { onMounted, ref } from 'vue';
const themeSetting = useThemeSetting();
const serviceTeam  = useServiceTeam();
const serviceTeams = ref();

const getServiceTeams = async() =>{
    const res = await serviceTeam.getServiceTeams();
    if(res.success){
        serviceTeams.value = res.result?.data;
    }
}

onMounted(() => {
    getServiceTeams();
})
</script>

<template>
    <div>
        <!-- <div class="container my-4"> -->
            <div class="page-single-banner" style="background-image: url('http://localhost:5173/src/assets/images/banner/banner3.jpg');">
                <div class="text-center" style="position:relative;z-index:9;">
                    <img src="@/assets/images/light-logo.png" width="100" alt="">
                    <h1 class="white">About Us</h1>
                </div>
            </div>
        <!-- </div> -->
        <div class="our-team" :class="{'transparent' : themeSetting.isDarkMode == 'dark'}">
            <div class="container">
                <div class="team-title text-center mb-4" :class="{'white' : themeSetting.isDarkMode == 'dark'}">
                    <h2> Our Team Comment</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste possimus maiores quibusdam, aliquid esse velit.</p>
                </div>
                <div class="row">
                    <template v-if="serviceTeam.loading">
                        <ServiceTeamSkeleton/>
                    </template>
                    <template v-else>
                        <div class="col-md-4 mb-4" v-for="(team, index) in serviceTeams" :key="index">
                            <div class="card">
                                <div class="card-body" :class="{'white' : themeSetting.isDarkMode == 'dark'}">
                                    <img :src="team.image" width="130" alt="">
                                    <h4 class="mt-4">{{ team.name }}</h4>
                                    <h6 class="mb-3">{{ team.designation }}</h6>
                                    <p>{{ team.description}}</p>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </div>
        <div class="about-team my-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-6" :class="{'white' : themeSetting.isDarkMode == 'dark'}">
                        <div class="about-team-title" :class="{'white' : themeSetting.isDarkMode == 'dark'}">
                            <h3>About Our Team</h3>
                            <p>What sets Homestay apart is our amazing team devoted to responsive home care. Our nurses, therapists, drivers, and coordinators choose this work because they love bringing care into homes and developing trusted relationships with clients along their healthcare journeys. Recognition of our staff’s compassion comes from consistently positive patient survey feedback. We invest extensively in continuing education and training to ensure our team delivers creative, effective solutions with patience and kindness at their core. 

                                If you or a loved one need individualized home healthcare, choose Homestay for an experience that prioritizes comfort.
                            </p>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <iframe width="100%" height="315" src="https://www.youtube.com/embed/DublqkOSBBA?si=K0NcBdRKfRPdBSII" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
        </div>
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