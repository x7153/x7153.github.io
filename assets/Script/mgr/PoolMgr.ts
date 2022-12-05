import { PrefabImgPool } from "../prefabPool/PrefabImgPool";
import { PrefabLovePool } from "../prefabPool/PrefabLovePool";

const {ccclass, property} = cc._decorator;

@ccclass
export class PoolMgr extends cc.Component {
    @property(PrefabLovePool)
    lovePool: PrefabLovePool;

    @property(PrefabImgPool)
    ImgPool: PrefabImgPool;

    static instance:PoolMgr = null;

    onLoad () {
        this.initPools()
        PoolMgr.instance = this;
    }

    initPools() {
        this.ImgPool.init();
        this.lovePool.init();
    }

    // 获取爱心烟花预制体
    getVoLovePrefab() {
        let voPrefab =  this.lovePool.get();
        return voPrefab;
    }

    // 回收爱心烟花预制体
    putVoLovePrefab(voPrefab) {
        this.lovePool.put(voPrefab);
    }

    getVoImg() {
        let voPrefab =  this.ImgPool.get();
        return voPrefab;
    }

    putVoImg(voPrefab) {
        this.ImgPool.put(voPrefab);
    }
}