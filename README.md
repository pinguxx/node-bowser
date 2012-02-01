# Bowser

Small module to test if the browser is desktop, mobile, tablet and touch device

## Install

npm install bowser

## Usage

var bowser = require('bowser');
var bt = new bowser(req);

bt.isMobile();
bt.isTablet();
bt.isTouch();
bt.isDesktop();

## Help

it goes against some browser names, you can help to extend the list

## Test
`bowser.js` is tested with vows

node test/main.js, using vows

## License

  Copyright (C) 2011  Ivan Torres -MrPix

  See license