import { defineStore } from 'pinia';
import axiosInstance from '@/service/axiosService';

export const useServices = defineStore("services", {
    state:() => ({
        services : {},
        loading  : false,
     }),

     getters:{},

     actions:{

        async getServices(page, paginateSize, title){
            this.loading = true;
            try {
                const res = await axiosInstance.get('/services', {
                    params:{
                        page         : page,
                        paginate_size: paginateSize,
                        title        : title,
                    }
                });
                if(res.data?.success){
                    this.services = res.data?.result
                    return res.data
                }
            } catch (error) {
                if(error.response?.data){
                    return error.response?.data?.errors
                }
            }finally{
                this.loading = false;
            }
        },

        async getSingleService(serviceID){
            try {
                const res = await axiosInstance.get(`/services/${serviceID}`);
                if(res.data?.success){
                    return res.data;
                }
            } catch (error) {
                if(error.response?.data){
                    return error.response?.data;
                }
            }
        },

        async submitOrder(data){
            this.loading = true;
            try {
                const res = await axiosInstance.post('/booking-services', data);
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

     },

})
