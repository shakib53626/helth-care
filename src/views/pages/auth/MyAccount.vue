<script setup>
import { useAuth, useNotification } from '@/stores'
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router       = useRouter();
const auth         = useAuth();
const notification = useNotification();

const isEditInformation = ref(true);
const isActive = ref('ma');

const name          = ref(auth.user?.name);
const email         = ref(auth.user?.email);
const phone         = ref(auth.user?.phone_number);
const profileImages = ref(auth.user?.image);
const country       = ref('');

const activeMenu = async(value) =>{
    isActive.value = value;
    isEditInformation.value = true;
}

const editProfileInfo = (info) =>{
    isEditInformation.value = info;
}

const logout = async() =>{
    const res = await auth.logout();
    if(res.status === 200){
        router.push({name:'login'});
        notification.Success('Logout Success');
    }
}

</script>

<template>
    <div class="container py-4">
        <div class="row">
            <div class="col-md-3 my-account-sidebar">
                <div class="card text-center profile-image mb-2">
                    <img src="@/assets/images/logo.png" alt="">
                    <h4>Supper Admin</h4>
                </div>
                <div class="card profile-nav">
                    <ul>
                        <li :class="{'active': isActive=='ma'}" @click="activeMenu('ma')"><i class="fa-solid fa-user"></i> My Profile</li>
                        <li :class="{'active': isActive=='booking' || isActive=='booking-details'}" @click="activeMenu('booking')"><i class="fa-regular fa-calendar-days"></i> My Booking</li>
                        <li :class="{'active': isActive=='changePassword'}" @click="activeMenu('changePassword')"><i class="fa-solid fa-key"></i> Change Password</li>
                        <li v-if="auth.logoutLoading"><a><i class="fa-solid fa-spinner fa-spin"></i> Loading....</a></li>
                        <li  @click="logout" v-else><i class="fa-solid fa-right-from-bracket"></i> Logout</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-9">
                <div v-if="isActive=='ma'">
                    <div class="d-flex justify-content-between">
                        <h3>Profile Information</h3>
                        <button class="btn btn-edit" @click="editProfileInfo('epi')"><i class="fa-solid fa-pen-to-square"></i> Edit</button>
                    </div>
                    <hr>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" v-model="name" class="form-control" :disabled="isEditInformation != 'epi'">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" v-model="email" class="form-control" :disabled="isEditInformation != 'epi'">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="phone">Phone</label>
                                <input type="text" v-model="phone" class="form-control" :disabled="isEditInformation != 'epi'">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="country">Country</label>
                                <input type="text" v-model="country" class="form-control" placeholder="Enter Country Name" :disabled="isEditInformation != 'epi'">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="state">State</label>
                                <input type="text" v-model="country" class="form-control" placeholder="Enter State Name" :disabled="isEditInformation != 'epi'">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="address">Address</label>
                                <input type="text" v-model="address" class="form-control" placeholder="Enter Address" :disabled="isEditInformation != 'epi'">
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="image">Profile Image</label>
                                <input type="file" class="form-control" :disabled="isEditInformation != 'epi'">
                            </div>
                        </div>
                    </div>
                    <div class="row" v-if="isEditInformation=='epi'">
                        <div class="col-md-12 d-flex justify-content-end">
                            <button class="btn btn-edit">Update</button>
                        </div>
                    </div>
                </div>
                <div v-if="isActive=='changePassword'">
                    <h3>Change Your Password</h3>
                    <hr>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="old_password">Old Password</label>
                                <input type="text" v-model="oldPassword" class="form-control" placeholder="Enter Old Password">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="new_password">New Password</label>
                                <input type="text" v-model="newPassword" class="form-control" placeholder="Enter New Password">
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="confirm_password">Confirm Password</label>
                                <input type="text" v-model="password_confirmation" class="form-control" placeholder="Re-Type Password">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12 d-flex justify-content-end">
                            <button class="btn btn-edit">Change Password</button>
                        </div>
                    </div>
                </div>
                <div v-if="isActive=='booking'">
                    <div class="d-flex justify-content-between">
                        <h3>Booking List</h3>
                    </div>
                    <hr>
                    <div>
                        <table class="table table-striped text-center">
                            <thead class="booking-table-head">
                                <tr>
                                    <th>SL</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td></td>
                                    <td>Shakibul Islam</td>
                                    <td>10/11/2024</td>
                                    <td>10/11/2024</td>
                                    <td>
                                        <a class="btn btn-info btn-sm" @click="activeMenu('booking-details')"><i class="fas fa-eye"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td></td>
                                    <td>Albab</td>
                                    <td>10/11/2024</td>
                                    <td>10/11/2024</td>
                                    <td>
                                        <a class="btn btn-info btn-sm" @click="activeMenu('booking-details')"><i class="fas fa-eye"></i></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td></td>
                                    <td>Tarikul Islam</td>
                                    <td>10/11/2024</td>
                                    <td>10/11/2024</td>
                                    <td>
                                        <a class="btn btn-info btn-sm" @click="activeMenu('booking-details')"><i class="fas fa-eye"></i></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div v-if="isActive=='booking-details'">
                    <div class="d-flex justify-content-between">
                        <h3>Booking Details</h3>
                    </div>
                    <hr>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.my-account-sidebar .profile-image{
    padding: 30px 50px;
    background-color: #eee;
}
.my-account-sidebar .profile-image img{
    border-radius: 50%;
    border: 4px solid #dadada;
}
.my-account-sidebar .card h4{
    font-weight: 700;
    color: #CA0F20;
}
.profile-nav{
    overflow: hidden;
}
.profile-nav ul{
    padding: 0;
    margin: 0;
}
.profile-nav ul li{
    list-style: none;
    padding: 5px 10px;
    width: 100%;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    color: #CA0F20;
    border-bottom: 1px solid #e2e2e2;
}
.profile-nav ul li:hover{
    background-color: #CA0F20;
    color: #fff;
}
.profile-nav ul li.active{
    background-color: #CA0F20;
    color: #fff;
}
.btn-edit{
    background-color: #CA0F20;
    color: #fff;
    box-shadow: 0 7px 14px 0 rgba(241,75,75,0.5);
}
.btn-edit:hover{
    box-shadow: none;
}
.booking-table-head tr{
    background-color: #CA0F20;
    color: #fff;
}
</style>