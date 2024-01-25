<script setup>
import { useApplication, useNotification } from '@/stores'
import { ref, onMounted } from 'vue';

const notification = useNotification();
const application  = useApplication();
const imagePreview = ref();
const jobCategory  = ref();
const countries    = ref();
const isSubmitted  = ref(false);
const errors       = ref('');

const image          = ref();
const day            = ref(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' , 'Sunday']);
const early          = ref([]);
const late           = ref([]);
const night          = ref([]);
const unavailable    = ref([]);
const designationId  = ref('');
const countryId      = ref('');
const cityId         = ref('');
const firstName      = ref('');
const middleName     = ref('');
const lastName       = ref('');
const dateOfBirth    = ref('');
const email          = ref('');
const phoneNumber    = ref('');
const address        = ref('');
const addressLine_1  = ref('');
const addressLine_2  = ref('');
const nINumber       = ref('');
const passportType   = ref('');
const passportNumber = ref('');
const kinFirstName   = ref('');
const kinMiddleName  = ref('');
const kinLastName    = ref('');
const kinPhoneNumber = ref('');
const cv             = ref('');
const passport       = ref('');
const referenceName  = ref('');
const zipCode        = ref('');

const getDesignation = async() =>{
    const res = await application.getDesignation();
    if(res?.success){
        jobCategory.value = res.result;
    }
}

const getCountries = async() =>{
    const res = await application.getCountries();
    if(res?.success){
        countries.value = res.result;
    }
}

const handleFileChange = (e) => {
  image.value = e.target.files[0];
  let reader  = new FileReader();
  reader.addEventListener("load", function(){
    imagePreview.value = reader.result;
  }.bind(this), false);
  if(image.value){
    if(/\.(jpe?g|png|gif)$/i.test(image.value.name)){
      reader.readAsDataURL(image.value)
    }
  }
}
const handleFileCV = (e) => {
  cv.value = e.target.files[0];
  let reader  = new FileReader();
  reader.addEventListener("load", function(){
  }.bind(this), false);
  if(image.value){
    if(/\.(jpe?g|png|gif)$/i.test(image.value.name)){
      reader.readAsDataURL(image.value)
    }
  }
}
const handleFilePassport = (e) => {
  passport.value = e.target.files[0];
  let reader  = new FileReader();
  reader.addEventListener("load", function(){
  }.bind(this), false);
  if(image.value){
    if(/\.(jpe?g|png|gif)$/i.test(image.value.name)){
      reader.readAsDataURL(image.value)
    }
  }
}

const submit = async() =>{
    const formData = new FormData();
    formData.append('country_id', countryId.value);
    formData.append('designation_id', designationId.value);
    formData.append('city_id', cityId.value);
    formData.append('first_name', firstName.value);
    formData.append('middle_name', middleName.value);
    formData.append('middle_name', middleName.value);
    formData.append('last_name', lastName.value);
    formData.append('date_of_birth', dateOfBirth.value);
    formData.append('email', email.value);
    formData.append('phone_number', phoneNumber.value);
    formData.append('address', address.value);
    formData.append('address_line_1', addressLine_1.value);
    formData.append('address_line_2', addressLine_2.value);
    formData.append('nid_number', nINumber.value);
    formData.append('passport_type', passportType.value);
    formData.append('passport_number', passportNumber.value);
    formData.append('kin_middle_name', kinMiddleName.value);
    formData.append('kin_first_name', kinFirstName.value);
    formData.append('kin_last_name', kinLastName.value);
    formData.append('kin_phone_number', kinPhoneNumber.value);
    formData.append('image', image.value);
    formData.append('cv', cv.value);
    formData.append('passport', passport.value);
    formData.append('reference_name', referenceName.value);
    formData.append('post_code', zipCode.value);

    let a= 0;
    for(const dayName of day.value){
        formData.append(`schedules[${a++}][day]`, dayName);
    }

    let b = 0;
    for(const earlyValue of early.value){
        formData.append(`schedules[${b++}][early]`, earlyValue);
    }
    
    let c = 0;
    for(const lateValue of late.value){
        formData.append(`schedules[${c++}][late]`, lateValue);
    }
    
    let d = 0;
    for(const nightValue of night.value){
        formData.append(`schedules[${d++}][night]`, nightValue);
    }
    
    let e = 0;
    for(const unavailableValue of unavailable.value){
        formData.append(`schedules[${e++}][unavailable]`, unavailableValue);
    }

    const res = await application.insert(formData);
    if(res?.success){
        notification.Success("Application Successfully Submitted");
        isSubmitted.value = true;
    }else{
        errors.value = res?.errors;
    }

}

onMounted(() => {
    getDesignation();
    getCountries();
})
</script>

<template>
    <div>
        <div class="page-single-banner" style="background-image: url('http://localhost:5173/src/assets/images/banner/banner3.jpg');">
            <div class="text-center" style="position:relative;z-index:9;">
                <img src="@/assets/images/light-logo.png" width="100" alt="">
                <h1 class="white">Apply For Job</h1>
            </div>
        </div>
        <div class="container py-4">
            <div class="card">
                <div class="card-header bg-secondary text-light">
                    <h4>Application Form</h4>
                </div>
                <div class="card-body" v-if="isSubmitted">
                    <div class="d-flex justify-content-center align-items-center">
                        <p class="submitted-ms">Your Application Successfully Submitted</p>
                    </div>
                </div>
                <div class="card-body" v-if="!isSubmitted">
                    <div>
                        <div class="form-group">
                            <div class="d-flex justify-content-between align-items-end">
                                <div>
                                    <label for="jobCategory">Select Job Category <span class="text-danger">*</span></label>
                                    <select id="jobCategory" class="form-control" v-model="designationId">
                                        <option value="">Select One</option>
                                        <option :value="designation.id" v-for="(designation, index) in jobCategory?.data" :key="index">{{ designation.name }}</option>
                                    </select>
                                    <span v-if="errors">
                                        <span class="text-danger" v-for="(error, index) in errors?.designation_id" :key="index">{{ error }}</span>
                                    </span>
                                </div>
                                <div>
                                    <div class="application-img" style="position:relative;">
                                        <span v-if="errors">
                                            <span class="text-danger" v-for="(error, index) in errors?.image" :key="index">{{ error }}</span>
                                        </span>
                                        <div v-if="!imagePreview" class="d-flex justify-content-center" style="width:100%;height:100%;">
                                            <div>Upload Photo</div>
                                        </div>
                                        <img :src="imagePreview " alt="" v-else>
                                        <div class="upload-btn">
                                            <div class="" style="position:relative;">
                                                <input type="file" class="form-control" @change="handleFileChange">
                                                <button class="btn btn-danger"><i class="fa-solid fa-cloud-arrow-up"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="availability" >Availability<span class="text-danger">*</span></label>
                            <table class="table table-striped availability">
                                <tbody>
                                    <tr>
                                        <th>Day</th>
                                        <th>Early</th>
                                        <th>Late</th>
                                        <th>Night</th>
                                        <th>Unavailable</th>
                                    </tr>
                                    <tr>
                                        <td>{{ day[0] }}</td>
                                        <td><input type="checkbox" v-model="early[0]"></td>
                                        <td><input type="checkbox" v-model="late[0]"></td>
                                        <td><input type="checkbox" v-model="night[0]"></td>
                                        <td><input type="checkbox" v-model="unavailable[0]"></td>
                                    </tr>
                                    <tr>
                                        <td>{{ day[1] }}</td>
                                        <td><input type="checkbox" v-model="early[1]"></td>
                                        <td><input type="checkbox" v-model="late[1]"></td>
                                        <td><input type="checkbox" v-model="night[1]"></td>
                                        <td><input type="checkbox" v-model="unavailable[1]"></td>
                                    </tr>
                                    <tr>
                                        <td>{{ day[2] }}</td>
                                        <td><input type="checkbox" v-model="early[2]"></td>
                                        <td><input type="checkbox" v-model="late[2]"></td>
                                        <td><input type="checkbox" v-model="night[2]"></td>
                                        <td><input type="checkbox" v-model="unavailable[2]"></td>
                                    </tr>
                                    <tr>
                                        <td>{{ day[3] }}</td>
                                        <td><input type="checkbox" v-model="early[3]"></td>
                                        <td><input type="checkbox" v-model="late[3]"></td>
                                        <td><input type="checkbox" v-model="night[3]"></td>
                                        <td><input type="checkbox" v-model="unavailable[3]"></td>
                                    </tr>
                                    <tr>
                                        <td>{{ day[4] }}</td>
                                        <td><input type="checkbox" v-model="early[4]"></td>
                                        <td><input type="checkbox" v-model="late[4]"></td>
                                        <td><input type="checkbox" v-model="night[4]"></td>
                                        <td><input type="checkbox" v-model="unavailable[4]"></td>
                                    </tr>
                                    <tr>
                                        <td>{{ day[5] }}</td>
                                        <td><input type="checkbox" v-model="early[5]"></td>
                                        <td><input type="checkbox" v-model="late[5]"></td>
                                        <td><input type="checkbox" v-model="night[5]"></td>
                                        <td><input type="checkbox" v-model="unavailable[5]"></td>
                                    </tr>
                                    <tr>
                                        <td>{{ day[6] }}</td>
                                        <td><input type="checkbox" v-model="early[6]"></td>
                                        <td><input type="checkbox" v-model="late[6]"></td>
                                        <td><input type="checkbox" v-model="night[6]"></td>
                                        <td><input type="checkbox" v-model="unavailable[6]"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <h4>Personal Details</h4>
                            <hr>
                            <div class="row">
                                <div class="col-md-12">
                                    <label for="name">Name <span class="text-danger">*</span></label>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <input type="text" class="form-control" placeholder="First Name" v-model="firstName">
                                        </div>
                                        <div class="col-md-4">
                                            <input type="text" class="form-control" placeholder="Middle Name" v-model="middleName">
                                        </div>
                                        <div class="col-md-4">
                                            <input type="text" class="form-control" placeholder="Last Name" v-model="lastName">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mt-4">
                                    <label for="name">Email Address <span class="text-danger">*</span></label>
                                    <input type="email" class="form-control" placeholder="Enter Email" v-model="email">
                                    <span v-if="errors">
                                        <span class="text-danger" v-for="(error, index) in errors?.email" :key="index">{{ error }}</span>
                                    </span>
                                </div>
                                <div class="col-md-4 mt-4">
                                    <label for="name">Phone <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter Phone Number" v-model="phoneNumber">
                                    <span v-if="errors">
                                        <span class="text-danger" v-for="(error, index) in errors?.phone_number" :key="index">{{ error }}</span>
                                    </span>
                                </div>
                                <div class="col-md-4 mt-4">
                                    <label for="name">Reference Name <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter Reference" v-model="referenceName">
                                    <span v-if="errors">
                                        <span class="text-danger" v-for="(error, index) in errors?.reference_name" :key="index">{{ error }}</span>
                                    </span>
                                </div>
                                <div class="col-md-4 mt-4">
                                    <label for="name">Zip Code <span class="text-danger">*</span></label>
                                    <input type="number" class="form-control" placeholder="Enter Zip Code" v-model="zipCode">
                                    <span v-if="errors">
                                        <span class="text-danger" v-for="(error, index) in errors?.post_code" :key="index">{{ error }}</span>
                                    </span>
                                </div>
                                <div class="col-md-4 mt-4">
                                    <label for="name">City <span class="text-danger">*</span></label>
                                    <select id="" class="form-control" v-model="cityId">
                                        <option value="">Select One</option>
                                        <option value="1">Dhaka</option>
                                    </select>
                                    <span v-if="errors">
                                        <span class="text-danger" v-for="(error, index) in errors?.city_id" :key="index">{{ error }}</span>
                                    </span>
                                </div>
                                <div class="col-md-12 mt-4">
                                    <label for="name">Address Field <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter Your Address" v-model="address">
                                    <span v-if="errors">
                                        <span class="text-danger" v-for="(error, index) in errors?.address" :key="index">{{ error }}</span>
                                    </span>
                                </div>
                                <div class="col-md-12 mt-4">
                                    <label for="name">Address Line 1 <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter Your Address Line 1" v-model="addressLine_1">
                                    <span v-if="errors">
                                        <span class="text-danger" v-for="(error, index) in errors?.address_line_1" :key="index">{{ error }}</span>
                                    </span>
                                </div>
                                <div class="col-md-12 mt-4">
                                    <label for="name">Address Line 2</label>
                                    <input type="text" class="form-control" placeholder="Enter Your Address Line 2" v-model="addressLine_2">
                                    <span v-if="errors">
                                        <span class="text-danger" v-for="(error, index) in errors?.address_line_2" :key="index">{{ error }}</span>
                                    </span>
                                </div>
                                <div class="col-md-4 mt-4">
                                    <label for="name">Country <span class="text-danger">*</span></label>
                                    <select id="" class="form-control" v-model="countryId">
                                        <option value="">Select One</option>
                                        <option :value="country.id" v-for="(country, index) in countries?.data" :key="index">{{ country.name }}</option>
                                    </select>
                                    <span v-if="errors">
                                        <span class="text-danger" v-for="(error, index) in errors?.country_id" :key="index">{{ error }}</span>
                                    </span>
                                </div>
                                <div class="col-md-4 mt-4">
                                    <label for="name">Date Of Birth <span class="text-danger">*</span></label>
                                    <input type="date" class="form-control" v-model="dateOfBirth">
                                    <span v-if="errors">
                                        <span class="text-danger" v-for="(error, index) in errors?.date_of_birth" :key="index">{{ error }}</span>
                                    </span>
                                </div>
                                <div class="col-md-4 mt-4">
                                    <label for="name">N.I Number <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter Insurance Number" v-model="nINumber">
                                    <span v-if="errors">
                                        <span class="text-danger" v-for="(error, index) in errors?.nid_number" :key="index">{{ error }}</span>
                                    </span>
                                </div>
                                <div class="col-md-4 mt-4">
                                    <label for="name">Passport Type <span class="text-danger">*</span></label>
                                    <select id="" class="form-control" v-model="passportType">
                                        <option value="">Select One</option>
                                        <option value="ordinary">Ordinary</option>
                                    </select>
                                    <span v-if="errors">
                                        <span class="text-danger" v-for="(error, index) in errors?.passport_type" :key="index">{{ error }}</span>
                                    </span>
                                </div>
                                <div class="col-md-4 mt-4">
                                    <label for="name">Upload Passport</label>
                                    <input type="file" class="form-control" @change="handleFilePassport">
                                    <span v-if="errors">
                                        <span class="text-danger" v-for="(error, index) in errors?.passport" :key="index">{{ error }}</span>
                                    </span>
                                </div>
                                <div class="col-md-4 mt-4">
                                    <label for="name">Upload CV</label>
                                    <input type="file" class="form-control" @change="handleFileCV">
                                    <span v-if="errors">
                                        <span class="text-danger" v-for="(error, index) in errors?.cv" :key="index">{{ error }}</span>
                                    </span>
                                </div>
                                <div class="col-md-4 mt-4">
                                    <label for="name">Upload BRB</label>
                                    <input type="file" class="form-control">
                                </div>
                                <div class="col-md-4 mt-4">
                                    <label for="name">Upload your UKVI share code <span class="text-danger">*</span></label>
                                    <input type="file" class="form-control">
                                </div>
                                <div class="col-md-4 mt-4">
                                    <label for="name">Passport Number <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter Passport Number" v-model="passportNumber">
                                    <span v-if="errors">
                                        <span class="text-danger" v-for="(error, index) in errors?.passport_number" :key="index">{{ error }}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4">
                            <h4>Next Of Kin</h4>
                            <hr>
                            <div class="row">
                                <div class="col-md-12 mb-4">
                                    <label for="name">Name <span class="text-danger">*</span></label>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <input type="text" class="form-control" placeholder="First Name" v-model="kinFirstName">
                                            <span v-if="errors">
                                                <span class="text-danger" v-for="(error, index) in errors?.kin_first_name" :key="index">{{ error }}</span>
                                            </span>
                                        </div>
                                        <div class="col-md-4">
                                            <input type="text" class="form-control" placeholder="Middle Name" v-model="kinMiddleName">
                                            <span v-if="errors">
                                                <span class="text-danger" v-for="(error, index) in errors?.kin_middle_name" :key="index">{{ error }}</span>
                                            </span>
                                        </div>
                                        <div class="col-md-4">
                                            <input type="text" class="form-control" placeholder="Last Name" v-model="kinLastName">
                                            <span v-if="errors">
                                                <span class="text-danger" v-for="(error, index) in errors?.kin_last_name" :key="index">{{ error }}</span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label for="phone">Phone <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter Phone Number" v-model="kinPhoneNumber">
                                    <span v-if="errors">
                                        <span class="text-danger" v-for="(error, index) in errors?.kin_phone_number" :key="index">{{ error }}</span>
                                    </span>
                                </div>
                                <div class="col-md-6">
                                    <label for="phone">Where did you hear about us <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="please provide the reference Name ( person /company)">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer text-right" v-if="!isSubmitted">
                    <button class="btn btn-danger" v-if="application.loading"><i class="fas fa-spinner fa-spin"></i> Loading....</button>
                    <button class="btn btn-danger" @click="submit" v-else>Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.application-img{
    width: 180px;
    height: 200px;
    border: 1px solid #f1f1f1;
    border-radius: 5px;
    overflow: hidden;
}
.application-img img{
    border: none;
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
    min-height: 100%;
}
.upload-btn{
    position: absolute;
    bottom: 0;
    right: 0;
}
.upload-btn input{
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
}
.availability tr td,
.availability tr th{
    padding: 5px !important;
}
.submitted-ms{
    border: 2px solid rgba(0, 128, 0, 0.404);
    padding: 10px 20px;
    font-size: 24px;
    border-radius: 15px;
    color: green;
    background-color: rgba(0, 128, 0, 0.199);
}
</style>