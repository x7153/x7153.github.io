
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '96929vsrvVBhpauLT8LW7L+', 'Main');
// Script/Main.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var PoolMgr_1 = require("./mgr/PoolMgr");
exports.SumImgNum = 61;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loadedResCount = 0;
        _this.clickSumNum = 0;
        return _this;
    }
    Main.prototype.start = function () {
        var _this = this;
        var loadAssets = [];
        for (var i = 0; i < exports.SumImgNum; ++i) {
            var voUrl = { url: "./imgs/voImg(" + i + ")", type: cc.SpriteFrame };
            loadAssets.push(voUrl);
        }
        for (var i = 0; i < loadAssets.length; ++i) {
            cc.loader.loadRes(loadAssets[i].url, loadAssets[i].type, this.onLoadComplete.bind(this));
        }
        var show = cc.fadeIn(5);
        this.imgBg.node.runAction(cc.sequence(show, cc.callFunc(function () {
            var show = cc.fadeIn(2);
            _this.aniClick.node.runAction(show);
            _this.aniClick.play();
        })));
    };
    Main.prototype.onBgClick = function (EventType) {
        if (this.loadedResCount < exports.SumImgNum) {
            return;
        }
        if (this.aniClick.node.opacity == 255) {
            this.aniClick.node.opacity = 0;
        }
        this.clickSumNum += 1;
        var worldPoint = EventType.getLocation();
        var love = PoolMgr_1.PoolMgr.instance.getVoLovePrefab();
        love.getComponent(cc.ParticleSystem).node.parent = this.imgBg.node;
        love.getComponent(cc.ParticleSystem).node.setPosition(worldPoint.x, worldPoint.y);
        var img = PoolMgr_1.PoolMgr.instance.getVoImg();
        img.getComponent("VoPrefabImg").node.parent = this.imgBg.node;
        img.getComponent("VoPrefabImg").node.setPosition(worldPoint.x, worldPoint.y);
    };
    Main.prototype.onLoadComplete = function (err, res) {
        this.loadedResCount += 1;
        if (err) {
            console.log(err);
        }
        else {
            console.log(String("加载资源 " + res._name + " , no." + this.loadedResCount));
        }
        if (this.loadedResCount >= exports.SumImgNum) {
            this.imgBg.node.on(cc.Node.EventType.TOUCH_START, this.onBgClick, this);
        }
    };
    __decorate([
        property(cc.Sprite)
    ], Main.prototype, "imgBg", void 0);
    __decorate([
        property(cc.Animation)
    ], Main.prototype, "aniClick", void 0);
    __decorate([
        property(cc.Animation)
    ], Main.prototype, "aniLight", void 0);
    Main = __decorate([
        ccclass
    ], Main);
    return Main;
}(cc.Component));
exports.Main = Main;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlDQUF3QztBQUc3QixRQUFBLFNBQVMsR0FBRyxFQUFFLENBQUE7QUFDbkIsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUEwQix3QkFBWTtJQUR0QztRQUFBLHFFQXFFQztRQTFEVyxvQkFBYyxHQUFXLENBQUMsQ0FBQztRQUMzQixpQkFBVyxHQUFVLENBQUMsQ0FBQzs7SUF5RG5DLENBQUM7SUF2REcsb0JBQUssR0FBTDtRQUFBLGlCQXFCQztRQXBCRyxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUE7UUFDbkIsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGlCQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUM7WUFDOUIsSUFBSSxLQUFLLEdBQUcsRUFBQyxHQUFHLEVBQUMsZUFBZSxHQUFFLENBQUMsR0FBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUMsQ0FBQTtZQUM5RCxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQ3pCO1FBRUQsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUM7WUFDdEMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDNUY7UUFFRCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxLQUFL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b290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Vm9QcmVmYWJJbWd9IGZyb20gXCIuL25vZGUvVm9QcmVmYWJJbWdcIjtcclxuaW1wb3J0IHsgUG9vbE1nciB9IGZyb20gXCIuL21nci9Qb29sTWdyXCI7XHJcbmltcG9ydCB7IFZvUHJlZmFiTG92ZSB9IGZyb20gXCIuL25vZGUvVm9QcmVmYWJMb3ZlXCI7XHJcblxyXG5leHBvcnQgdmFyIFN1bUltZ051bSA9IDYxXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIE1haW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGltZ0JnOmNjLlNwcml0ZTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uKVxyXG4gICAgYW5pQ2xpY2s6Y2MuQW5pbWF0aW9uXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcclxuICAgIGFuaUxpZ2h0OmNjLkFuaW1hdGlvblxyXG5cclxuICAgIHByaXZhdGUgbG9hZGVkUmVzQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGNsaWNrU3VtTnVtOm51bWJlciA9IDA7XHJcbiAgICBcclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBsZXQgbG9hZEFzc2V0cyA9IFtdXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IFN1bUltZ051bTsgKytpKXtcclxuICAgICAgICAgICAgbGV0IHZvVXJsID0ge3VybDpcIi4vaW1ncy92b0ltZyhcIisgaSArXCIpXCIsIHR5cGU6Y2MuU3ByaXRlRnJhbWV9XHJcbiAgICAgICAgICAgIGxvYWRBc3NldHMucHVzaCh2b1VybClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsb2FkQXNzZXRzLmxlbmd0aDsgKytpKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMobG9hZEFzc2V0c1tpXS51cmwsIGxvYWRBc3NldHNbaV0udHlwZSwgdGhpcy5vbkxvYWRDb21wbGV0ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzaG93ID0gY2MuZmFkZUluKDUpXHJcbiAgICAgICAgdGhpcy5pbWdCZy5ub2RlLnJ1bkFjdGlvbiggICAgICAgICAgICBcclxuICAgICAgICAgICAgY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICBzaG93LFxyXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2hvdyA9IGNjLmZhZGVJbigyKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pQ2xpY2subm9kZS5ydW5BY3Rpb24oc2hvdylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaUNsaWNrLnBsYXkoKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICApKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25CZ0NsaWNrKEV2ZW50VHlwZSl7XHJcbiAgICAgICAgaWYodGhpcy5sb2FkZWRSZXNDb3VudCA8IFN1bUltZ051bSl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5hbmlDbGljay5ub2RlLm9wYWNpdHkgPT0gMjU1KXtcclxuICAgICAgICAgICAgdGhpcy5hbmlDbGljay5ub2RlLm9wYWNpdHkgPSAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNsaWNrU3VtTnVtICs9IDE7XHJcbiAgICAgICAgbGV0IHdvcmxkUG9pbnQgPSBFdmVudFR5cGUuZ2V0TG9jYXRpb24oKVxyXG4gICAgICAgIGxldCBsb3ZlOlZvUHJlZmFiTG92ZSA9IFBvb2xNZ3IuaW5zdGFuY2UuZ2V0Vm9Mb3ZlUHJlZmFiKCk7XHJcbiAgICAgICAgbG92ZS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLm5vZGUucGFyZW50ID0gdGhpcy5pbWdCZy5ub2RlO1xyXG4gICAgICAgIGxvdmUuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5ub2RlLnNldFBvc2l0aW9uKHdvcmxkUG9pbnQueCAsIHdvcmxkUG9pbnQueSk7IFxyXG5cclxuICAgICAgICBsZXQgaW1nOlZvUHJlZmFiSW1nID0gUG9vbE1nci5pbnN0YW5jZS5nZXRWb0ltZygpO1xyXG4gICAgICAgIGltZy5nZXRDb21wb25lbnQoXCJWb1ByZWZhYkltZ1wiKS5ub2RlLnBhcmVudCA9IHRoaXMuaW1nQmcubm9kZTsgIFxyXG4gICAgICAgIGltZy5nZXRDb21wb25lbnQoXCJWb1ByZWZhYkltZ1wiKS5ub2RlLnNldFBvc2l0aW9uKHdvcmxkUG9pbnQueCAsIHdvcmxkUG9pbnQueSk7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Mb2FkQ29tcGxldGUoZXJyLCByZXMpe1xyXG4gICAgICAgIHRoaXMubG9hZGVkUmVzQ291bnQgKz0gMTsgICAgXHJcbiAgICAgICAgaWYoZXJyKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coIFN0cmluZyhcIuWKoOi9vei1hOa6kCBcIiArIHJlcy5fbmFtZSArICAgIFwiICwgbm8uXCIgK3RoaXMubG9hZGVkUmVzQ291bnQpICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmxvYWRlZFJlc0NvdW50ID49IFN1bUltZ051bSl7XHJcbiAgICAgICAgICAgIHRoaXMuaW1nQmcubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vbkJnQ2xpY2ssIHRoaXMpIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIl19