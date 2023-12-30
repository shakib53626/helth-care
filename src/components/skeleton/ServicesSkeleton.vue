<script setup>
    import { defineProps } from 'vue';
    const props = defineProps({
        dataAmount:{
            type:Number,
            required: true,
            default:6,
        }
    });
</script>

<template>
    <div class="col-md-4 mb-4" v-for="(team, index) in dataAmount" :key="index">
        <div class="service-box">
            <div class="service-content">
                <div class="ssc-head-line w-100" style="height:30px;"></div>
                <div class="ssc-head-line w-50 mx-auto mt-2" style="height:30px;"></div>
                <div class="ssc-head-line w-100" style="height:250px; margin-top:80px;"></div>

                <div class="ssc-head-line w-50 mx-auto mt-4" style="height:40px;border-radius:6px;"></div>
            </div>
        </div>
    </div>
    <!-- <div class="col-md-4 mb-4" v-for="(team, index) in dataAmount" :key="index">
        <div class="card py-4" style="background-color: transparent; border-radius:15px;">
            <div class="card-body">
                <div class="ssc-circle m-auto" style="height:100px; width:100px;"></div>
                <div class="ssc-head-line mt-4 mb-2 mx-auto" style="width:50%;"></div>
                <div class="ssc-head-line mb-4 mx-auto" style="width:40%;height:20px;"></div>
                <div class="ssc-line mb-2"></div>
                <div class="ssc-line mb-2"></div>
                <div class="ssc-line mb-2"></div>
                <div class="ssc-line mb-2"></div>
                <div class="ssc-line mb-2"></div>
                <div class="ssc-line mb-2"></div>
                <div class="ssc-line mb-2"></div>
            </div>
        </div>
    </div> -->
</template>


<style scoped>

</style>