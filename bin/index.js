#! /usr/bin/env node

import { program } from 'commander'
import { promisify } from 'util'
import figlet from 'figlet'
import inquirer from 'inquirer'
import { createTopic } from '../lib/topic.js'
import { log } from '../lib/helper.js'

const asyncFiglet = promisify(figlet)

program
  .version(`@xxm7/leet-code-cli ${process.env.npm_package_version}`)
  .usage('<command> [options]')
program.option('-n --name <type>', 'output name')

async function printLogo() {
  let data = await asyncFiglet('Leet-Code')
  log(data)
}

program
  .command('create <name>')
  .description('创建新的题目')
  .action(async (name) => {
    await printLogo()
    log('准备添加新的题目')
    let res = await inquirer.prompt([
      {
        type: 'input',
        name: 'cname',
        message: '请输入题目的中文名称:',
      },
      {
        type: 'input',
        name: 'ename',
        message: 'please enter the english title of the topic:',
      },
      {
        type: 'input',
        name: 'number',
        message: 'please enter the number of the topic:',
      },
      {
        type: 'input',
        name: 'url',
        message: 'please enter the leetcode url of the topic:',
      },
      {
        type: 'list',
        name: 'diff',
        message: 'please choose the difficulty of the topic:',
        default: 'easy',
        choices: ['easy', 'medium', 'hard'],
      },
    ])
    // const {} = res
    log('开始创建题目')
    createTopic(name, res)
  })

program.parse(process.argv)
