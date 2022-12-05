
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