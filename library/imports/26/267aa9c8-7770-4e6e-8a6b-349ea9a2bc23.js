"use strict";
cc._RF.push(module, '267aanId3BOboprNJ6porwj', 'PrefabImgPool');
// Script/prefabPool/PrefabImgPool.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var VoPrefabImg_1 = require("../node/VoPrefabImg");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PrefabImgPool = /** @class */ (function () {
    function PrefabImgPool() {
        this.prefab = null;
        this.size = 0;
        this.theImgPool = new cc.NodePool(VoPrefabImg_1.VoPrefabImg);
    }
    PrefabImgPool.prototype.init = function () {
        for (var i = 0; i < this.size; ++i) {
            var nodeImg = cc.instantiate(this.prefab);
            this.theImgPool.put(nodeImg);
        }
    };
    PrefabImgPool.prototype.get = function () {
        var theImgPrefabPool = null;
        if (this.theImgPool.size() > 0) {
            theImgPrefabPool = this.theImgPool.get();
        }
        else {
            theImgPrefabPool = cc.instantiate(this.prefab);
        }
        return theImgPrefabPool;
    };
    PrefabImgPool.prototype.put = function (theImgPrefabPool) {
        this.theImgPool.put(theImgPrefabPool);
    };
    PrefabImgPool.prototype.clear = function () {
        this.theImgPool.clear();
    };
    __decorate([
        property(cc.Prefab)
    ], PrefabImgPool.prototype, "prefab", void 0);
    __decorate([
        property(cc.Integer)
    ], PrefabImgPool.prototype, "size", void 0);
    PrefabImgPool = __decorate([
        ccclass("PrefabImgPool")
    ], PrefabImgPool);
    return PrefabImgPool;
}());
exports.PrefabImgPool = PrefabImgPool;

cc._RF.pop();