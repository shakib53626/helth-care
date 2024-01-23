<script setup>
import { ref } from 'vue';

const image        = ref();
const imagePreview = ref();

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
                <div class="card-body">
                    <div>
                        <div class="form-group">
                            <div class="d-flex justify-content-between align-items-end">
                                <div>
                                    <label for="jobCategory">Select Job Category <span class="text-danger">*</span></label>
                                    <select id="jobCategory" class="form-control">
                                        <option value="">Select One</option>
                                        <option value="carpenter">Carpenter</option>
                                        <option value="ground_worker">Ground Worker</option>
                                        <option value="construction_planner">Construction Planner</option>
                                        <option value="construction_planner">Construction Cleaner</option>
                                        <option value="site_worker">Site Worker</option>
                                        <option value="site_supervisor">Site Supervisor</option>
                                    </select>
                                </div>
                                <div>
                                    <div class="application-img" style="position:relative;">
                                        <div v-if="!imagePreview" class="d-flex justify-content-center align-items-center" style="width:100%;height:100%;">
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
                            <label for="availability" >Availability <span class="text-danger">*</span></label>
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
                                        <td>Monday</td>
                                        <td><input type="checkbox"></td>
                                        <td><input type="checkbox"></td>
                                        <td><input type="checkbox"></td>
                                        <td><input type="checkbox"></td>
                                    </tr>
                                    <tr>
                                        <td>Tuesday</td>
                                        <td><input type="checkbox"></td>
                                        <td><input type="checkbox"></td>
                                        <td><input type="checkbox"></td>
                                        <td><input type="checkbox"></td>
                                    </tr>
                                    <tr>
                                        <td>Wednesday</td>
                                        <td><input type="checkbox"></td>
                                        <td><input type="checkbox"></td>
                                        <td><input type="checkbox"></td>
                                        <td><input type="checkbox"></td>
                                    </tr>
                                    <tr>
                                        <td>Thursday</td>
                                        <td><input type="checkbox"></td>
                                        <td><input type="checkbox"></td>
                                        <td><input type="checkbox"></td>
                                        <td><input type="checkbox"></td>
                                    </tr>
                                    <tr>
                                        <td>Friday</td>
                                        <td><input type="checkbox"></td>
                                        <td><input type="checkbox"></td>
                                        <td><input type="checkbox"></td>
                                        <td><input type="checkbox"></td>
                                    </tr>
                                    <tr>
                                        <td>Saturday</td>
                                        <td><input type="checkbox"></td>
                                        <td><input type="checkbox"></td>
                                        <td><input type="checkbox"></td>
                                        <td><input type="checkbox"></td>
                                    </tr>
                                    <tr>
                                        <td>Sunday</td>
                                        <td><input type="checkbox"></td>
                                        <td><input type="checkbox"></td>
                                        <td><input type="checkbox"></td>
                                        <td><input type="checkbox"></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <h4>Personal Details</h4>
                            <hr>
                            <div class="row">
                                <div class="col-md-12 mb-4">
                                    <label for="name">Name <span class="text-danger">*</span></label>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <input type="text" class="form-control" placeholder="First Name">
                                        </div>
                                        <div class="col-md-4">
                                            <input type="text" class="form-control" placeholder="Middle Name">
                                        </div>
                                        <div class="col-md-4">
                                            <input type="text" class="form-control" placeholder="Last Name">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 mt-4">
                                    <label for="name">Email Address <span class="text-danger">*</span></label>
                                    <input type="email" class="form-control" placeholder="Enter Email">
                                </div>
                                <div class="col-md-4 mt-4">
                                    <label for="name">Phone <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter Phone">
                                </div>
                                <div class="col-md-4 mt-4">
                                    <label for="name">City <span class="text-danger">*</span></label>
                                    <select id="" class="form-control">
                                        <option value="">Select One</option>
                                    </select>
                                </div>
                                <div class="col-md-12 mt-4">
                                    <label for="name">Address Field <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter Your Address">
                                </div>
                                <div class="col-md-12 mt-4">
                                    <label for="name">Address Line 1 <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter Your Address Line 1">
                                </div>
                                <div class="col-md-12 mt-4">
                                    <label for="name">Address Line 2</label>
                                    <input type="text" class="form-control" placeholder="Enter Your Address Line 2">
                                </div>
                                <div class="col-md-4 mt-4">
                                    <label for="name">Country <span class="text-danger">*</span></label>
                                    <select id="" class="form-control">
                                        <option value="">Select One</option>
                                    </select>
                                </div>
                                <div class="col-md-4 mt-4">
                                    <label for="name">Date Of Birth <span class="text-danger">*</span></label>
                                    <input type="date" class="form-control">
                                </div>
                                <div class="col-md-4 mt-4">
                                    <label for="name">N.I Number <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter Insurance Number">
                                </div>
                                <div class="col-md-4 mt-4">
                                    <label for="name">Passport Type <span class="text-danger">*</span></label>
                                    <select id="" class="form-control">
                                        <option value="">Select One</option>
                                    </select>
                                </div>
                                <div class="col-md-4 mt-4">
                                    <label for="name">Upload Passport</label>
                                    <input type="file" class="form-control">
                                </div>
                                <div class="col-md-4 mt-4">
                                    <label for="name">Upload CV</label>
                                    <input type="file" class="form-control">
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
                                    <input type="text" class="form-control" placeholder="Enter Passport Number">
                                </div>
                            </div>
                        </div>
                        <div class="mt-4">
                            <h4>Personal Details</h4>
                            <hr>
                            <div class="row">
                                <div class="col-md-12 mb-4">
                                    <label for="name">Name <span class="text-danger">*</span></label>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <input type="text" class="form-control" placeholder="First Name">
                                        </div>
                                        <div class="col-md-4">
                                            <input type="text" class="form-control" placeholder="Middle Name">
                                        </div>
                                        <div class="col-md-4">
                                            <input type="text" class="form-control" placeholder="Last Name">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <label for="phone">Phone <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="Enter Phone Number">
                                </div>
                                <div class="col-md-6">
                                    <label for="phone">Where did you hear about us <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" placeholder="please provide the reference Name ( person /company) ">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer text-right">
                    <button class="btn btn-danger">Submit</button>
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
</style>