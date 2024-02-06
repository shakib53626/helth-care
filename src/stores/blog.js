import { defineStore } from 'pinia';
import axiosInstance from '@/service/axiosService';

export const useBlogPosts = defineStore("blogPosts", {
    state:() => ({
        loading : false,
     }),

     getters:{},

     actions:{
        async getBlogPosts(){
            this.loading = true;
            try {
                const res = await axiosInstance.get('/blog-posts');
                if(res.data?.success){
                    return res.data;
                }
            } catch (error) {
                console.log(error);
            }finally{
                this.loading = false;
            }
        },

        async getSingleBlogData(id){
            try {
                const res = await axiosInstance.get(`/blog-posts/${id}`);
                if(res.data?.success){
                    return res.data;
                }
            } catch (error) {
                console.log(error);
            }
        }
     },

})
