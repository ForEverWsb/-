<template>
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <ul class="Sw_one">
                    <li v-for="(item,index) in dataone" :key="index">
                        <div class="img_box">
                        <img :src="'https://fuss10.elemecdn.com/' + item.image_hash + '.jpeg'">
                        </div>
                        <span class="namedescript">{{item.name}}</span>
                    </li>
                </ul>
            </div>
            <div class="swiper-slide">
                 <ul class="Sw_one">
                    <li v-for="(item,index) in datatwo" :key="index">
                        <div class="img_box">
                        <img :src="'https://fuss10.elemecdn.com/' + item.image_hash + '.jpeg'">
                        </div>
                        <span class="namedescript">{{item.name}}</span>
                    </li>
                </ul>
            </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
    </div>
</template>

<script>
export default {
    props :{
        dataone : Array,
        datatwo : Array
    },
    mounted(){
        this.swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        loop:true ,
    });
    },
    updated(){
        this.swiper.reLoop();
        this.swiper.update();
        this.swiper.slideTo(1,0)
    }

}
</script>

<style>
    .Sw_one{
        display: flex ; 
        flex-wrap: wrap;
        padding-bottom: 10vw;
        
    }
    .img_box{
            width: 12vw;
            height: 12vw;
    }
    .Sw_one img{
        width: 100% ;
        height: 100% ;
    }
    .Sw_one li{
        width: 20%;
        list-style: none ;
        display: flex;
        flex-direction: column;
       align-items: center;
       margin-top: 2.933333vw;
    }
    .namedescript{
        display: block ;
        color: #666 ;
        font-size: 12px ;
        text-align: center
    }
    .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction{
        bottom: 0;
    }
    .swiper-container{
        position: relative;
    }
    .swiper-pagination-bullet{
        width: 8px ;
        height: 8px;
        margin: 0 .666667vw;
    }
    .swiper-pagination-bullet-active{
            background-color: #000;
            opacity: .6;
    }
</style>
