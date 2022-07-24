import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import vueJsx from '@vitejs/plugin-vue-jsx'
import legacy from '@vitejs/plugin-legacy'
import { AntDesignVueResolver, VueUseComponentsResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import WindiCSS from 'vite-plugin-windicss'
import { ConfigEnv } from 'vite'
import path from 'path'

export default (env: ConfigEnv) => {
  return [
    Vue({
      include: [/\.vue$/, /\.md$/]
    }),
    Pages(),
    Layouts({ layoutsDirs: 'src/layout', defaultLayout: 'BasicLayout' }),
    vueJsx(),
    vueSetupExtend(),
    WindiCSS(),
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    AutoImport({
      dts: './src/typings/auto-imports.d.ts',
      // 手动引入 message、Modal 等组件
      imports: [
        'vue',
        'pinia',
        'vue-router',
        '@vueuse/core',
        { 'ant-design-vue/es/components': ['message'] },
        { 'ant-design-vue/es/components': ['Modal'] },
        { 'ant-design-vue/es/components': ['notification'] }
      ],
      // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      eslintrc: {
        enabled: false,
        filepath: './.eslintrc-auto-import.json',
        globalsPropValue: true
      },
      resolvers: [AntDesignVueResolver()]
    }),
    Components({
      dts: './src/typings/components.d.ts',
      extensions: ['vue', 'md'],
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      // imports 指定组件所在位置，默认为 src/components; 有需要也可以加上 view 目录
      dirs: ['src/components/'],
      resolvers: [AntDesignVueResolver(), VueUseComponentsResolver()]
    }),
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
      symbolId: 'svg-icon-[name]',
      svgoOptions: false
    })
  ]
}
