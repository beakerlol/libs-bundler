import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
    input: "src/js/swiper.js",
    output: [
        {
            file: "dist/js/swiper.js",
            format: "es",
        },
        {
            file: "dist/js/swiper.min.js",
            format: "es",
            plugins: [terser({ mangle: true })]
        }
    ],
    plugins: [nodeResolve()]
}