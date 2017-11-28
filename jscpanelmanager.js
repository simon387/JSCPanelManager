phantom.injectJs('./config.js');	

//setup
var localExternalIp;
var casper = require('casper').create({
	proxy: config.proxy,
}).start();

//getting external real IP from amazon
casper.thenOpen(config.checkipUrl, function() {
	localExternalIp = this.getHTML(config.checkipTag);
});

//setting basic authentication
casper.setHttpAuth(config.httpAuthUser, config.httpAuthPass);

//entering site
casper.thenOpen(config.url, function() {});

//click on DNS config
casper.then(function() {
	casper.click(config.editDNSElement);
});

//click on edit record
casper.then(function() {
	casper.click(config.editRecordElement);
})

//setting new record value
casper.then(function() {
	this.sendKeys(config.recordInputBox, localExternalIp);
});

//click on save record
casper.then(function() {
	casper.click(config.editRecordElement);
});

casper.run(function() {
	this.exit();
});