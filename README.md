# JSCPanelManager

javascript version of https://github.com/simon387/CPanelManager

Why javascript and no more a full java solution? was bored about jaunt being closed source

## what is that?

It's an example of full automation of the famous cpanel graphic tool. It changes the DNS IP of a given protocol (www, ftp, ecc).

## requirements

+ ```sudo npm install phantomjs -g```
+ ```sudo npm install casperjs -g```
+ adding ```--unsafe-perm=true --allow-root``` can helps sometime

## execution

+ ```casperjs --verbose --log-level=debug --ignore-ssl-errors=true --ssl-protocol=any jscpanelmanager.js```
+ without the ```--ignore-ssl-errors=true``` flag script may fails
+ ```config.js``` format:

  ```js
  var config = {
    'checkipUrl': 'http://checkip.amazonaws.com/',
    'checkipTag': 'pre',
    'proxy': '',
    'url': 'https://cp.tophost.it/',
    'httpAuthUser': '',
    'httpAuthPass': '',
    'editDNSElement': 'body > table:nth-child(4) > tbody > tr:nth-child(1) > td:nth-child(4) > p:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(4) > a',
    'editRecordElement': '#div-main > table > tbody > tr > td:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(8) > td:nth-child(5) > a',
    'recordInputBox': '#td-label2 > input',
  }
  ```
+ example of bash running script: ```sh run.sh```

## shell output example
```bash
[info] [phantom] Starting...
[info] [phantom] Running suite: 8 steps
[debug] [phantom] opening url: http://checkip.amazonaws.com/, HTTP GET
[debug] [phantom] Navigation requested: url=http://checkip.amazonaws.com/, type=Other, willNavigate=true, isMainFrame=true
[debug] [phantom] url changed to "http://checkip.amazonaws.com/"
[debug] [phantom] Successfully injected Casper client-side utilities
[info] [phantom] Step anonymous 2/8 http://checkip.amazonaws.com/ (HTTP 200)
[info] [phantom] Step anonymous 2/8: done in 409ms.
[debug] [phantom] opening url: https://cp.tophost.it/, HTTP GET
[debug] [phantom] Navigation requested: url=https://cp.tophost.it/, type=Other, willNavigate=true, isMainFrame=true
[debug] [phantom] Navigation requested: url=https://cp.tophost.it/, type=Other, willNavigate=true, isMainFrame=true
[debug] [phantom] url changed to "https://cp.tophost.it/"
[debug] [phantom] Successfully injected Casper client-side utilities
[info] [phantom] Step anonymous 4/8 https://cp.tophost.it/ (HTTP 200)
[info] [phantom] Step anonymous 4/8: done in 3279ms.
[info] [phantom] Step anonymous 5/8 https://cp.tophost.it/ (HTTP 200)
[debug] [phantom] Mouse event 'mousedown' on selector: body > table:nth-child(3) > tbody > tr:nth-child(1) > td:nth-child(4) > p:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(4) > a
[debug] [phantom] Mouse event 'mouseup' on selector: body > table:nth-child(3) > tbody > tr:nth-child(1) > td:nth-child(4) > p:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(4) > a
[debug] [phantom] Mouse event 'click' on selector: body > table:nth-child(3) > tbody > tr:nth-child(1) > td:nth-child(4) > p:nth-child(2) > table:nth-child(2) > tbody > tr:nth-child(2) > td:nth-child(4) > a
[debug] [phantom] Navigation requested: url=https://cp.tophost.it/dnsjump.php, type=LinkClicked, willNavigate=true, isMainFrame=true
[info] [phantom] Step anonymous 5/8: done in 3308ms.
[debug] [phantom] url changed to "https://cp.tophost.it/dnsjump.php"
[debug] [phantom] Navigation requested: url=https://ns1.th.seeweb.it/dnscp/, type=FormSubmitted, willNavigate=true, isMainFrame=true
[warning] [phantom] Loading resource failed with status=fail (HTTP 200): https://ns1.th.seeweb.it/dnscp/
[debug] [phantom] Successfully injected Casper client-side utilities
[debug] [phantom] url changed to "https://ns1.th.seeweb.it/dnscp/"
[debug] [phantom] Successfully injected Casper client-side utilities
[info] [phantom] Step anonymous 6/8 https://ns1.th.seeweb.it/dnscp/ (HTTP 200)
[debug] [phantom] Mouse event 'mousedown' on selector: #div-main > table > tbody > tr > td:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(8) > td:nth-child(5) > a
[debug] [phantom] Mouse event 'mouseup' on selector: #div-main > table > tbody > tr > td:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(8) > td:nth-child(5) > a
[debug] [phantom] Mouse event 'click' on selector: #div-main > table > tbody > tr > td:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(8) > td:nth-child(5) > a
[info] [phantom] Step anonymous 6/8: done in 7101ms.
[debug] [phantom] Navigation requested: url=https://ns1.th.seeweb.it/dnscp/index.php?page=edit_record, type=FormSubmitted, willNavigate=true, isMainFrame=true
[debug] [phantom] url changed to "https://ns1.th.seeweb.it/dnscp/index.php?page=edit_record"
[debug] [phantom] Successfully injected Casper client-side utilities
[info] [phantom] Step anonymous 7/8 https://ns1.th.seeweb.it/dnscp/index.php?page=edit_record (HTTP 200)
[debug] [phantom] Mouse event 'mousedown' on selector: #td-label2 > input
[debug] [phantom] Mouse event 'mouseup' on selector: #td-label2 > input
[debug] [phantom] Mouse event 'click' on selector: #td-label2 > input
[info] [phantom] Step anonymous 7/8: done in 7356ms.
[debug] [phantom] Navigation requested: url=https://ns1.th.seeweb.it/dnscp/index.php?page=edit_record, type=FormSubmitted, willNavigate=true, isMainFrame=true
[debug] [phantom] Navigation requested: url=https://ns1.th.seeweb.it/dnscp/index.php, type=FormSubmitted, willNavigate=true, isMainFrame=true
[debug] [phantom] url changed to "https://ns1.th.seeweb.it/dnscp/index.php"
[debug] [phantom] Successfully injected Casper client-side utilities
[info] [phantom] Step anonymous 8/8 https://ns1.th.seeweb.it/dnscp/index.php (HTTP 200)
[debug] [phantom] Mouse event 'mousedown' on selector: #div-main > table > tbody > tr > td:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(8) > td:nth-child(5) > a
[debug] [phantom] Mouse event 'mouseup' on selector: #div-main > table > tbody > tr > td:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(8) > td:nth-child(5) > a
[debug] [phantom] Mouse event 'click' on selector: #div-main > table > tbody > tr > td:nth-child(2) > table:nth-child(3) > tbody > tr:nth-child(8) > td:nth-child(5) > a
[info] [phantom] Step anonymous 8/8: done in 7629ms.
[debug] [phantom] Navigation requested: url=https://ns1.th.seeweb.it/dnscp/index.php?page=edit_record, type=FormSubmitted, willNavigate=true, isMainFrame=true
[debug] [phantom] url changed to "https://ns1.th.seeweb.it/dnscp/index.php?page=edit_record"
[debug] [phantom] Successfully injected Casper client-side utilities
[info] [phantom] Done 8 steps in 7830ms
[debug] [phantom] Navigation requested: url=about:blank, type=Other, willNavigate=true, isMainFrame=true
[debug] [phantom] url changed to "about:blank"
```
