
<script setup>
import { useThemeSetting } from '@/stores';
const themeSetting = useThemeSetting();

</script>

<template>
    <div class="container">
        <div class="d-flex justify-content-center align-items-center">
            <div class="login-card">
                <div class="login-title text-center mb-4">
                    <h2 :class="{'white' : themeSetting.isDarkMode == 'dark'}">User Login</h2>
                </div>
                <form action="">
                    <div class="form-group">
                        <label for="email" :class="{'white' : themeSetting.isDarkMode == 'dark'}">Email</label>
                        <input type="email" id="email" class="form-control" placeholder="Enter Email">
                    </div>
                    <div class="form-group">
                        <label for="password" :class="{'white' : themeSetting.isDarkMode == 'dark'}">Password</label>
                        <input type="password" id="password" class="form-control" placeholder="Enter password">
                    </div>
                    <div class="d-flex justify-content-between">
                        <div>
                            <input type="checkbox" id="remember">
                            <label for="remember" class="ml-2">Remember Me</label><br>
                        </div>
                        <button class="btn btn-danger">Login</button>
                    </div>
                    <router-link :to="{name : 'register'}">I don't have any account?</router-link>
                </form>
            </div>
        </div>
    </div>
</template>


<style scoped>
     .login-card{
        width: 300px;
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

</style>