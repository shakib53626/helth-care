
<script setup>
import { useThemeSetting, useAuth, useNotification } from '@/stores';
import { ref } from 'vue';
import router from '@/router';

const themeSetting = useThemeSetting();

import { Form, Field } from 'vee-validate';
import * as yup from 'yup';

const notification = useNotification();
const auth         = useAuth();
const showPassword = ref(false);

const schema = yup.object({
    email: yup.string().required("Email field is required").min(11),
    password    : yup.string().required(),
});

const submit = async(values, {setErrors}) =>{
    let res = await auth.login(values);
    if(res.success){
        router.push({name:'index'});
        notification.Success("Login Success")
    }else{
        setErrors(res);
    }
}

const isHide = async() =>{
    showPassword.value = !showPassword.value
}

</script>

<template>
    <div class="container">
        <div class="d-flex justify-content-center align-items-center">
            <div class="login-card">
                <div class="login-title text-center mb-4">
                    <h2 :class="{'white' : themeSetting.isDarkMode == 'dark'}">User Login</h2>
                </div>
                <Form @submit="submit" :validation-schema="schema" v-slot="{errors, isSubmitting}">
                    <div class="form-group">
                        <label for="phone" :class="{'white' : themeSetting.isDarkMode == 'dark'}">Email</label>
                        <Field 
                            type="phone" 
                            id="phone" 
                            name="email" 
                            class="form-control"
                            :class="{'is-invalid' : errors.email}" 
                            placeholder="Enter Email"
                        />
                        <span class="text-danger">{{errors.email}}</span>
                    </div>
                    <div class="form-group" style="position:relative;">
                        <label for="password" :class="{'white' : themeSetting.isDarkMode == 'dark'}">Password</label>
                        <Field 
                            :type="showPassword ? 'text' : 'password'" 
                            id="password" 
                            class="form-control"
                            :class="{'is-invalid' : errors.password}"  
                            placeholder="Enter password" 
                            name="password"    
                        />
                        <span class="text-danger">{{errors.password}}</span>
                        <i  @click.prevent="isHide"
                            :class="{
                                'fas fa-eye eye_icon': !showPassword,
                                'fas fa-eye-slash eye_icon': showPassword,
                        }">
                        </i>
                    </div>
                    <div class="d-flex justify-content-between">
                        <div>
                            <input type="checkbox" id="remember">
                            <label for="remember" class="ml-2" :class="{'white' : themeSetting.isDarkMode == 'dark'}">Remember Me</label><br>
                        </div>
                        <button class="btn btn-danger" v-if="isSubmitting"><i class="fas fa-spinner fa-spin"></i> Loading...</button>
                        <button class="btn btn-danger" type="submit" v-else>Login</button>
                    </div>
                    <router-link :to="{name : 'register'}">I don't have any account?</router-link>
                </Form>
            </div>
        </div>
    </div>
</template>


<style scoped>
     .login-card{
        width: 350px;
        border-top: 3px solid #CA0F20;
        border-radius: 8px;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        padding: 20px;
        margin: 150px 0;
     }
     .login-title h2{
        font-weight: 900;
        border-bottom: 1px solid #f1f1f1;
        padding-bottom: 20px;
     }
     ::placeholder{
        color: #a8a8a8;
     }

     .eye_icon{
        position: absolute;
        top: 44px;
        right: 30px;
        color: #a8a8a8;
        cursor: pointer;
     }
</style>