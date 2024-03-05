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
        
        async getCities(countryId){
            try {
                const res = await axiosInstance.get('/cities', {
                    params : {
                        country_id : countryId,
                    }
                });
                if(res.data?.success){
                    return res.data;
                }
                console.log(res);
            } catch (error) {
                console.log(error);
            }
        },

        async insert(formData){
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
