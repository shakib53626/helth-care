import { defineStore } from 'pinia';
import axiosInstance from '@/service/axiosService';
import { useToken } from '@/stores'

export const useAuth = defineStore("auth", {
    state:() => ({
        user         : {},
        loading      : false,
        logoutLoading: false,
     }),

     persist:['user'],

     getters:{
        getUser:(state) => {
            return state.user?.data;
        },
     },

     actions:{
        async login(data){
            const token = useToken();
            try {
                const res = await axiosInstance.post('/login', data);
                console.log(res);
                if(res.status === 200){
                    this.user = res.data?.result?.user;
                    token.setToken(res.data?.result?.token);

                    return res.data;
                }

            } catch (error) {
                if(error.response?.data){
                    return error.response?.data?.errors;
                }
            }
        },

        async register(formData){
            this.loading = true;
            try {
                const res = await axiosInstance.post('/registration', formData);
                if(res.status == 200){
                    return res.data;
                }
            } catch (error) {
                return error.response?.data;
            }finally{
                this.loading = false;
            }
        },

        async logout(){
            const token = useToken();
            this.logoutLoading = true;
            try {
                const res = await axiosInstance.post('/admin/logout');
                if(res.status === 200){
                    token.removeToken();
                    this.$reset();

                    return res;
                }
            } catch (error) {
                if(error.response){
                    throw error.response;
                }
            }finally{
                this.logoutLoading = false;
            }
        },
     },

})
