
const {ccclass, property} = cc._decorator;

@ccclass
export class VoPrefabLove extends cc.Component {

    @property(cc.ParticleSystem)
    particleLove: cc.ParticleSystem;

    // get()获取对象池内对象时会调用
    reuse(){
        this.init()
    }

    // put() 收回对象池时会调用
    unuse() {
        this.particleLove.stopSystem();        
    }    

    init () {
        this.particleLove.resetSystem();
    }
}
