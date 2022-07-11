//vite.config.js
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import compressPlugin from "vite-plugin-compression"; //Static resource compression
import legacyPlugin from '@vitejs/plugin-legacy'; //Browser Compatibility

export default defineConfig({
    server: {
        port: 9090,
        open: true,
        proxy: {
            '/api': {
                target: 'https://api.textarea.xyz/wordtest/common',
                changeOrigin: true,
                rewrite: path => path.replace(/^\/api/, ''),
                ws: false
            },

        }

    },
    plugins: [vue(),
        compressPlugin({ //gzip static resource compression
            verbose: true,    // default
            disable: false,  //Enable compression (do not disable), the default is OK
            deleteOriginFile: false, //delete source files
            threshold: 10240, //Minimum file size before compression
            algorithm: 'gzip',  //compression algorithm
            ext: '.gz', //file type
        }),
        legacyPlugin({
            targets: ['chrome 52'], // Compatible target list is required, multiple can be set
            additionalLegacyPolyfills: ['regenerator-runtime/runtime'] // This plugin is required when targeting IE11
        })
    ],
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
    build: {
        // Clear console and debugger
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
        //Alert threshold, limit large file size
        // chunkSizeWarningLimit: 1500,
        rollupOptions: {
            output: {
                // chunkFileNames: 'assets/js/[name]-[hash].js',
                // entryFileNames: 'assets/js/[name]-[hash].js',
                // assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
            }
        },
    },
})
