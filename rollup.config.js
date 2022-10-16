import { defineConfig } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { DEFAULT_EXTENSIONS } from '@babel/core'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import rollupTypescript from 'rollup-plugin-typescript2'

export default defineConfig({
  input: './src/index.ts',
  output: {
    file: 'dist/index.js',
    format: 'esm'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
      babelHelpers: 'runtime',
      extensions: [
        ...DEFAULT_EXTENSIONS,
        '.ts'
      ]
    }),
    nodeResolve({
      browser: true
    }),
    commonjs(),
    rollupTypescript()
  ]
})