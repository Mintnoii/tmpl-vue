import { defineConfig, loadEnv } from 'vite'
import Vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import { VueUseComponentsResolver } from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import UnoCSS from 'unocss/vite'
import { resolve } from 'path'

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    envDir: './env',
    plugins: [
      Vue(),
      vueJsx(),
      UnoCSS(),
      AutoImport({
        dts: './src/typings/auto-imports.d.ts',
        imports: ['vue', 'pinia', 'vue-router', '@vueuse/core'],
        dirs: ['src/components/'],
        eslintrc: {
          enabled: false,
          filepath: './.eslintrc-auto-import.json',
          globalsPropValue: true
        },
        resolvers: []
      }),
      Components({
        dts: './src/typings/components.d.ts',
        extensions: ['vue', 'md'],
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        dirs: ['src/components/'],
        resolvers: [VueUseComponentsResolver()]
      }),
      createSvgIconsPlugin({
        iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
        symbolId: 'svg-icon-[name]',
        svgoOptions: false
      })
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      },
      extensions: ['.ts', '.js', '.vue', '.json']
    },
    server: {
      port: 8086,
      host: true
      // proxy: {
      //   '/api': {
      //     target: 'http://localhost:8888/',
      //     changeOrigin: true,
      //     rewrite: (path) => path.replace('/api/', '/')
      //   }
      // }
    },
    build: {
      chunkSizeWarningLimit: 1024,
      assetsDir: 'static/assets',
      rollupOptions: {
        output: {
          chunkFileNames: 'static/js/[name]-[hash].js',
          entryFileNames: 'static/js/[name]-[hash].js',
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
          manualChunks: {
            vue: ['vue'],
            pinia: ['pinia'],
            'vue-router': ['vue-router']
          }
        }
      }
    },
    esbuild: {
      drop: env.NODE_ENV === 'development' ? [] : ['console', 'debugger']
    }
  }
})
