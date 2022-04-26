import path from 'path'
import fs from 'fs'
import chalk from 'chalk'

export const getAbsolutePath = (p) => {
  return path.resolve(__dirname, p)
}

export const hasDir = (p) => {
  return fs.existsSync(p)
}

export const hasAccessToMkDir = (p) => {
  try {
    fs.accessSync(p)
    return true
  } catch (error) {
    return false
  }
}

export const log = (content) => console.log(chalk.yellow(content))
