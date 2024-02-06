<script setup>
import { useThemeSetting, useBlogPosts } from '@/stores';
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';

const blog         = useBlogPosts();
const themeSetting = useThemeSetting();
const route        = useRoute();
const blogDetails  = ref({});

const getSingleBlogData = async() =>{
    const res = await blog.getSingleBlogData(route.params.id);
    if(res.success){
        console.log(res);
        blogDetails.value = res.result
    }
}

onMounted(() => {
    getSingleBlogData();
})
</script>

<template>
    <div>
        <!-- <div class="container my-4"> -->
        <div class="container my-4">
            <div class="blog-single-banner">
                <div :class="{'white' : themeSetting.isDarkMode == 'dark'}">
                    <img :src="blogDetails.image" alt="">
                    <h2>{{ blogDetails.title }}</h2>
                     <p style="color:rgb(133, 133, 133);"><b class="text-dark">Tags: </b> <span v-for="(tag, index2) in blogDetails?.tags" :key="index2">{{ tag.name }}, </span></p>
                     <p style="color:rgb(133, 133, 133);" v-if="blogDetails?.category"><b class="text-dark">Category: </b> <span>{{ blogDetails.category }}, </span></p>

                     <p v-html="blogDetails.description"></p>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.blog-single-banner img{
    max-width: 100%;
    width: 100%;
}
.blog-single-banner h2{
    font-weight: 900;
    margin-top: 10px;
}
</style>