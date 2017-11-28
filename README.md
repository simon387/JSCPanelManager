# JSCPanelManager

javascript version of https://github.com/simon387/CPanelManager

Why javascript and no more a full java solution? was bored about jaunt being closed source

## requirements

+ ```sudo npm install phantomjs -g```
+ ```sudo npm install casperjs -g```

## execution

+ ```casperjs main.js```
+ ```casperjs --verbose --log-level=debug --ignore-ssl-errors=true --ssl-protocol=any main.js```
+ ```config.js``` format:

  ```js
  var config = {
    'checkipUrl': 'http://checkip.amazonaws.com/',
    'proxy': '',
    'url': 'https://cp.tophost.it/',
    'httpAuthUser': '',
    'httpAuthPass': '',
    'editDNSElement': 'body > table:nth-child(3) > tbody > tr:nth-child(1) > td:nth-child(4) > p:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(4) > a',
    'editRecordElement': '#div-main > table > tbody > tr > td:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(8) > td:nth-child(5) > a',
    'recordInputBox': '#td-label2 > input',
  }
  ```
