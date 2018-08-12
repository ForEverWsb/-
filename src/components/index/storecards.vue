<template>
    <div id="storecards">
        <div class="list" v-for="item in data" :key="item.id">
            <div class="upper">
                <div class="imgbox">
                    <img :src="'https://fuss10.elemecdn.com/' +item.restaurant.image_path+'.'+ item.restaurant.image_path.match(/jpeg|png/g)">
                </div>
                <div class="content">
                    <i class="is_premium" v-show="item.restaurant.is_premium">品牌</i>
                    <span class="headtitle">{{item.restaurant.name}}</span>
                </div>
            </div>
            <div class="lower">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    props : {
        data : Array
    }
}
</script>

<style>
    .list{
        border-bottom: .133333vw solid #eee;
        background-color: #fff;
        color: #666;
        padding: 4vw 0;
        font-size: 12px;
    }
    .upper{
        display: flex;
        padding: 0 2.666667vw;
    }
    .imgbox{
        width: 17.333333vw;
        height:17.333333vw;
    }
    .imgbox img{
        width: 100%;
        height: 100%
    }
    .headtitle{
        font-weight: 700;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #333;
        font-size: 14px;
    }
    .lower{
        padding-left: 22.666667vw;
    }
    .content{
        padding-left: 2.666667vw;
    }
    .is_premium{
        text-align: center;
        white-space: nowrap;
        font-weight: 700;
        font-size: 12px;
        font-style: normal;
        line-height: normal;
        background-image: linear-gradient(-139deg,#fff100,#ffe339);
        color: #6f3f15;
    }
</style>
