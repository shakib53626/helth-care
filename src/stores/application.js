import { defineStore } from 'pinia';
import axiosInstance from '@/service/axiosService';

export const useApplication = defineStore("application", {
    state:() => ({
        loading      : false,
     }),

     getters:{},

     actions:{
        async getDesignation(){
            try {
                const res = await axiosInstance.get('/designations');
                if(res.data?.success){
                    return res.data;
                }
            } catch (error) {
                console.log(error);
            }
        },

        async getCountries(){
            try {
                const res = await axiosInstance.get('/countries');
                if(res.data?.success){
                    return res.data;
                }
            } catch (error) {
                console.log(error);
            }
        },

        async insert(formData){
            console.log(formData);
            this.loading = true;
            try {
                const res = await axiosInstance.post('/applications', formData);
                if(res.data?.success){
                    return res.data;
                }
            } catch (error) {
                if(error.response?.data){
                    return error.response?.data;
                }
            }finally{
                this.loading = false;
            }
        }
     }

})
