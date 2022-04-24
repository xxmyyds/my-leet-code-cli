/**
 * 实现命令行创建题目
 */
import { program } from 'commander'
import { promisify } from 'util'
import figlet from 'figlet'
import inquirer from 'inquirer'
import { Inquirer } from '../types/index'
import { createTopic } from '../lib/topic'
import { log } from '../lib/helper'
const asyncFiglet = promisify(figlet)

program.version('1.0.0')
program.option('-n --name <type>', 'output name')

async function printLogo() {
  let data: any = await asyncFiglet('Leet-Code')
  log(data)
}

program
  .command('create <name>')
  .description('创建新的题目')
  .action(async (name) => {
    await printLogo()
    log('准备添加新的题目')
    let res = await inquirer.prompt<Inquirer>([
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
