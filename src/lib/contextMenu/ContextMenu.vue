<template>
  <ul id="list" :class="{divided:divided}">
    <slot></slot>
  </ul>
</template>

<script>
  import Bus from "./EventBus";

  export default {
    name: "ContextMenu",
    methods: {
      core() {
        let listBox = document.getElementById('list')
        listBox.previousElementSibling.oncontextmenu = function (e) {
          let ev = e || event
          ev.preventDefault()
          let x = ev.clientX
          let y = ev.clientY
          listBox.style.display = 'block'
          listBox.style.left = x + 'px'
          listBox.style.top = y + 'px'
          document.onclick = function () {
            listBox.style.display = 'none'
          }
        }
      },
      handler(val) {
        this.$emit('select', val)
      }
    },
    props: {
      divided: {
        type: Boolean,
        default: false
      }
    },
    created() {
      Bus.$on('selectEmitted', this.handler)
    },
    mounted() {
      this.core()
    }
  }
</script>

<style scoped>
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }

  #list {
    border: 1px solid darkgrey;
    background-color: #fff;
    display: none;
    position: absolute;
  }

  .divided > li {
    border-bottom: 1px solid darkgray;
  }

  .divided > li:last-child {
    border-bottom: none;
  }
</style>
