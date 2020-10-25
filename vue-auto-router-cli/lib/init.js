const { promisify } = require('util')
const figlet = promisify(require('figlet'))
const clear = require('clear')
const chalk = require('chalk')
chalk.level = 1
const log = content => console.log(chalk.green(content))
const { clone } = require('./download')
const spawn = async (...args) => {
  const {spawn} = require('child_process')
  return new Promise(resolve=>{
    const proc = spawn(...args)
    proc.stdout.pipe(process.stdout)
    proc.stderr.pipe(process.stderr)
    proc.on('close',()=>{
      resolve()
    })
  })
}
module.exports = async name => {
  // 打印欢迎界面
  clear()
  const data = await figlet('MYN WELCOME')
  log(data)

  // 克隆GitHub上的项目
  log(`(*^▽^*) 创建项目: ${name}`)
  await clone('github:maoyining/VueDemo',name)

  // 自动安装依赖
  log('安装依赖...')
  await spawn(
    'cnpm',
    ['install'],
    {
      cwd: `./${name}/my-project`,
      shell: process.platform === 'win32'
    }
  )
  log(`OK 安装完成`)
}