
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/node/VoPrefabLove.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxub2RlXFxWb1ByZWZhYkxvdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ00sSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUFrQyxnQ0FBWTtJQUE5Qzs7SUFrQkEsQ0FBQztJQWJHLG9CQUFvQjtJQUNwQiw0QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFBO0lBQ2YsQ0FBQztJQUVELGtCQUFrQjtJQUNsQiw0QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsMkJBQUksR0FBSjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDcEMsQ0FBQztJQWREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUM7c0RBQ0k7SUFIdkIsWUFBWTtRQUR4QixPQUFPO09BQ0ssWUFBWSxDQWtCeEI7SUFBRCxtQkFBQztDQWxCRCxBQWtCQyxDQWxCaUMsRUFBRSxDQUFDLFNBQVMsR0FrQjdDO0FBbEJZLG9DQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFZvUHJlZmFiTG92ZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLlBhcnRpY2xlU3lzdGVtKVxyXG4gICAgcGFydGljbGVMb3ZlOiBjYy5QYXJ0aWNsZVN5c3RlbTtcclxuXHJcbiAgICAvLyBnZXQoKeiOt+WPluWvueixoeaxoOWGheWvueixoeaXtuS8muiwg+eUqFxyXG4gICAgcmV1c2UoKXtcclxuICAgICAgICB0aGlzLmluaXQoKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHB1dCgpIOaUtuWbnuWvueixoeaxoOaXtuS8muiwg+eUqFxyXG4gICAgdW51c2UoKSB7XHJcbiAgICAgICAgdGhpcy5wYXJ0aWNsZUxvdmUuc3RvcFN5c3RlbSgpOyAgICAgICAgXHJcbiAgICB9ICAgIFxyXG5cclxuICAgIGluaXQgKCkge1xyXG4gICAgICAgIHRoaXMucGFydGljbGVMb3ZlLnJlc2V0U3lzdGVtKCk7XHJcbiAgICB9XHJcbn1cclxuIl19