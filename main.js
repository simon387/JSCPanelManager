phantom.injectJs( './config.js');	

var x = require('casper').selectXPath;
var casper = require('casper').create({
    verbose: true,
	logLevel: 'debug',
	proxy: config['proxy'],
});

casper.options.viewportSize = {width: 1366, height: 667};
casper.start();
casper.setHttpAuth(config['httpAuthUser'], config['httpAuthPass']);

casper.thenOpen(config['url'], function(status) {

});

casper.then(function() {
	casper.click('body > table:nth-child(3) > tbody > tr:nth-child(1) > td:nth-child(4) > p:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(4) > a');
});

casper.then(function() {
	console.log(this.getHTML());
})

casper.run(function() {
	//this.test.renderResults(true);
	this.exit();
});
