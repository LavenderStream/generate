var program = require('commander');
var colorConsole = require('./colorConsole')

// program
// 	.option('-h, --resume'.green, '简历'.green)
//     .option('-r, --resume'.green, '简历'.green)
//     .option('-l, --language <lang>'.green, '这个语言是我擅长的语言。'.green)
//     .parse(process.argv)

var run= function (obj) {
  if(obj == '-v'){
  	colorConsole.help('version is 1.0.0')
  }
  if(obj == '-h'){
    console.log('Useage:');
    console.log('  -v --version [show version]');
  }
};
//获取除第一个命令以后的参数，使用空格拆分
run(process.argv.slice(2)); 