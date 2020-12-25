<template>
  <li @click="handler">
    <slot></slot>
  </li>
</template>

<script>
import Bus from '../contextMenu/EventBus'
export default {
name: "ContextMenuItem",
  props:{
  select:{
    type: String|Number|Object,
    default:''
  }
  },
  methods:{
  handler(){
    Bus.$emit('selectEmitted',this.select)
  }
  }
}
</script>

<style scoped>
li{
  display: block;
  min-width: 3rem;
  height: 2rem;
  line-height: 2rem;
  font-size: 0.8rem;
  text-align: center;
  margin:0;
}
li:hover{
  background-color: darkgrey;
  cursor: pointer;
}
</style>
