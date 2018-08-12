<template>
    <div id="menu">
        <!-- <h1>菜单</h1> -->
        <div class="menulist">
            <div class="menudiv" v-for="(item,i) in menumess" :key="i">
                {{item.name}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props : {
        dataone : Array,
        datatwo : Array
    },
    data(){
        return {
            menumess : [{name :'综合排序'},{name : '距离最近'},{name:'品质联盟'},{name :'筛选'}],
            
        }
    }
}
</script>

<style>
    .menulist{
        display: flex;
        
    }
    .menudiv{
        width: 25%;
        text-align: center;
        color: #666;
        font-size: 16px;
    }
</style>
