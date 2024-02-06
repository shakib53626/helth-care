
<script setup>
import { useBlogPosts } from '@/stores'
import { ref, onMounted } from 'vue'

const blog     = useBlogPosts();
const blogData = ref();

const getBlogPosts = async() =>{
    const res  = await blog.getBlogPosts();
    if(res.success){
        blogData.value = res.result;
    }
}

const truncateText = (text, limit) => {
    const words = text.split(' ');
    if (words.length > limit) {
        return words.slice(0, limit).join(' ') + '...';
    } else {
        return text;
    }
}

onMounted(() => {
    getBlogPosts();
})
</script>


<template>
    <div>
        <div class="page-single-banner" style="background-image: url('http://localhost:5173/src/assets/images/banner/banner3.jpg');">
            <div class="text-center" style="position:relative;z-index:9;">
                <img src="@/assets/images/light-logo.png" width="100" alt="">
                <h1 class="white">Blog</h1>
            </div>
        </div>
        <section style="padding: 100px 0">
            <div class="container">
                <div class="row">
                    <div class="col-md-9">
                        <div class="row">
                            <div class="col-md-4 mb-4" v-for="(post, index) in blogData?.data" :key="index">
                                <div class="card blog-card">
                                    <div class="card-body">
                                        <img :src="post.image" alt="">
                                        <h4 class="mt-4">{{ post.title }}</h4>
                                        <p style="color:rgb(133, 133, 133);"><b class="text-dark">Tags: </b> <span v-for="(tag, index2) in post.tags" :key="index2">{{ tag.name }}, </span></p>
                                        <router-link :to="{name: 'blog-details', params: { id : post.id}}">Read More ......</router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card p-1">
                            <div class="card-body p-1">
                                <h5>Latest Blog Posts</h5>
                                <ul class="p-0 m-0 latest-blog">
                                    <li class="mb-2" v-for="(post, index) in blogData?.data" :key="index">
                                        <a href="">
                                            <span class="d-inline-block">
                                                <img :src="post.image" alt="">
                                            </span>
                                            <span style="padding-left:6px;line-height:1;">
                                                {{ truncateText(post.title, 7) }}
                                            </span>
                                        </a>
                                    </li>
                                     
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<style scoped>
.blog-card img{
    max-width: 100%;
}
.blog-card a:hover{
    color: #CA0F20;
}
.latest-blog li{
    list-style: none;
}
.latest-blog li a{
    border: 1px solid #dadada;
    display: grid;
    grid-template-columns: 30% 60%;
    height: 54px;
}
.latest-blog li a img{
    width: 100%;
    height: 52px;
}


</style>