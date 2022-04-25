import typescript from '@rollup/plugin-typescript'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'
import { babel } from '@rollup/plugin-babel'
import nodePolyfills from 'rollup-plugin-node-polyfills'
import pkg from './package.json'
import path from 'path'

export default {
  input: './bin/index.ts',
  output: {
    file: path.resolve(__dirname, 'dist/cli.js'),
    format: 'cjs',
    sourcemap: true, // ts中的sourcemap也得变为true
  },

  plugins: [
    typescript(),
    nodeResolve(),
    json(),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
      plugins: ['external-helpers'],
    }),
    commonjs({
      include: ['node_modules/**'],
    }),
  ],
}
