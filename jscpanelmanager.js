phantom.injectJs( './config.js');	

//setup
var localExternalIp = '0.0.0.0'
var casper = require('casper').create({
    verbose: true,
	logLevel: 'debug',
	proxy: config['proxy'],
});
casper.start();

//taking external real IP from amazon
casper.thenOpen(config['checkipUrl'], function(status) {
	localExternalIp = this.getHTML('pre');
});

//setting basic authentication
casper.setHttpAuth(config['httpAuthUser'], config['httpAuthPass']);

//entering site
casper.thenOpen(config['url'], function(status) {
	//
});

//entering DNS config
casper.then(function() {
	casper.click(config['editDNSElement']);
});

//click on edit record
casper.then(function() {
	casper.click(config['editRecordElement']);
})

//setting new record value
casper.then(function() {
	this.sendKeys(config['recordInputBox'], localExternalIp);
});

//click on save record
casper.then(function() {
	casper.click(config['editRecordElement']);
});

casper.run(function() {
	this.exit();
});
