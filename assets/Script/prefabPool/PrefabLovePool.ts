import {VoPrefabLove} from "../node/VoPrefabLove";

const { ccclass, property } = cc._decorator;

@ccclass("PrefabLovePool")
export  class PrefabLovePool {
    @property(cc.Prefab)
    prefab: cc.Prefab = null;
    @property(cc.Integer)
    size: number = 0;

    theLovePool: cc.NodePool = new cc.NodePool(VoPrefabLove);

    init() {
        for (let i = 0; i < this.size; ++i) {
            let nodeLove = cc.instantiate(this.prefab);
            this.theLovePool.put(nodeLove);
        }
    }

    get() {
        let voLovePrefab = null;
        if (this.theLovePool.size() > 0) {
            voLovePrefab = this.theLovePool.get();
        } else {
            voLovePrefab = cc.instantiate(this.prefab);
        }
        return voLovePrefab;
    }

    put(theLovePrefabPool) {
        this.theLovePool.put(theLovePrefabPool);
    }

    clear() {
        this.theLovePool.clear();
    }
}
