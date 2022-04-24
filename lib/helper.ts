import path from 'path'
import fs from 'fs'
import chalk from 'chalk'

export const getAbsolutePath = (p: string) => {
  return path.resolve(__dirname, p)
}

export const hasDir = (p: string) => {
  return fs.existsSync(p)
}

export const hasAccessToMkDir = (p: string) => {
  try {
    fs.accessSync(p)
    return true
  } catch (error) {
    return false
  }
}

export const log = (content: string) => console.log(chalk.yellow(content))
