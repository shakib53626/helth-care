<script setup>
import { useThemeSetting } from '@/stores';

const themeSetting = useThemeSetting();
</script>

<template>
    <div>
        <!-- <div class="container my-4"> -->
        <div class="container mt-4">
            <div class="page-single-banner" style="background-image: url('http://localhost:5173/src/assets/images/banner/banner3.jpg');padding:100px 0;">
                <div class="text-center" style="position:relative;z-index:9;">
                    <h1 class="white">About Service</h1>
                    <h4 class="white">Domiciliary Care Services</h4>
                </div>
            </div>
        </div>
        <!-- </div> -->
        <div class="about-team my-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-6" :class="{'white' : themeSetting.isDarkMode == 'dark'}">
                        <div class="about-team-title" :class="{'white' : themeSetting.isDarkMode == 'dark'}">
                            <h3>About Our Team</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium at obcaecati nisi dolor atque porro ipsam mollitia tenetur, numquam commodi ab fuga consequatur pariatur quae dicta, nemo accusamus incidunt, nesciunt iure minus vitae voluptatibus? Nobis animi voluptatum iure, eius ex, id maiores dolorum nisi reprehenderit dolor optio asperiores quasi placeat error hic nulla minus, dicta facilis laboriosam necessitatibus fugiat rerum aliquam excepturi debitis? Sunt, maxime quo! Cumque rem culpa labore quos, quibusdam aspernatur nisi. Repudiandae, unde. Facilis dicta ducimus quidem!</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas iusto expedita odio molestias, nemo nulla, numquam quisquam suscipit officiis velit ipsum impedit pariatur quos esse rem magni corporis ducimus!</p>
                    </div>
                    <div class="col-md-6">
                        <img src="@/assets/images/service/service1.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="our-team my-4">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <img src="@/assets/images/service/service1.jpg" alt="">
                    </div>
                    <div class="col-md-6" :class="{'white' : themeSetting.isDarkMode == 'dark'}">
                        <div class="about-team-title" :class="{'white' : themeSetting.isDarkMode == 'dark'}">
                            <h3>About Our Team</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium at obcaecati nisi dolor atque porro ipsam mollitia tenetur, numquam commodi ab fuga consequatur pariatur quae dicta, nemo accusamus incidunt, nesciunt iure minus vitae voluptatibus? Nobis animi voluptatum iure, eius ex, id maiores dolorum nisi reprehenderit dolor optio asperiores quasi placeat error hic nulla minus, dicta facilis laboriosam necessitatibus fugiat rerum aliquam excepturi debitis? Sunt, maxime quo! Cumque rem culpa labore quos, quibusdam aspernatur nisi. Repudiandae, unde. Facilis dicta ducimus quidem!</p>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate voluptas iusto expedita odio molestias, nemo nulla, numquam quisquam suscipit officiis velit ipsum impedit pariatur quos esse rem magni corporis ducimus!</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="about-service">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 mb-4">
                        <h1 style="font-weight:900;">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                    </div>
                    <div class="col-md-12">
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus repellendus iusto alias, aspernatur nemo facere minus similique ipsum! Magni eligendi maxime quam! Quo architecto cumque nostrum laboriosam minima tenetur quae ullam excepturi saepe molestiae, amet voluptatum asperiores sapiente ipsum veniam officia totam assumenda a voluptas, eum cupiditate odit aperiam. Possimus, id atque laudantium qui laboriosam fuga ducimus dolorum dicta quidem perspiciatis nihil, ut dignissimos itaque consequuntur mollitia numquam? Sint aut rerum similique explicabo itaque dolorem aliquam nesciunt, laboriosam iusto ut culpa fugiat doloremque mollitia adipisci deleniti repellendus doloribus, dolores natus pariatur? Repellat fugit accusamus voluptas modi quae commodi reiciendis minima animi ex aliquid non at doloribus magnam maiores, saepe deleniti vel. Mollitia illum ullam pariatur id soluta eum omnis, cupiditate nesciunt repellat architecto qui, optio et possimus. Voluptatibus nostrum dolorem asperiores magni expedita eaque, exercitationem iusto ut, id, iure optio. Neque ullam delectus sapiente sequi impedit recusandae error, dolor eum.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus repellendus iusto alias, aspernatur nemo facere minus similique ipsum! Magni eligendi maxime quam! Quo architecto cumque nostrum laboriosam minima tenetur quae ullam excepturi saepe molestiae, amet voluptatum asperiores sapiente ipsum veniam officia totam assumenda a voluptas, eum cupiditate odit aperiam. Possimus, id atque laudantium qui laboriosam fuga ducimus dolorum dicta quidem perspiciatis nihil, ut dignissimos itaque consequuntur mollitia numquam? Sint aut rerum similique explicabo itaque dolorem aliquam nesciunt, laboriosam iusto ut culpa fugiat doloremque mollitia adipisci deleniti repellendus doloribus, dolores natus pariatur? Repellat fugit accusamus voluptas modi quae commodi reiciendis minima animi ex aliquid non at doloribus magnam maiores, saepe deleniti vel. Mollitia illum ullam pariatur id soluta eum omnis, cupiditate nesciunt repellat architecto qui, optio et possimus. Voluptatibus nostrum dolorem asperiores magni expedita eaque, exercitationem iusto ut, id, iure optio. Neque ullam delectus sapiente sequi impedit recusandae error, dolor eum.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus repellendus iusto alias, aspernatur nemo facere minus similique ipsum! Magni eligendi maxime quam! Quo architecto cumque nostrum laboriosam minima tenetur quae ullam excepturi saepe molestiae, amet voluptatum asperiores sapiente ipsum veniam officia totam assumenda a voluptas, eum cupiditate odit aperiam. Possimus, id atque laudantium qui laboriosam fuga ducimus dolorum dicta quidem perspiciatis nihil, ut dignissimos itaque consequuntur mollitia numquam? Sint aut rerum similique explicabo itaque dolorem aliquam nesciunt, laboriosam iusto ut culpa fugiat doloremque mollitia adipisci deleniti repellendus doloribus, dolores natus pariatur? Repellat fugit accusamus voluptas modi quae commodi reiciendis minima animi ex aliquid non at doloribus magnam maiores, saepe deleniti vel. Mollitia illum ullam pariatur id soluta eum omnis, cupiditate nesciunt repellat architecto qui, optio et possimus. Voluptatibus nostrum dolorem asperiores magni expedita eaque, exercitationem iusto ut, id, iure optio. Neque ullam delectus sapiente sequi impedit recusandae error, dolor eum.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
img{
    max-width: 100%;
}
.page-single-banner{
    padding: 20px 0;
    background-position: center center;
    background-size: cover;
    position: relative;
}
.page-single-banner::before{
    content: '';
    position: absolute;
    background-color: #000000a6;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.page-single-banner h1{
    font-weight: 900;
}
.about-team{
    padding: 50px 0;
}
.our-team{
    background-color: #e9e9e9;
    padding: 50px 0;
}
.our-team .card{
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    border: none;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    text-align: center;
    border-radius: 15px;
    position: relative;
    overflow: hidden;
    transition: 0.5s;
}
.our-team .card:hover{
    color: #fff;
}
.card-body{
    position: relative;
    z-index: 9;
}
.our-team .card::before{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 15px;
    background: #CA0F20;
    transition: 0.5s;
    z-index: 1;
}
.our-team .card:hover::before{
    height: 100%;
    transition: 0.5s;
}
.our-team .card img{
    border-radius: 100%;
}
.transparent{
    background: transparent;
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
</style>