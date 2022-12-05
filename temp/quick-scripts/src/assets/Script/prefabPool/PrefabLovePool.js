"use strict";
cc._RF.push(module, 'c94eaiR0GtEtrmvwiVKszFN', 'PrefabLovePool');
// Script/prefabPool/PrefabLovePool.ts

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var VoPrefabLove_1 = require("../node/VoPrefabLove");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PrefabLovePool = /** @class */ (function () {
    function PrefabLovePool() {
        this.prefab = null;
        this.size = 0;
        this.theLovePool = new cc.NodePool(VoPrefabLove_1.VoPrefabLove);
    }
    PrefabLovePool.prototype.init = function () {
        for (var i = 0; i < this.size; ++i) {
            var nodeLove = cc.instantiate(this.prefab);
            this.theLovePool.put(nodeLove);
        }
    };
    PrefabLovePool.prototype.get = function () {
        var voLovePrefab = null;
        if (this.theLovePool.size() > 0) {
            voLovePrefab = this.theLovePool.get();
        }
        else {
            voLovePrefab = cc.instantiate(this.prefab);
        }
        return voLovePrefab;
    };
    PrefabLovePool.prototype.put = function (theLovePrefabPool) {
        this.theLovePool.put(theLovePrefabPool);
    };
    PrefabLovePool.prototype.clear = function () {
        this.theLovePool.clear();
    };
    __decorate([
        property(cc.Prefab)
    ], PrefabLovePool.prototype, "prefab", void 0);
    __decorate([
        property(cc.Integer)
    ], PrefabLovePool.prototype, "size", void 0);
    PrefabLovePool = __decorate([
        ccclass("PrefabLovePool")
    ], PrefabLovePool);
    return PrefabLovePool;
}());
exports.PrefabLovePool = PrefabLovePool;

cc._RF.pop();