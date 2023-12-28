import { defineStore } from 'pinia';
import axiosInstance from '@/service/axiosService';

export const useServiceTeam = defineStore("serviceTeam", {
    state:() => ({
        serviceTeams : [],
        loading : false,
     }),

     getters:{},

     actions:{
        async getServiceTeams(){
            this.loading = true;
            try {
                const res = await axiosInstance.get('/teams');
                if(res.status === 200){
                    this.serviceTeams = res.data?.result
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
