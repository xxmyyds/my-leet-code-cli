import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import pkg from './package.json'
import path from 'path'

export default {
  input: './bin/index.ts',
  output: {
    file: path.resolve(__dirname, 'dist/cli.js'),
    format: 'umd',
    sourcemap: true, // ts中的sourcemap也得变为true
  },

  plugins: [typescript(), resolve(), commonjs()],
}
