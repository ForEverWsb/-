<template>
    <Page>
        <div class="headerone">
            <i class="iconfont icon-location"></i><span class="locationmess">{{message}}</span>
        </div>
        <div class="btn">
            <div class="btnmes">
                <span class="btmess">搜索饿了么商家，商品名称</span>
            </div>
        </div>
        <div class="est">
            <Swiper :dataone="classDataone" :datatwo="classDatatwo"></Swiper>
        </div>
        <Recommended :datare="Recommended"></Recommended>
        <Menu :dataone="menudataone " :datatwo="menudatatwo"></Menu>
        <Storecards :data="storeData "></Storecards>
    </Page>
</template>

<script>
import {getentriesdate,getNenuList,getStoreInfo} from '../service/service' ;
import Swiper from '../components/index/swiper.vue';
import Recommended from '../components/index/Recommended.vue';
import Menu from '../components/index/menu.vue';
import Storecards from '../components/index/storecards.vue';
export default {
    components : {
        Swiper,
        Recommended ,
        Menu,
        Storecards
    },
    data(){
        return {
            message : '上步工业区',
            classDataone: [],
            classDatatwo:[],
            Recommended:{},
            menudataone : [],
            menudatatwo :[],
            storeData : []
        }
    },
    mounted(){
        getentriesdate().then(result=>{
            for(var i = 0 ; i< 10 ; i++){
                this.classDataone.push(result[0][i])
            }
            for(var i = 10 ; i < result[0].length ; i++){
                this.classDatatwo.push(result[0][i])
            }
            this.Recommended = result[1][0];
            // console.log(this.Recommended)
        }),
        getNenuList().then(result=>{
            this.menudataone = result.data.inside_sort_filter;
            this.menudatatwo = result.data.outside_sort_filter;

        }),
        getStoreInfo().then(result=>{
            this.storeData = result;
            var d = this.storeData[0].restaurant.image_path.match(/jpeg|png/g)
            console.log(result)
            console.log(this.storeData[0].restaurant.image_path)
            console.log(d )
        })
    }
}
</script>

<style>
    .headerone{
        padding: 2.666667vw 3.733333vw 0;
        color: #fff;
        background-image: linear-gradient(90deg,#0af,#0085ff);
        font-weight: 700;
    }
    .locationmess{
        margin: 0 1.333333vw;
        font-size: .453333rem;
        max-width: 80%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 18px;
        font-family: 'Helvetica Neue',Tahoma,Arial,PingFangSC-Regular,'Hiragino Sans GB','Microsoft Yahei',sans-serif;
        line-height: 1.2;
    }
    .btn{
        width: 100%;
        padding: 2vw 3.5vw;
        background-image: linear-gradient(90deg,#0af,#0085ff);

    }
    .btnmes{
        width: 94%;
        height: 9.6vw;
        background:#fff;
        display: flex;
        text-align: center;
        
    }
    .btmess{
        font-family: simsun;
        color: #999;
        font-size: 16px;
        flex: 1;
        line-height: 9.6vw
    }
    .icon-location{
        color: #fff;
        font-weight: 700;
    }
    .est{
        width: 100%;
    }
</style>
