import { defineStore } from 'pinia';
import axiosInstance from '@/service/axiosService';

export const useHomeSlider = defineStore("homeSlider", {
    state:() => ({
        sliders : [],
        loading : false,
     }),

     getters:{},

     actions:{
        async getSliders(){
            this.loading = true;
            try {
                const res = await axiosInstance.get('/sliders');
                if(res.status === 200){
                    this.sliders = res.data?.result
                    return res.data;
                }
            } catch (error) {
                console.log(error);
            }finally{
                this.loading = false;
            }
        },
     },

})
