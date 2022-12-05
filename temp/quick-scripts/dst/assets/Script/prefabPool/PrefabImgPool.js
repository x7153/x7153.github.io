
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/prefabPool/PrefabImgPool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxwcmVmYWJQb29sXFxQcmVmYWJJbWdQb29sLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWdEO0FBRTFDLElBQUEsa0JBQXFDLEVBQW5DLG9CQUFPLEVBQUUsc0JBQTBCLENBQUM7QUFHNUM7SUFEQTtRQUdJLFdBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUVqQixlQUFVLEdBQWdCLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyx5QkFBVyxDQUFDLENBQUM7SUEwQjNELENBQUM7SUF4QkcsNEJBQUksR0FBSjtRQUNJLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQ2hDLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ2hDO0lBQ0wsQ0FBQztJQUVELDJCQUFHLEdBQUg7UUFDSSxJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQzVCLGdCQUFnQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDNUM7YUFBTTtZQUNILGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsT0FBTyxnQkFBZ0IsQ0FBQztJQUM1QixDQUFDO0lBRUQsMkJBQUcsR0FBSCxVQUFJLGdCQUFnQjtRQUNoQixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCw2QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBN0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7aURBQ0s7SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzsrQ0FDSjtJQUpQLGFBQWE7UUFEMUIsT0FBTyxDQUFDLGVBQWUsQ0FBQztPQUNYLGFBQWEsQ0FnQzFCO0lBQUQsb0JBQUM7Q0FoQ0QsQUFnQ0MsSUFBQTtBQWhDYSxzQ0FBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Vm9QcmVmYWJJbWd9IGZyb20gXCIuLi9ub2RlL1ZvUHJlZmFiSW1nXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJQcmVmYWJJbWdQb29sXCIpXHJcbmV4cG9ydCAgY2xhc3MgUHJlZmFiSW1nUG9vbCB7XHJcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxyXG4gICAgcHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBzaXplOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHRoZUltZ1Bvb2w6IGNjLk5vZGVQb29sID0gbmV3IGNjLk5vZGVQb29sKFZvUHJlZmFiSW1nKTtcclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaXplOyArK2kpIHtcclxuICAgICAgICAgICAgbGV0IG5vZGVJbWcgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnByZWZhYik7XHJcbiAgICAgICAgICAgIHRoaXMudGhlSW1nUG9vbC5wdXQobm9kZUltZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldCgpIHtcclxuICAgICAgICBsZXQgdGhlSW1nUHJlZmFiUG9vbCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMudGhlSW1nUG9vbC5zaXplKCkgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoZUltZ1ByZWZhYlBvb2wgPSB0aGlzLnRoZUltZ1Bvb2wuZ2V0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhlSW1nUHJlZmFiUG9vbCA9IGNjLmluc3RhbnRpYXRlKHRoaXMucHJlZmFiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoZUltZ1ByZWZhYlBvb2w7XHJcbiAgICB9XHJcblxyXG4gICAgcHV0KHRoZUltZ1ByZWZhYlBvb2wpIHtcclxuICAgICAgICB0aGlzLnRoZUltZ1Bvb2wucHV0KHRoZUltZ1ByZWZhYlBvb2wpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMudGhlSW1nUG9vbC5jbGVhcigpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==