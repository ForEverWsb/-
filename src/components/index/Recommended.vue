<template>
    <div id="Recommended">
        <!-- <h1>推荐</h1> -->
        <div class="Recommendedbox">
            <div class="Recommendedone">
            <h3>品质套餐</h3>
            <div class="eatgood">搭配齐全吃得好</div>
            <div class="buynow">立即抢购 ></div>
            <img src="https://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/format/webp/thumbnail/!240x160r/gravity/Center/crop/240x160/" alt="">
        </div>
        <div class="Recommendedone ">
            <h3 class="hcolor">{{datare.name}}</h3>
            <div class="eatgood">{{datare.description}}</div>
            <div class="rob"><span class="amount">{{datare.population}}人</span>正在抢 ></div>
            <img :src="'https://fuss10.elemecdn.com/' + datare.image_hash + '.jpeg'">
        </div>
        </div>
        <div class="recommondstore">
            —— 推荐商家 ——
        </div>
    </div>
</template>

<script>
export default {
    
    props : {
        datare : Object,
        
    },
    mounted(){
    }
}
</script>

<style>
    /* #Recommended{
        margin-bottom: 2.133333vw;
        padding: 0 2.666667vw;
        display: flex;
        box-sizing: border-box
    } */
    .Recommendedbox{
        margin-bottom: 2.133333vw;
        padding: 0 2.666667vw;
        display: flex;
        box-sizing: border-box
    }
    .Recommendedone{
        height: 37.333333vw;
        padding: 3.2vw 0 0 4vw;
        margin-right: .8vw;
        flex: 1;
        background: #f4f4f4;
        position: relative;
        
    }
    .Recommendedone img{
        position: absolute;
        right: 0;
        bottom: -2vw;
        width: 32vw;
        height: 21.333333vw;
    }
    .eatgood{
        margin-bottom: 2.4vw;
        font-size: 12px ;
        color: #777;
    }
    .buynow{
        color: #af8260;
        font-weight: 700;
        font-size: 12px ;
    }
    h3{
        margin-bottom: 1.333333vw;
        color: #333;
    }
    .hcolor{
            color: #e81919;
    }
    .amount{
        color: #e81919;
    }
    .rob{
        font-weight: 700;
        font-size: 12px;
    }
    .recommondstore{
        text-align: center;
        height: 9.6vw;
        line-height: 9.6vw;
        color: #999;
    }
</style>
