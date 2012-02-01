# Bowser

Small module to test if the browser is desktop, mobile, tablet and touch device

## Install
``` bash
npm install bowser
```
## Usage

bowser have some methods available

* `bowser.isMobile();` : returns true if its mobile
* `bowser.isTablet();` : returns true if its a tablet
* `bowser.isTouch();` : returns true if its android, iphone, ipod
* `bowser.isDesktop();` : returns true if its not mobile and not tablet

## Examples

    var bowser = require('bowser');
    //req can be node request or connect/express request
    var bt = new bowser(req);

    bt.isMobile();
    bt.isTablet();
    bt.isTouch();
    bt.isDesktop();

## Help

it goes against some browser names, you can help to extend the list

## Test
`bowser.js` is tested with vows

``` bash
node test/main.js
```
using vows

## License

  Copyright (C) 2011  Ivan Torres -MrPix

  See license