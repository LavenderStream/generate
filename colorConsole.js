var colors = require('colors')

// colors.setTheme({
// 	silly: 'rainbow',
// 	input: 'grey',
// 	verbose: 'cyan',
// 	prompt: 'red',
// 	info: 'green',
// 	data: 'blue',
// 	help: 'cyan',
// 	warn: 'yellow',
// 	debug: 'magenta',
// 	error: 'red'
// });

function error(message){
	console.log(message.red)
}

function help(message){
	console.log(message.green)
}

function info(message){
	console.log(message.blue)
}

function debug(message){
	console.log(message.magenta)
}

function warn(message){
	console.log(message.yellow)
}

function wtf(message){
	console.log(message.rainbow)
}

exports.error = error
exports.help = help
exports.warn = warn
exports.debug = debug
exports.wtf = wtf
exports.info = info

