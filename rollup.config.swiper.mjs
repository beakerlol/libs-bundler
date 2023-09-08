import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
    input: "src/js/swiper.js",
    output: [
        {
            file: "dist/js/swiper.js",
            name: "swiperBundle",
            format: "iife",
        },
        {
            file: "dist/js/swiper.min.js",
            name: "swiperBundle",
            format: "iife",
            plugins: [terser({ mangle: true })]
        }
    ],
    plugins: [nodeResolve()]
}