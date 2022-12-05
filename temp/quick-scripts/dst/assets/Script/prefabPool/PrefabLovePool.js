
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/prefabPool/PrefabLovePool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwcmVmYWJQb29sXFxQcmVmYWJMb3ZlUG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFrRDtBQUU1QyxJQUFBLGtCQUFxQyxFQUFuQyxvQkFBTyxFQUFFLHNCQUEwQixDQUFDO0FBRzVDO0lBREE7UUFHSSxXQUFNLEdBQWMsSUFBSSxDQUFDO1FBRXpCLFNBQUksR0FBVyxDQUFDLENBQUM7UUFFakIsZ0JBQVcsR0FBZ0IsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLDJCQUFZLENBQUMsQ0FBQztJQTBCN0QsQ0FBQztJQXhCRyw2QkFBSSxHQUFKO1FBQ0ksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDaEMsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbEM7SUFDTCxDQUFDO0lBRUQsNEJBQUcsR0FBSDtRQUNJLElBQUksWUFBWSxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQzdCLFlBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ3pDO2FBQU07WUFDSCxZQUFZLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDOUM7UUFDRCxPQUFPLFlBQVksQ0FBQztJQUN4QixDQUFDO0lBRUQsNEJBQUcsR0FBSCxVQUFJLGlCQUFpQjtRQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBN0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7a0RBQ0s7SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztnREFDSjtJQUpQLGNBQWM7UUFEM0IsT0FBTyxDQUFDLGdCQUFnQixDQUFDO09BQ1osY0FBYyxDQWdDM0I7SUFBRCxxQkFBQztDQWhDRCxBQWdDQyxJQUFBO0FBaENhLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtWb1ByZWZhYkxvdmV9IGZyb20gXCIuLi9ub2RlL1ZvUHJlZmFiTG92ZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiUHJlZmFiTG92ZVBvb2xcIilcclxuZXhwb3J0ICBjbGFzcyBQcmVmYWJMb3ZlUG9vbCB7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBzaXplOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHRoZUxvdmVQb29sOiBjYy5Ob2RlUG9vbCA9IG5ldyBjYy5Ob2RlUG9vbChWb1ByZWZhYkxvdmUpO1xyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNpemU7ICsraSkge1xyXG4gICAgICAgICAgICBsZXQgbm9kZUxvdmUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYik7XHJcbiAgICAgICAgICAgIHRoaXMudGhlTG92ZVBvb2wucHV0KG5vZGVMb3ZlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KCkge1xyXG4gICAgICAgIGxldCB2b0xvdmVQcmVmYWIgPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLnRoZUxvdmVQb29sLnNpemUoKSA+IDApIHtcclxuICAgICAgICAgICAgdm9Mb3ZlUHJlZmFiID0gdGhpcy50aGVMb3ZlUG9vbC5nZXQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2b0xvdmVQcmVmYWIgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2b0xvdmVQcmVmYWI7XHJcbiAgICB9XHJcblxyXG4gICAgcHV0KHRoZUxvdmVQcmVmYWJQb29sKSB7XHJcbiAgICAgICAgdGhpcy50aGVMb3ZlUG9vbC5wdXQodGhlTG92ZVByZWZhYlBvb2wpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMudGhlTG92ZVBvb2wuY2xlYXIoKTtcclxuICAgIH1cclxufVxyXG4iXX0=