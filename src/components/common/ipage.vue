<template>
<div class="page" ref="page">
    <div class="page-wrap">

        <slot/>

    </div>
</div>
</template>

<script>
export default {
    mounted(){
        //创建滚动视图，让页面可以滚动
        let scroll = new IScroll(this.$refs.page,{
             mouseWheel: true,
             bounce : false
        });
        scroll.on('beforeScrollStart', ()=>{
            scroll.refresh();
            
        })
    }

}
</script>

<style scoped>
.page{
  width: 100%;
  position: absolute;
  /* top: 50px; */
  left: 0;
  bottom: 0;
  /* background: #ebebeb; */
  overflow: hidden;
  z-index: 0
}
</style>
