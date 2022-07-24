# Mint-Tmpl-Vue

Vite3 + Vue3 + TS 开箱即用的现代 Vue 项目开发模板
## 特性

- 📥 [组合式 Composition API 自动引入](https://github.com/antfu/unplugin-auto-import)

- 📦 [ UI 组件自动化加载](https://github.com/antfu/unplugin-vue-components)

- 🗂 [基于文件的路由](https://github.com/Mintnoii/tmpl-vue/tree/main/src/pages)

- 🗺 [布局系统](https://github.com/Mintnoii/tmpl-vue/tree/main/src/layout)

- 🍍 [使用 Pinia 的状态管理](https://pinia.esm.dev/)

- 🔥 [使用新的 `<script setup>` 语法](https://github.com/vuejs/rfcs/pull/227)

- 🎨 [原子化 Windi CSS](https://cn.windicss.org/guide/)

- 🚀 [实用的 VueUse 工具合集](https://github.com/antfu/vueuse)

## 开箱即用

- `UI 框架：` [Ant Design Vue](https://www.antdv.com/components/overview-cn/)
- `Icons：`  [SvgIcon](https://github.com/Mintnoii/tmpl-vue/blob/main/src/components/SvgIcon.vue)
- `CSS 实用工具：` [Windi CSS](https://cn.windicss.org/guide/)
- `路由管理：` [Vue Router](https://github.com/vuejs/vue-router)
- `HTTP 工具：` [Axios](https://axios-http.com/docs/intro)
- `状态管理：` [Pinia](https://pinia.esm.dev)
- `代码规范：` [EditorConifg、Prettier、ESLint](https://github.com/Mintnoii/tmpl-vue/blob/main/.eslintrc.js)
- `提交规范：` [husky、Commitlint 、lint-staged](https://github.com/Mintnoii/tmpl-vue/blob/main/.husky)

### 开发建议

**👍 推荐使用 Composition API 的 [`<script setup>` SFC 语法](https://github.com/vuejs/rfcs/pull/227)**

本项目所有组件都采用这种开发模式，弱化 vue 模板式编程体验，使单文件组件写法更接近函数式编程。

相比于普通的 `<script>` 语法，vue 官方肯定了它的优势：
- 更少的样板内容，更简洁的代码
- 能够使用纯 Typescript 声明 props 和抛出事件
- 更好的运行时性能 (其模板会被编译成与其同一作用域的渲染函数，没有任何的中间代理)
- 更好的 IDE 类型推断性能 (减少语言服务器从代码中抽离类型的工作)

**👍 推荐安装 VScode 插件 Volar**

 在 Vue2.x 项目中普遍使用的 `Vetur` 对 TS 的支持不太友好，因此 Vue3.x 开发推荐另外一个插件 `Volar`。

 注意：`Volar` 和 `Vetur` 同时使用会有冲突，使用 `Volar` 时要记得禁用 `Vetur`。

 **👍 推荐优先使用原子化 Windi CSS 实现样式开发**

 项目中页面与组件的样式，尽量全部用 `Windi CSS` 实现，同时推荐搭配安装 WindiCSS IntelliSense 插件，提高开发效率。

 注意：项目安装了 `SCSS` 的预处理器，但请在原子化 CSS 很难实现的场景，再考虑使用 `SCSS` 语法。
### 注意事项

 **📌 使用 `SvgIcon` 组件时，单色图标需要使用不带 `fill` 属性的 `svg` 图片才能实现自定义颜色**

 - 多色、渐变、毛玻璃等 `svg` 图片暂不支持自定义颜色，直接使用设计稿原图

## 使用

1. `git clone git@github.com:Mintnoii/tmpl-vue.git my-app`
2. `cd my-app`
3. `yarn`
4. `yarn dev`

