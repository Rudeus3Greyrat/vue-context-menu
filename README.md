# vue-context-menu

> A simple universal context menu for HTML elements.

## Installation

``` bash
# install with npm
npm i vue-context-menu
```

## Quick Start

``` bash
# import vue-context-menu
import { ContextMenu,ContextMenuItem } from 'vue-context-menu'
Vue.use(ContextMenu)
Vue.use(ContextMenuItem)
```

## How to Use

``` bash
# Put context-menu including context-menu-items closely next to the element that you want add customed context menu to.
```

## Example

``` bash
<div id='example'></div>
<context-menu @select="handleSelect">
    <context-menu-item :select="download">Download</context-menu-item>
    <context-menu-item :select="rename">Rename</context-menu-item>
    <context-menu-item :select="moreInfo">More Info</context-menu-item>
</context-menu>

# In this case, HTML element 'example' is the one we want to add customed context menu to.
# <context-menu></context-menu> is the wrapper of the menu.
# <context-menu-item></context-menu-item> is the item in context menu.
```

## context-menu Events
| Event Name |                 Description                  |                    Parameters                    |
| :--------: | :------------------------------------------: | :----------------------------------------------: |
|   select   | triggers when a context menu item is clicked | the select dispatched from the context menu item |

## context-menu-item Attributes

| Attribute |                         Description                         |         Type         | Default |
| :-------: | :---------------------------------------------------------: | :------------------: | :-----: |
|  select   | a select to be dispatched to context-menu's select callback | string/number/object |   ''    |

## context-menu-item Slot

Custom content for context-menu-item.

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).