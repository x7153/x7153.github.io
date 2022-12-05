"use strict";
cc._RF.push(module, 'dc0abcyXI1OhJM6ehQq4gay', 'VoPrefabImg');
// Script/node/VoPrefabImg.ts

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
var Main_1 = require("../Main");
var PoolMgr_1 = require("../mgr/PoolMgr");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var VoPrefabImg = /** @class */ (function (_super) {
    __extends(VoPrefabImg, _super);
    function VoPrefabImg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // get()获取对象池内对象时会调用
    VoPrefabImg.prototype.reuse = function () {
        this.init();
    };
    // put() 收回对象池时会调用
    VoPrefabImg.prototype.unuse = function () {
        this.node.scale = 1;
        this.node.setPosition(0, 0);
        this.node.opacity = 255;
        this.imgMain.node.width = 126;
        this.imgMain.node.height = 126;
    };
    VoPrefabImg.prototype.init = function () {
        var _this = this;
        var slowMove = cc.moveBy(4, 0, 110);
        var scale = cc.scaleTo(4, 2);
        var fade = cc.fadeOut(5);
        var spawn = cc.spawn(slowMove, scale, fade);
        var self = this;
        var imgId = String(Math.floor(Math.random() * (Main_1.SumImgNum - 1 + 1)) + 1);
        cc.loader.loadRes("imgs/voImg(" + imgId + ")", cc.SpriteFrame, function (err, spriteFrame) {
            var resImgSize = spriteFrame.getOriginalSize();
            if (resImgSize.width > 126) {
                var arg = 126 / resImgSize.width;
                self.imgMain.node.width = arg * resImgSize.width;
                self.imgMain.node.height = arg * resImgSize.height;
            }
            self.imgMain.spriteFrame = spriteFrame;
        });
        this.imgMain.node.runAction(cc.sequence(spawn, cc.callFunc(function () {
            PoolMgr_1.PoolMgr.instance.putVoImg(_this.node);
        })));
    };
    __decorate([
        property(cc.Sprite)
    ], VoPrefabImg.prototype, "imgMain", void 0);
    VoPrefabImg = __decorate([
        ccclass
    ], VoPrefabImg);
    return VoPrefabImg;
}(cc.Component));
exports.VoPrefabImg = VoPrefabImg;

cc._RF.pop();