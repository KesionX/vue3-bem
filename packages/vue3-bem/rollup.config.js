import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
    input: './src/index.ts',
    output: [{
        format: "cjs",
        dir: "dist/cjs",
        name: "vue3-bem",
    }, {
        format: "esm",
        dir: "dist/es",
        name: "vue3-bem",
    }],
    plugins: [
        resolve(),
        typescript({ compilerOptions: {lib: ["es5", "es6", "dom"], target: "es5"}})
    ]
}

export default config;
