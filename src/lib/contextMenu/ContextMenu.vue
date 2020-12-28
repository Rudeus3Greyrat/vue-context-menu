<template>
  <ul class="list" :id="dynamicId">
    <slot></slot>
  </ul>
</template>

<script>
import Bus from "./EventBus";
export default {
  name: "ContextMenu",
  data(){
    return {
      dynamicId:''
    }
  },
  methods:{
    handler(val){
      this.$emit('select',val)
    }
  },
  created() {
    Bus.$on('selectEmitted',this.handler)
    this.dynamicId=String(Math.random())
  },
  mounted() {
    let listBox=document.getElementById(this.dynamicId)
    listBox.previousElementSibling.oncontextmenu=function (e){
      let ev=e||event
      ev.preventDefault()
      let x=ev.clientX
      let y=ev.clientY
      listBox.style.display='block'
      listBox.style.left=x+'px'
      listBox.style.top=y+'px'
      document.onclick=function (){
        listBox.style.display='none'
      }
    }
  }
}
</script>

<style scoped>
ul{
  padding: 0;
  margin: 0;
  list-style: none;
}
.list{
  border: 1px solid darkgrey;
  background-color: #fff;
  display: none;
  position: fixed;
  z-index:999;
}
</style>
