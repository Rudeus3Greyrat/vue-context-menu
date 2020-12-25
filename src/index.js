// 导入所有组件
import ContextMenu from './lib/contextMenu/index.js'
import ContextMenuItem from "./lib/contextMenuItem/index.js";

const components = [ContextMenu,ContextMenuItem]
const install = function(vue) {
  components.map((component) => {
    vue.component(component.name, component); //component.name 此处使用到组件vue文件中的 name 属性
  });
};
/* istanbul ignore if */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
};

export default {
  install,
  ContextMenu,
  ContextMenuItem
}
