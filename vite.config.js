//vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'views': '@/views',
      'assets': '@/assets',
      'common': '@/common',
      'components': '@components',
      'network': '@/network',
      'router': '@/router',
      'store': '@/store'
    },
    extensions: ['', '.js', '.json', '.vue', '.less', '.css']
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${path.resolve("src/styles/common.less")}";`,
        },
        javascriptEnabled: true,
      },
    },
  },
  server: {
    port: 8888
  }
})
