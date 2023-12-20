<script setup>
import { useThemeSetting } from '@/stores';

const themeSetting = useThemeSetting();
</script>
<template>
    <div>
        <div class="footer-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-4 text-light">
                        <div class="text-center">
                            <a href="/"><img src="@/assets/images/light-logo.png" width="120" alt="logo" class="logo"></a>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex magni dolore dignissimos sit ratione exercitationem aspernatur dolorum incidunt esse eaque.</p>
                    </div>
                    <div class="col-md-2 white mt-4">
                        <span style="font-size:22px;">Quick Link</span>
                        <ul>
                            <li><a href="" class="white">Home</a></li>
                            <li><a href="" class="white">Our Services</a></li>
                            <li><a href="" class="white">About Us</a></li>
                            <li><a href="" class="white">Contact Us</a></li>
                            <li><a href="" class="white">Our Mission</a></li>
                        </ul>
                    </div>
                    <div class="col-md-2 white mt-4">
                        <span style="font-size:22px;">Social Link</span>
                        <ul>
                            <li><a href="" class="white">Facebook</a></li>
                            <li><a href="" class="white">Twitter</a></li>
                            <li><a href="" class="white">WhatsApp</a></li>
                            <li><a href="" class="white">Linkedin</a></li>
                            <li><a href="" class="white">Youtube</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 white mt-4">
                        <span style="font-size:22px;">Let's Connect</span>
                        <p>
                            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100064321142836&tabs=timeline&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="340" height="130" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                        </p>
                        <div>
                            <div class="social-icon">
                                <i class="fa-brands fa-facebook-f" style="color:#0775E2;"></i>
                                <i class="fa-brands fa-twitter" style="color:#00B2E5;"></i>
                                <i class="fa-brands fa-youtube" style="color:#F70000;"></i>
                                <i class="fa-brands fa-whatsapp" style="color:#40A84D;"></i>
                                <i class="fa-brands fa-linkedin-in" style="color:#0A63BC;"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright text-center" :class="{'white' : themeSetting.isDarkMode=='dark'}">
            <p>© 2023 HomeStay Care | Developed By <a href="https://servicekey.io/">Service Key</a>.</p>
        </div>
    </div>
</template>


<style scoped>
.footer-area{
    background-color: #CA0F20;
    padding: 50px;
}
.footer-area ul li{
    transition: 0.5s;
}
.footer-area ul li:hover{
    transform: translateX(10px);
    transition: 0.5s;
    color: yellow;
}
.footer-area ul li:hover .footer-area ul li a{
    color: yellow;
}

.social-icon i{
    background-color: #fff;
    width: 35px;
    height: 35px;
    text-align: center;
    line-height: 35px;
    border-radius: 4px;
    margin-left: 10px;
}
.copyright{
    padding: 15px 0;
}
.copyright p{
    margin-bottom: 0;
}


</style>