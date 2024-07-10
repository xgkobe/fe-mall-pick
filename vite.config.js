import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import eslint from 'vite-plugin-eslint';
import legacy from '@vitejs/plugin-legacy';
import path from 'path';
import {pathRewritePlugin} from './plugins';
import pages from './pages.json';

function resolve(dir) {
    return path.join(__dirname, dir);
}



// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        eslint({
            include: ['src/*.js', 'src/*.jsx'],
        }),
        vueJsx({
            // options are passed on to @vue/babel-plugin-jsx
        }),
        legacy({
            targets: ['defaults', 'not IE 11'],
        }),
        pathRewritePlugin(),
    ],
    resolve: {
    // 配置路径别名
        alias: {
            '@': '/src',
        },
    },
    build: {
        rollupOptions: {
            base: './',
            root: 'src/pages',
            input: Object.fromEntries(Object.keys(pages).map(name => {
                return [name, path.join(process.cwd(), pages[name].entry)];
            })),
            output: {
                preserveModulesRoot: 'src/pages',
                assetFileNames: 'assets/[name]-[hash].[ext]', // 静态资源
                chunkFileNames: 'js/[name]-[hash].js', // 代码分割中产生的 chunk
                entryFileNames: 'js/[name]-[hash].js', // 指定 chunks 的入口文件
                compact: true,
                manualChunks: id => {
                    if (id.includes('node_modules')) {
                        return id
                            .toString()
                            .split('node_modules/')[1]
                            .split('/')[0]
                            .toString(); // 拆分多个 vendors
                    }
                },
            },
        },
    },
});
