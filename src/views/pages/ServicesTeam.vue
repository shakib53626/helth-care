<script setup>
import { ServiceTeamSkeleton } from '@/components'
import { useThemeSetting, useServices, useServiceTeam } from '@/stores';
import { onMounted, ref } from 'vue'

const themeSetting = useThemeSetting();

const service        = useServices();
const serviceTeam    = useServiceTeam();
const serviceTeams   = ref();

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
                    <h1 class="white">Services Team</h1>
                </div>
            </div>
        <!-- </div> -->
        <section>
            <div class="our-team" :class="{'transparent' : themeSetting.isDarkMode == 'dark'}">
                <div class="container">
                    <div class="team-title text-center mb-4" :class="{'white' : themeSetting.isDarkMode == 'dark'}">
                        <h2>Service Team</h2>
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
                                        <button class="btn btn-edit">Book Now</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-4" v-for="(team, index) in serviceTeams" :key="index">
                                <div class="card">
                                    <div class="card-body" :class="{'white' : themeSetting.isDarkMode == 'dark'}">
                                        <img :src="team.image" width="130" alt="">
                                        <h4 class="mt-4">{{ team.name }}</h4>
                                        <h6 class="mb-3">{{ team.designation }}</h6>
                                        <p>{{ team.description}}</p>
                                        <button class="btn btn-edit">Book Now</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 mb-4" v-for="(team, index) in serviceTeams" :key="index">
                                <div class="card">
                                    <div class="card-body" :class="{'white' : themeSetting.isDarkMode == 'dark'}">
                                        <img :src="team.image" width="130" alt="">
                                        <h4 class="mt-4">{{ team.name }}</h4>
                                        <h6 class="mb-3">{{ team.designation }}</h6>
                                        <p>{{ team.description}}</p>
                                        <button class="btn btn-edit">Book Now</button>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<style>
.our-team .card:hover .btn-edit{
    background-color: #fff;
    color:#CA0F20;
}
</style>