import ContextMenu from './contextMenu';
import ContextMenuItem from '../contextMenu/components/ContextMenuItem';

ContextMenu.install = Vue => Vue.component(ContextMenu.name, ContextMenu);//注册组件
ContextMenuItem.install = Vue => Vue.component(ContextMenuItem.name, ContextMenuItem);//注册组件

export {ContextMenu,ContextMenuItem}
