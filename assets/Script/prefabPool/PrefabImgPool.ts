import {VoPrefabImg} from "../node/VoPrefabImg";

const { ccclass, property } = cc._decorator;

@ccclass("PrefabImgPool")
export  class PrefabImgPool {
    @property(cc.Prefab)
    prefab: cc.Prefab = null;
    @property(cc.Integer)
    size: number = 0;

    theImgPool: cc.NodePool = new cc.NodePool(VoPrefabImg);

    init() {
        for (let i = 0; i < this.size; ++i) {
            let nodeImg = cc.instantiate(this.prefab);
            this.theImgPool.put(nodeImg);
        }
    }

    get() {
        let theImgPrefabPool = null;
        if (this.theImgPool.size() > 0) {
            theImgPrefabPool = this.theImgPool.get();
        } else {
            theImgPrefabPool = cc.instantiate(this.prefab);
        }
        return theImgPrefabPool;
    }

    put(theImgPrefabPool) {
        this.theImgPool.put(theImgPrefabPool);
    }

    clear() {
        this.theImgPool.clear();
    }
}
