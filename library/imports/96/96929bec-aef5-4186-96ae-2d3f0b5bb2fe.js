"use strict";
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