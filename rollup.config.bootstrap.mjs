import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
    input: "src/js/bootstrap.js",
    output: [
        {
            file: "dist/js/bootstrap.js",
            name: "bootstrapBundle",
            format: "iife",
        },
        {
            file: "dist/js/bootstrap.min.js",
            name: "bootstrap",
            format: "iife",
            plugins: [terser({ mangle: true })]
        }
    ],
    plugins: [nodeResolve()]
}