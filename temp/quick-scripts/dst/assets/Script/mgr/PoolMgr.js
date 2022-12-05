
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/mgr/PoolMgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxtZ3JcXFBvb2xNZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBQTREO0FBQzVELCtEQUE4RDtBQUV4RCxJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQTZCLDJCQUFZO0lBQXpDOztJQXNDQSxDQUFDO2dCQXRDWSxPQUFPO0lBU2hCLHdCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUE7UUFDaEIsU0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDNUIsQ0FBQztJQUVELDJCQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELFlBQVk7SUFDWixpQ0FBZSxHQUFmO1FBQ0ksSUFBSSxRQUFRLEdBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNwQyxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBRUQsWUFBWTtJQUNaLGlDQUFlLEdBQWYsVUFBZ0IsUUFBUTtRQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsMEJBQVEsR0FBUjtRQUNJLElBQUksUUFBUSxHQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDbkMsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUVELDBCQUFRLEdBQVIsVUFBUyxRQUFRO1FBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7SUE5Qk0sZ0JBQVEsR0FBVyxJQUFJLENBQUM7SUFML0I7UUFEQyxRQUFRLENBQUMsK0JBQWMsQ0FBQzs2Q0FDQTtJQUd6QjtRQURDLFFBQVEsQ0FBQyw2QkFBYSxDQUFDOzRDQUNEO0lBTGQsT0FBTztRQURuQixPQUFPO09BQ0ssT0FBTyxDQXNDbkI7SUFBRCxjQUFDO0NBdENELEFBc0NDLENBdEM0QixFQUFFLENBQUMsU0FBUyxHQXNDeEM7QUF0Q1ksMEJBQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmVmYWJJbWdQb29sIH0gZnJvbSBcIi4uL3ByZWZhYlBvb2wvUHJlZmFiSW1nUG9vbFwiO1xyXG5pbXBvcnQgeyBQcmVmYWJMb3ZlUG9vbCB9IGZyb20gXCIuLi9wcmVmYWJQb29sL1ByZWZhYkxvdmVQb29sXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBjbGFzcyBQb29sTWdyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShQcmVmYWJMb3ZlUG9vbClcclxuICAgIGxvdmVQb29sOiBQcmVmYWJMb3ZlUG9vbDtcclxuXHJcbiAgICBAcHJvcGVydHkoUHJlZmFiSW1nUG9vbClcclxuICAgIEltZ1Bvb2w6IFByZWZhYkltZ1Bvb2w7XHJcblxyXG4gICAgc3RhdGljIGluc3RhbmNlOlBvb2xNZ3IgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0UG9vbHMoKVxyXG4gICAgICAgIFBvb2xNZ3IuaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRQb29scygpIHtcclxuICAgICAgICB0aGlzLkltZ1Bvb2wuaW5pdCgpO1xyXG4gICAgICAgIHRoaXMubG92ZVBvb2wuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOiOt+WPlueIseW/g+eDn+iKsemihOWItuS9k1xyXG4gICAgZ2V0Vm9Mb3ZlUHJlZmFiKCkge1xyXG4gICAgICAgIGxldCB2b1ByZWZhYiA9ICB0aGlzLmxvdmVQb29sLmdldCgpO1xyXG4gICAgICAgIHJldHVybiB2b1ByZWZhYjtcclxuICAgIH1cclxuXHJcbiAgICAvLyDlm57mlLbniLHlv4Png5/oirHpooTliLbkvZNcclxuICAgIHB1dFZvTG92ZVByZWZhYih2b1ByZWZhYikge1xyXG4gICAgICAgIHRoaXMubG92ZVBvb2wucHV0KHZvUHJlZmFiKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRWb0ltZygpIHtcclxuICAgICAgICBsZXQgdm9QcmVmYWIgPSAgdGhpcy5JbWdQb29sLmdldCgpO1xyXG4gICAgICAgIHJldHVybiB2b1ByZWZhYjtcclxuICAgIH1cclxuXHJcbiAgICBwdXRWb0ltZyh2b1ByZWZhYikge1xyXG4gICAgICAgIHRoaXMuSW1nUG9vbC5wdXQodm9QcmVmYWIpO1xyXG4gICAgfVxyXG59Il19