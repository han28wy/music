import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import postCssPxToRem from 'postcss-pxtorem'
import path from 'path'
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";

export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    }),
],
  base: "./", // 类似publicPath，'./'避免打包访问后空白页面，要加上，不然线上也访问不了
  // 引入第三方的配置
  optimizeDeps: {
    include: [],
  },
  resolve: {
    extensions: [".ts", ".vue", ".json", ".less", "scss", "jsx"],
    alias: {
      "@": path.resolve("src")
    }

  },
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          rootValue: 37.5, // 1rem的大小
          propList: ['*'], // 需要转换的属性，这里选择全部都进行转换
        })
      ]
    }
  },
  // 打包配置
  build: {
    target: "modules",
    outDir: "dist",
    assetsDir: "assets", // 指定生成静态资源的存放路径
    minify: "terser", // 混淆器，terser构建后文件体积更小
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  // 本地运行配置，及反向代理配置
  server: {
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
    base: '/', //在 HTTP 请求中预留此文件夹，用于代理 Vite 作为子文件夹时使用。应该以 / 字符开始和结束。
    proxy: {
      // "/m1": {
      //   target: "http://127.0.0.1:4523",
      //   changeOrigin: true,
      // },
      // "/":{
      //   target:"http://localhost:3000",
      //   changeOrigin:true
      // }

    },
  },
})
