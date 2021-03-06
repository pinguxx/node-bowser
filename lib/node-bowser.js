//Copyright (C) 2012  Ivan Torres -MrPix
var NBOWSER;
module.exports = NBOWSER = function(req){
    this._agent = req.header ? req.header('user-agent') : req.headers['user-agent'].toLowerCase();
    this._ismobile = (/iphone|ipod|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(this._agent));
    this._istablet = (/ipad|android 3|sch-i800|playbook|xoom|tablet|kindle|gt-p1000|sgh-t849|shw-m180s|a510|a511|a100|dell streak|silk/i.test(this._agent));
};
NBOWSER.prototype.isMobile = function(){
    return this._ismobile;
};
NBOWSER.prototype.isTablet = function(){
    return this._istablet;
};
NBOWSER.prototype.isTouch = function(){
    return (/iphone|ipod|android/i.test(this._agent));
};
NBOWSER.prototype.isDesktop = function(){
    return !(this._ismobile || this._istablet);
};