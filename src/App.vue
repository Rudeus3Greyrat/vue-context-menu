<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
      <context-menu @select="handleSelect">
        <context-menu-item :select="{key:1,value:'下载'}">下载</context-menu-item>
        <context-menu-item :select="{key:2,value:'下载2'}">重命名</context-menu-item>
        <context-menu-item :select="{key:3,value:'下载我'}">厉害的要死</context-menu-item>
        <context-menu-item :select="{key:4,value:'下载s'}">其实还挺好</context-menu-item>
        <context-menu-item :select="{key:5,value:'下载dfc'}">查不过</context-menu-item>
      </context-menu>
    </ul>
  </div>
</template>

<script>
import ContextMenu from "./lib/contextMenu/ContextMenu";
import ContextMenuItem from "./lib/contextMenu/components/ContextMenuItem";
export default {
  name: 'app',
  components:{
    ContextMenu,
    ContextMenuItem
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    handleSelect(val){
      console.log(val)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
