import fs from 'fs'
import { getAbsolutePath, hasAccessToMkDir, hasDir, log } from './helper.js'

const DIR = {
  TOPIC_PATH: './problems/',
}

const DIFFMAP = {
  easy: '简单',
  medium: '中等',
  hard: '困难',
}

export function createTopic(name, topic) {
  const { cname, ename, url, diff, number } = topic

  const localDir = getAbsolutePath(`${DIR.TOPIC_PATH}${ename}`)
  createTopicDir(localDir)
  createTopicCodingTmp(localDir)
  createTopicTestTmp(localDir, ename)
  createTopicReadmeTmp(localDir, cname, url, diff, number)
}

function createTopicDir(localDir) {
  if (hasDir(localDir)) {
    log('The current folder already exists')
    return false
  }
  if (hasAccessToMkDir(localDir)) {
    log('No permission to create folder')
    return false
  }
  fs.mkdirSync(localDir)
  log('The folder create successfully')
}
function createTopicCodingTmp(localDir) {
  fs.writeFileSync(`${localDir}/index.ts`, 'export function fn() {}')
  log('index.ts create successfully')
}
function createTopicTestTmp(localDir, ename) {
  fs.writeFileSync(
    `${localDir}/index.spec.ts`,
    `
  import { expect, test, describe } from 'vitest'
  import {} from './index'
  describe('${ename}', () => {})
  `
  )
  log('index.spec.ts create successfully')
}
function createTopicReadmeTmp(localDir, cname, url, diff, number) {
  fs.writeFileSync(
    `${localDir}/README.md`,
    `## ${number}.${cname}\r\n\r\n> 难度：${DIFFMAP[diff]}\r\n>\r\n> ${url}\r\n\r\n## 题目`
  )
  log('README.md create successfully')
}
