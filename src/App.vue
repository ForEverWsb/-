<template>
  <div id="app">
    
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <nav class="bottommenu">
      <router-link class="tab" :to="{name:'index'}">
        <i class="iconfont icon-changyonglogo40"></i><span>首页</span>
        </router-link>
        <router-link class="tab" :to="{name:'discover'}">
          <i class="iconfont icon-faxian"></i><span>发现</span>
        </router-link>
        <router-link class="tab" :to="{name:'order'}">
          <i class="iconfont icon-dingdan"></i><span>订单</span>
        </router-link>
        <router-link class="tab" :to="{name:'mine'}">
          <i class="iconfont icon-wode"></i><span>我的</span>
        </router-link>
        
    </nav>
  </div>
</template>

<script>
export default {
  name: 'App',

}
</script>

<style>
html, body, #app{
  width: 100%;
  height: 100%;
  background: #ebebeb;
}
 .bottommenu{
        width: 100% ;
        position: absolute;
        bottom: 0 ;
        display: flex ;
        background: #fff;
        padding-top: 1.2vw;
        z-index: 5;
        box-shadow: 0 -0.266667vw 0.533333vw rgba(0,0,0,.1);
    }
    .tab{
      font-size:12px;
      flex: 1 ;
      text-align: center ;
      display: flex;
      flex-direction: column;
      color: rgb(51, 51, 51);
    }
    a{
        text-decoration: none;
    }
    i{
      font-size: 24px;
      color: rgb(51, 51, 51);
    }
    .page{
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom:0;
  background: #fff;
}
.page.subpage{
  bottom: 0;
  z-index: 5;
}
</style>
