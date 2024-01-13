
<script setup>
import { useThemeSetting, useAuth, useNotification } from '@/stores';
import { ref } from 'vue';
import router from '@/router';

const themeSetting = useThemeSetting();
const notification = useNotification();
const auth         = useAuth();

const errors           = ref('');
const name             = ref('');
const email            = ref('');
const phone_number     = ref('');
const password         = ref('');
const confirm_password = ref('');

const submit = async() =>{
    const res = await auth.register({
        name                 : name.value,
        phone_number         : phone_number.value,
        password             : password.value,
        email                : email.value,
        password_confirmation: confirm_password.value,
    });

    if(res.success){
        router.push({name:'index'});
        notification.Success('Registration Success');
    }else{
        errors.value = res.errors;
    }
}

</script>

<template>
    <div class="container">
        <div class="d-flex justify-content-center align-items-center">
            <div class="register-card">
                <div class="register-title text-center mb-4">
                    <h2 :class="{'white' : themeSetting.isDarkMode == 'dark'}">User Registration</h2>
                </div>
                <form action="">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="first_name" :class="{'white' : themeSetting.isDarkMode == 'dark'}">Username <span class="text-danger">*</span></label>
                                <input type="first_name" id="first_name" class="form-control" placeholder="Enter Username" v-model="name">
                                <span class="text-danger" v-for="(error, index) in errors?.name" :key="index">{{ error }}</span>
                            </div>
                        </div>
                        <!-- <div class="col-md-6">
                            <div class="form-group">
                                <label for="last_name" :class="{'white' : themeSetting.isDarkMode == 'dark'}">Last Name <span class="text-danger">*</span></label>
                                <input type="last_name" id="last_name" class="form-control" placeholder="Enter last name">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="username" :class="{'white' : themeSetting.isDarkMode == 'dark'}">Username <span class="text-danger">*</span></label>
                                <input type="username" id="username" class="form-control" placeholder="Enter username">
                            </div>
                        </div> -->
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="email" :class="{'white' : themeSetting.isDarkMode == 'dark'}">Email <span class="text-danger">*</span></label>
                                <input type="email" id="email" class="form-control" placeholder="Enter Email" v-model="email">
                                <span class="text-danger" v-for="(error, index) in errors?.email" :key="index">{{ error }}</span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="phone" :class="{'white' : themeSetting.isDarkMode == 'dark'}">Phone <span class="text-danger">*</span></label>
                                <input type="text" id="phone" class="form-control" placeholder="Enter phone number" v-model="phone_number">
                                <span class="text-danger" v-for="(error, index) in errors?.phone_number" :key="index">{{ error }}</span>
                            </div>
                        </div>
                        <!-- <div class="col-md-6">
                            <div class="form-group">
                                <label for="phone" :class="{'white' : themeSetting.isDarkMode == 'dark'}">Role(s) Applying For <span class="text-danger">*</span></label>
                                <input type="text" id="phone" class="form-control" placeholder="Enter phone number">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="area" :class="{'white' : themeSetting.isDarkMode == 'dark'}">Select Work Area(s) <span class="text-danger">*</span></label>
                                <input type="text" id="area" class="form-control" placeholder="Enter working area">
                            </div>
                        </div> -->
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="password" :class="{'white' : themeSetting.isDarkMode == 'dark'}">Password <span class="text-danger">*</span></label>
                                <input type="password" id="password" class="form-control" placeholder="Enter password" v-model="password">
                                <span class="text-danger" v-for="(error, index) in errors?.password" :key="index">{{ error }}</span>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="confirm_password" :class="{'white' : themeSetting.isDarkMode == 'dark'}">Confirm Password <span class="text-danger">*</span></label>
                                <input type="password" id="confirm_password" class="form-control" placeholder="Re-type password" v-model="confirm_password">
                                <span class="text-danger" v-for="(error, index) in errors?.phone_number" :key="index">{{ error }}</span>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-between pt-4" style="border-top:1px solid #f1f1f1">
                        <router-link :to="{name: 'login'}">Already have an account?</router-link>
                        <button class="btn btn-danger" v-if="auth.loading"><i class="fas fa-spinner fa-spin"></i> Loading....</button>
                        <button class="btn btn-danger" @click.prevent="submit" v-else>Register</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>


<style scoped>
     .register-card{
        width: 600px;
        border-top: 3px solid #CA0F20;
        border-radius: 8px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        padding: 20px;
        margin: 100px 0;
     }
     .register-title h2{
        font-weight: 900;
        border-bottom: 1px solid #f1f1f1;
        padding-bottom: 20px;
     }
     ::placeholder{
        color: #a8a8a8;
     }

</style>