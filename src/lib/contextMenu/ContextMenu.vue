<template>
  <ul class="vue-context-menu-list" :id="dynamicId">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  name: "ContextMenu",
  data() {
    return {
      dynamicId: ''
    }
  },
  created() {
    this.dynamicId = String(Math.random())
  },
  mounted() {
    let listBox = document.getElementById(this.dynamicId)
    listBox.previousElementSibling.oncontextmenu = function (e) {
      let ev = e || event
      ev.preventDefault()
      let itemList = [...document.getElementsByClassName('vue-context-menu-list')]
      if (itemList.some(el => el.style.display !== 'none')) {
        itemList.forEach(el => el.style.display = 'none')
      }
      let x = ev.clientX
      let y = ev.clientY
      listBox.style.display = 'block'
      listBox.style.left = x + 'px'
      listBox.style.top = y + 'px'
      document.onclick = function () {
        listBox.style.display = 'none'
      }
    }
  }
}
</script>

<style scoped>
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.vue-context-menu-list {
  border: 1px solid darkgrey;
  background-color: #fff;
  display: none;
  position: fixed;
  z-index: 999;
}
</style>
