var fs = require('fs')
var rx = require('rx')
var console = require('./colorConsole')
var node
var fileMap = []

function generate(name) {
	node = name;
	from('Activity.java', 'Contract.java', 'Presenter.java', 'ViewWrapper.java')
		.map(read())
		.map(replace())
		.doOnNext(write())
		.subscribe(next(), error())
}

function from() {
	return rx.Observable.from(arguments);
}

function read() {
	return function(templateName) {
		fileMap[0] = templateName
		fileMap[1] = fs.readFileSync("./templates/" + templateName)
		return fileMap
	}
}

function replace() {
	return function(contentMap) {
		contentMap[1] = contentMap[1].toString().replace(/\$/g, node)
		return contentMap
	}
}

function write() {
	return function(modifiedContentMap) {
		if (fs.existsSync('./' + node + modifiedContentMap[0])) {
			throw new Error('File is exists')
		}
		try {
			fs.writeFileSync('./' + node + modifiedContentMap[0],
				modifiedContentMap[1])
		} catch (error) {
			throw error
		}
	}
}

function next() {
	return function(x) {
		console.info("success ")
	}
}

function error(err) {
	return function(err) {
		console.error(err.toString())
	}
}

exports.generateCode = generate