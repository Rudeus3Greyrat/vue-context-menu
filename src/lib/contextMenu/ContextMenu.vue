<template>
  <ul id="list">
    <slot></slot>
  </ul>
</template>

<script>
import Bus from "./EventBus";
export default {
  name: "context-menu",
  methods:{
    handler(val){
      this.$emit('select',val)
    }
  },
  created() {
    Bus.$on('selectEmitted',this.handler)
  },
  mounted() {
    let listBox=document.getElementById('list')
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
#list{
  border: 1px solid darkgrey;
  background-color: #fff;
  display: none;
  position: absolute;
}
</style>
