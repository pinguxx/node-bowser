//Copyright (C) 2011  Ivan Torres -MrPix
/**
 * 
 * Controller testing
 * 
*/
var vows = require('vows'),
    assert = require('assert'),
    bowser = require('../lib/bowser.js');

exports.test = vows.describe('check user agent').addBatch({
    'check mobile' : {
        topic : function(){ 
            var req = {headers : {'user-agent' : "iphone"}};
            return new bowser(req);
        },
        'result its iphone' : function(bowser){
            assert.isTrue(bowser.isMobile());
        },
        'and its not desktop' : function(bowser){
            assert.isFalse(bowser.isDesktop());
        }
    },
    'check tablet' : {
        topic : function(){ 
            var req = {headers : {'user-agent' : "ipad"}};
            return new bowser(req);
        },
        'result its tablet' : function(bowser){
            assert.isTrue(bowser.isTablet());
        },
        'and its not desktop' : function(bowser){
            assert.isFalse(bowser.isDesktop());
        }
    },
    'check touch' : {
        topic : function(){ 
            var req = {headers : {'user-agent' : "iphone"}};
            return new bowser(req);
        },
        'result its touch' : function(bowser){
            assert.isTrue(bowser.isTouch());
        },
        'and its not desktop' : function(bowser){
            assert.isFalse(bowser.isDesktop());
        }
    },
    'check android' : {
        topic : function(){ 
            var req = {headers : {'user-agent' : "android"}};
            return new bowser(req);
        },
        'result its android' : function(bowser){
            assert.isTrue(bowser.isMobile());
        },
        'and its not desktop' : function(bowser){
            assert.isFalse(bowser.isDesktop());
        }
    },
    'check android tablet' : {
        topic : function(){ 
            var req = {headers : {'user-agent' : "xoom"}};
            return new bowser(req);
        },
        'result its android tablet' : function(bowser){
            assert.isTrue(bowser.isTablet());
        },
        'and its not desktop' : function(bowser){
            assert.isFalse(bowser.isDesktop());
        }
    }
});