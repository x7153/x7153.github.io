"use strict";
cc._RF.push(module, '3470fjd3BVHZIuPOiI579kY', 'PoolMgr');
// Script/mgr/PoolMgr.ts

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
var PrefabImgPool_1 = require("../prefabPool/PrefabImgPool");
var PrefabLovePool_1 = require("../prefabPool/PrefabLovePool");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PoolMgr = /** @class */ (function (_super) {
    __extends(PoolMgr, _super);
    function PoolMgr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PoolMgr_1 = PoolMgr;
    PoolMgr.prototype.onLoad = function () {
        this.initPools();
        PoolMgr_1.instance = this;
    };
    PoolMgr.prototype.initPools = function () {
        this.ImgPool.init();
        this.lovePool.init();
    };
    // 获取爱心烟花预制体
    PoolMgr.prototype.getVoLovePrefab = function () {
        var voPrefab = this.lovePool.get();
        return voPrefab;
    };
    // 回收爱心烟花预制体
    PoolMgr.prototype.putVoLovePrefab = function (voPrefab) {
        this.lovePool.put(voPrefab);
    };
    PoolMgr.prototype.getVoImg = function () {
        var voPrefab = this.ImgPool.get();
        return voPrefab;
    };
    PoolMgr.prototype.putVoImg = function (voPrefab) {
        this.ImgPool.put(voPrefab);
    };
    var PoolMgr_1;
    PoolMgr.instance = null;
    __decorate([
        property(PrefabLovePool_1.PrefabLovePool)
    ], PoolMgr.prototype, "lovePool", void 0);
    __decorate([
        property(PrefabImgPool_1.PrefabImgPool)
    ], PoolMgr.prototype, "ImgPool", void 0);
    PoolMgr = PoolMgr_1 = __decorate([
        ccclass
    ], PoolMgr);
    return PoolMgr;
}(cc.Component));
exports.PoolMgr = PoolMgr;

cc._RF.pop();