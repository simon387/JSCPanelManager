# JSCPanelManager

javascript version of https://github.com/simon387/CPanelManager

Why javascript and no more a full java solution? was bored about jaunt being closed source

## requirements

+ ```sudo npm install phantomjs -g```
+ ```sudo npm install casperjs -g```

## execution

+ ```casperjs main.js```
+ ```casperjs --verbose --log-level=debug --ignore-ssl-errors=true --ssl-protocol=any  main.js```
+ ```config.js``` format:

  ```json
  var data = {
    'proxy': '',
    'url': 'https://cp.tophost.it/',
    'httpAuthUser': '',
    'httpAuthPass': '',
  }
  ```
