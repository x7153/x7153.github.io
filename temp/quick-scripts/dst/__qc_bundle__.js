
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Main');
require('./assets/Script/mgr/PoolMgr');
require('./assets/Script/node/VoPrefabImg');
require('./assets/Script/node/VoPrefabLove');
require('./assets/Script/prefabPool/PrefabImgPool');
require('./assets/Script/prefabPool/PrefabLovePool');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxNYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLHlDQUF3QztBQUc3QixRQUFBLFNBQVMsR0FBRyxFQUFFLENBQUE7QUFDbkIsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUEwQix3QkFBWTtJQUR0QztRQUFBLHFFQXFFQztRQTFEVyxvQkFBYyxHQUFXLENBQUMsQ0FBQztRQUMzQixpQkFBVyxHQUFVLENBQUMsQ0FBQzs7SUF5RG5DLENBQUM7SUF2REcsb0JBQUssR0FBTDtRQUFBLGlCQXFCQztRQXBCRyxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUE7UUFDbkIsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGlCQUFTLEVBQUUsRUFBRSxDQUFDLEVBQUM7WUFDOUIsSUFBSSxLQUFLLEdBQUcsRUFBQyxHQUFHLEVBQUMsZUFBZSxHQUFFLENBQUMsR0FBRSxHQUFHLEVBQUUsSUFBSSxFQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUMsQ0FBQTtZQUM5RCxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQ3pCO1FBRUQsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUM7WUFDdEMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDNUY7UUFFRCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3ZCLElBQUksQ0FBQyxLQUFL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b290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Vm9QcmVmYWJJbWd9IGZyb20gXCIuL25vZGUvVm9QcmVmYWJJbWdcIjtcclxuaW1wb3J0IHsgUG9vbE1nciB9IGZyb20gXCIuL21nci9Qb29sTWdyXCI7XHJcbmltcG9ydCB7IFZvUHJlZmFiTG92ZSB9IGZyb20gXCIuL25vZGUvVm9QcmVmYWJMb3ZlXCI7XHJcblxyXG5leHBvcnQgdmFyIFN1bUltZ051bSA9IDYxXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIE1haW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGltZ0JnOmNjLlNwcml0ZTtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuQW5pbWF0aW9uKVxyXG4gICAgYW5pQ2xpY2s6Y2MuQW5pbWF0aW9uXHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkFuaW1hdGlvbilcclxuICAgIGFuaUxpZ2h0OmNjLkFuaW1hdGlvblxyXG5cclxuICAgIHByaXZhdGUgbG9hZGVkUmVzQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIGNsaWNrU3VtTnVtOm51bWJlciA9IDA7XHJcbiAgICBcclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBsZXQgbG9hZEFzc2V0cyA9IFtdXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IFN1bUltZ051bTsgKytpKXtcclxuICAgICAgICAgICAgbGV0IHZvVXJsID0ge3VybDpcIi4vaW1ncy92b0ltZyhcIisgaSArXCIpXCIsIHR5cGU6Y2MuU3ByaXRlRnJhbWV9XHJcbiAgICAgICAgICAgIGxvYWRBc3NldHMucHVzaCh2b1VybClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsb2FkQXNzZXRzLmxlbmd0aDsgKytpKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMobG9hZEFzc2V0c1tpXS51cmwsIGxvYWRBc3NldHNbaV0udHlwZSwgdGhpcy5vbkxvYWRDb21wbGV0ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBzaG93ID0gY2MuZmFkZUluKDUpXHJcbiAgICAgICAgdGhpcy5pbWdCZy5ub2RlLnJ1bkFjdGlvbiggICAgICAgICAgICBcclxuICAgICAgICAgICAgY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICBzaG93LFxyXG4gICAgICAgICAgICAgICAgY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc2hvdyA9IGNjLmZhZGVJbigyKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYW5pQ2xpY2subm9kZS5ydW5BY3Rpb24oc2hvdylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFuaUNsaWNrLnBsYXkoKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICApKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25CZ0NsaWNrKEV2ZW50VHlwZSl7XHJcbiAgICAgICAgaWYodGhpcy5sb2FkZWRSZXNDb3VudCA8IFN1bUltZ051bSl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYodGhpcy5hbmlDbGljay5ub2RlLm9wYWNpdHkgPT0gMjU1KXtcclxuICAgICAgICAgICAgdGhpcy5hbmlDbGljay5ub2RlLm9wYWNpdHkgPSAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNsaWNrU3VtTnVtICs9IDE7XHJcbiAgICAgICAgbGV0IHdvcmxkUG9pbnQgPSBFdmVudFR5cGUuZ2V0TG9jYXRpb24oKVxyXG4gICAgICAgIGxldCBsb3ZlOlZvUHJlZmFiTG92ZSA9IFBvb2xNZ3IuaW5zdGFuY2UuZ2V0Vm9Mb3ZlUHJlZmFiKCk7XHJcbiAgICAgICAgbG92ZS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pLm5vZGUucGFyZW50ID0gdGhpcy5pbWdCZy5ub2RlO1xyXG4gICAgICAgIGxvdmUuZ2V0Q29tcG9uZW50KGNjLlBhcnRpY2xlU3lzdGVtKS5ub2RlLnNldFBvc2l0aW9uKHdvcmxkUG9pbnQueCAsIHdvcmxkUG9pbnQueSk7IFxyXG5cclxuICAgICAgICBsZXQgaW1nOlZvUHJlZmFiSW1nID0gUG9vbE1nci5pbnN0YW5jZS5nZXRWb0ltZygpO1xyXG4gICAgICAgIGltZy5nZXRDb21wb25lbnQoXCJWb1ByZWZhYkltZ1wiKS5ub2RlLnBhcmVudCA9IHRoaXMuaW1nQmcubm9kZTsgIFxyXG4gICAgICAgIGltZy5nZXRDb21wb25lbnQoXCJWb1ByZWZhYkltZ1wiKS5ub2RlLnNldFBvc2l0aW9uKHdvcmxkUG9pbnQueCAsIHdvcmxkUG9pbnQueSk7ICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25Mb2FkQ29tcGxldGUoZXJyLCByZXMpe1xyXG4gICAgICAgIHRoaXMubG9hZGVkUmVzQ291bnQgKz0gMTsgICAgXHJcbiAgICAgICAgaWYoZXJyKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coIFN0cmluZyhcIuWKoOi9vei1hOa6kCBcIiArIHJlcy5fbmFtZSArICAgIFwiICwgbm8uXCIgK3RoaXMubG9hZGVkUmVzQ291bnQpICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmxvYWRlZFJlc0NvdW50ID49IFN1bUltZ051bSl7XHJcbiAgICAgICAgICAgIHRoaXMuaW1nQmcubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vbkJnQ2xpY2ssIHRoaXMpIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/node/VoPrefabImg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxub2RlXFxWb1ByZWZhYkltZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxnQ0FBb0M7QUFDcEMsMENBQXlDO0FBQ25DLElBQUEsa0JBQW1DLEVBQWxDLG9CQUFPLEVBQUUsc0JBQXlCLENBQUM7QUFHMUM7SUFBaUMsK0JBQVk7SUFBN0M7O0lBaURBLENBQUM7SUE3Q0csb0JBQW9CO0lBQ3BCLDJCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUE7SUFDZixDQUFDO0lBRUQsa0JBQWtCO0lBQ2xCLDJCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFBO1FBQzdCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUE7SUFDbEMsQ0FBQztJQUVELDBCQUFJLEdBQUo7UUFBQSxpQkE4QkM7UUE3QkcsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO1FBQzVCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDeEIsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBRTNDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQTtRQUNmLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBQyxDQUFDLGdCQUFTLEdBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFFckUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUUsYUFBYSxHQUFFLEtBQUssR0FBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFDNUQsVUFBVSxHQUFHLEVBQUUsV0FBMEI7WUFDckMsSUFBSSxVQUFVLEdBQUcsV0FBVyxDQUFDLGVBQWUsRUFBRSxDQUFBO1lBQzlDLElBQUksVUFBVSxDQUFDLEtBQUssR0FBRyxHQUFHLEVBQUM7Z0JBQ3ZCLElBQUksR0FBRyxHQUFHLEdBQUcsR0FBQyxVQUFVLENBQUMsS0FBSyxDQUFBO2dCQUU5QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUE7Z0JBQ2hELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQTthQUNyRDtZQUVELElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUMzQyxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FDdkIsRUFBRSxDQUFDLFFBQVEsQ0FDUCxLQUFLLEVBQ0wsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUNSLGlCQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFBQSxDQUFDLENBQ3hDLENBQ0osQ0FDSixDQUFBO0lBQ0wsQ0FBQztJQTlDRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNGO0lBRlQsV0FBVztRQUR2QixPQUFPO09BQ0ssV0FBVyxDQWlEdkI7SUFBRCxrQkFBQztDQWpERCxBQWlEQyxDQWpEZ0MsRUFBRSxDQUFDLFNBQVMsR0FpRDVDO0FBakRZLGtDQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IFN1bUltZ051bSB9IGZyb20gXCIuLi9NYWluXCI7XHJcbmltcG9ydCB7IFBvb2xNZ3IgfSBmcm9tIFwiLi4vbWdyL1Bvb2xNZ3JcIjtcclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgY2xhc3MgVm9QcmVmYWJJbWcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLlNwcml0ZSlcclxuICAgIGltZ01haW46Y2MuU3ByaXRlO1xyXG5cclxuICAgIC8vIGdldCgp6I635Y+W5a+56LGh5rGg5YaF5a+56LGh5pe25Lya6LCD55SoXHJcbiAgICByZXVzZSgpe1xyXG4gICAgICAgIHRoaXMuaW5pdCgpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHV0KCkg5pS25Zue5a+56LGh5rGg5pe25Lya6LCD55SoXHJcbiAgICB1bnVzZSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuc2NhbGUgPSAxO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbigwLCAwKTtcclxuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDI1NTtcclxuICAgICAgICB0aGlzLmltZ01haW4ubm9kZS53aWR0aCA9IDEyNlxyXG4gICAgICAgIHRoaXMuaW1nTWFpbi5ub2RlLmhlaWdodCA9IDEyNiAgICAgICAgXHJcbiAgICB9ICAgIFxyXG5cclxuICAgIGluaXQgKCkge1xyXG4gICAgICAgIGxldCBzbG93TW92ZSA9IGNjLm1vdmVCeSg0LCAwLCAxMTApO1xyXG4gICAgICAgIGxldCBzY2FsZSA9IGNjLnNjYWxlVG8oNCwgMilcclxuICAgICAgICBsZXQgZmFkZSA9IGNjLmZhZGVPdXQoNSlcclxuICAgICAgICBsZXQgc3Bhd24gPSBjYy5zcGF3bihzbG93TW92ZSwgc2NhbGUsIGZhZGUpXHJcblxyXG4gICAgICAgIGxldCBzZWxmID0gdGhpc1xyXG4gICAgICAgIGxldCBpbWdJZCA9IFN0cmluZyhNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqKFN1bUltZ051bSAtMSArIDEpKSArIDEpOyBcclxuXHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoIFwiaW1ncy92b0ltZyhcIisgaW1nSWQgK1wiKVwiLCBjYy5TcHJpdGVGcmFtZSxcclxuICAgICAgICBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZTpjYy5TcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICBsZXQgcmVzSW1nU2l6ZSA9IHNwcml0ZUZyYW1lLmdldE9yaWdpbmFsU2l6ZSgpXHJcbiAgICAgICAgICAgIGlmKCByZXNJbWdTaXplLndpZHRoID4gMTI2KXtcclxuICAgICAgICAgICAgICAgIGxldCBhcmcgPSAxMjYvcmVzSW1nU2l6ZS53aWR0aFxyXG5cclxuICAgICAgICAgICAgICAgIHNlbGYuaW1nTWFpbi5ub2RlLndpZHRoID0gYXJnICogcmVzSW1nU2l6ZS53aWR0aFxyXG4gICAgICAgICAgICAgICAgc2VsZi5pbWdNYWluLm5vZGUuaGVpZ2h0ID0gYXJnICogcmVzSW1nU2l6ZS5oZWlnaHRcclxuICAgICAgICAgICAgfSAgICBcclxuXHJcbiAgICAgICAgICAgIHNlbGYuaW1nTWFpbi5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgIH0pICAgIFxyXG5cclxuICAgICAgICB0aGlzLmltZ01haW4ubm9kZS5ydW5BY3Rpb24oXHJcbiAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgc3Bhd24sXHJcbiAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIFBvb2xNZ3IuaW5zdGFuY2UucHV0Vm9JbWcodGhpcy5ub2RlKX1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
