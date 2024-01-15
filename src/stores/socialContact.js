import { defineStore } from 'pinia';
import axiosInstance from '@/service/axiosService';

export const useSocialContact = defineStore("socialContact", {
    state:() => ({
        
     }),

     getters:{},

     actions:{
        async getSocialContacts(){
            try {
                const res = await axiosInstance.get('/social-contacts');
                if(res.data?.success){
                    return res.data;
                }
            } catch (error) {
                console.log(error);
            }
        }
     },

})
