
import { SumImgNum } from "../Main";
import { PoolMgr } from "../mgr/PoolMgr";
const {ccclass, property} = cc._decorator;

@ccclass
export class VoPrefabImg extends cc.Component {
    @property(cc.Sprite)
    imgMain:cc.Sprite;

    // get()获取对象池内对象时会调用
    reuse(){
        this.init()
    }

    // put() 收回对象池时会调用
    unuse() {
        this.node.scale = 1;
        this.node.setPosition(0, 0);
        this.node.opacity = 255;
        this.imgMain.node.width = 126
        this.imgMain.node.height = 126        
    }    

    init () {
        let slowMove = cc.moveBy(4, 0, 110);
        let scale = cc.scaleTo(4, 2)
        let fade = cc.fadeOut(5)
        let spawn = cc.spawn(slowMove, scale, fade)

        let self = this
        let imgId = String(Math.floor(Math.random()*(SumImgNum -1 + 1)) + 1); 

        cc.loader.loadRes( "imgs/voImg("+ imgId +")", cc.SpriteFrame,
        function (err, spriteFrame:cc.SpriteFrame) {
            let resImgSize = spriteFrame.getOriginalSize()
            if( resImgSize.width > 126){
                let arg = 126/resImgSize.width

                self.imgMain.node.width = arg * resImgSize.width
                self.imgMain.node.height = arg * resImgSize.height
            }    

            self.imgMain.spriteFrame = spriteFrame;
        })    

        this.imgMain.node.runAction(
            cc.sequence(
                spawn,
                cc.callFunc(()=>{
                    PoolMgr.instance.putVoImg(this.node)}
                )
            )
        )
    }
}
