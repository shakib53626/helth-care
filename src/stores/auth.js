import { defineStore } from 'pinia';
import axiosInstance from '@/service/axiosService';
import { useToken } from '@/stores'

export const useAuth = defineStore("auth", {
    state:() => ({
        user : {},
        isLoggedIn : false,
        logoutLoading : false,
     }),

     persist:['user', 'isLoggedIn'],

     getters:{
        getUser:(state) => {
            return state.user?.data;
        },
        getAuthStatus: (state) => {
            return state.isLoggedIn;
        }
     },

     actions:{
        async login(data){
            const token = useToken();
            try {
                const res = await axiosInstance.post('/admin/login', data);
                if(res.status === 200){
                    this.user = res.data?.result?.user
                    token.setToken(res.data?.result?.token)
                    this.isLoggedIn = true;

                    return res.data?.result;
                }else{
                    return res.data?.message;
                }
            } catch (error) {
                if(error.response.data){
                    throw(error.response.data.errors)
                }
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
