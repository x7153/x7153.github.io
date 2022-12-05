"use strict";
cc._RF.push(module, '89525/BChBGsasZnAZitu1H', 'VoPrefabLove');
// Script/node/VoPrefabLove.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var VoPrefabLove = /** @class */ (function (_super) {
    __extends(VoPrefabLove, _super);
    function VoPrefabLove() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // get()获取对象池内对象时会调用
    VoPrefabLove.prototype.reuse = function () {
        this.init();
    };
    // put() 收回对象池时会调用
    VoPrefabLove.prototype.unuse = function () {
        this.particleLove.stopSystem();
    };
    VoPrefabLove.prototype.init = function () {
        this.particleLove.resetSystem();
    };
    __decorate([
        property(cc.ParticleSystem)
    ], VoPrefabLove.prototype, "particleLove", void 0);
    VoPrefabLove = __decorate([
        ccclass
    ], VoPrefabLove);
    return VoPrefabLove;
}(cc.Component));
exports.VoPrefabLove = VoPrefabLove;

cc._RF.pop();