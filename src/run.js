const fs=require('fs')
const path=require('path');
const chalk=require("chalk")
const mkdirp=require("mkdirp");
const inquirer=require('inquirer');
const { config } = require('process');

console.log(1111,process.cwd())
const metaInfo=JSON.parse(fs.readFileSync(path.join(process.cwd(),'meta.json')));
const choices=Object.keys(metaInfo).map(key=>{
  return {
    name: `${key} - ${chalk.gray(metaInfo[key].description)}`,
    value: key
  }
})

const fetchProjectAndWriting=async ({type})=>{
  const path = `${process.cwd()}/temp`
  fs.mkdirSync(path) 
  const writeBase=process.pwd()
  const {branch,git:url,}= metaInfo[type]
  const gitArgs=['clone','-b',branch,url,'--depth=1',]
   
}




const run=async config=>{
  return inquirer.prompt([{
    name: 'type',
    message: '请选择创建脚手架类型',
    type: 'list',
    choices,
  }
  ]).then(answers=>{
    fetchProjectAndWriting(answers)
     
  })
}
run()
module.exports=run