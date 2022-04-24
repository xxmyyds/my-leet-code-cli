export interface Inquirer {
  cname: string
  ename: string
  url: string
  diff: DIFF
  number: number
}

export type DIFF = 'easy' | 'medium' | 'hard'
