# Node-bowser

[![Build Status](https://secure.travis-ci.org/pinguxx/node-bowser.png)](http://travis-ci.org/pinguxx/node-bowser)

Small module to test if the browser is desktop, mobile, tablet and touch device

## Install
``` bash
npm install node-bowser
```
## Usage

node-bowser have some methods available

* `node-bowser.isMobile();` : returns true if its mobile
* `node-bowser.isTablet();` : returns true if its a tablet
* `node-bowser.isTouch();` : returns true if its android, iphone, ipod
* `node-bowser.isDesktop();` : returns true if its not mobile and not tablet

## Examples

    var node-bowser = require('node-bowser');
    //req can be node request or connect/express request
    var bt = new node-bowser(req);

    bt.isMobile();
    bt.isTablet();
    bt.isTouch();
    bt.isDesktop();

## Help

it goes against some browser names, you can help to extend the list

## Test
`node-bowser.js` is tested with vows

``` bash
node test/main.js
```
using vows

## License

  See license
  
  <a href="http://www.ipseitycloud.com"><img src="http://ipseitycloud.com/cld/images/ipc_small.png" /></a>