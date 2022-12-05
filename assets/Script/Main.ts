import {VoPrefabImg} from "./node/VoPrefabImg";
import { PoolMgr } from "./mgr/PoolMgr";
import { VoPrefabLove } from "./node/VoPrefabLove";

export var SumImgNum = 61
const {ccclass, property} = cc._decorator;

@ccclass
export class Main extends cc.Component {
    @property(cc.Sprite)
    imgBg:cc.Sprite;

    @property(cc.Animation)
    aniClick:cc.Animation

    @property(cc.Animation)
    aniLight:cc.Animation

    private loadedResCount: number = 0;
    private clickSumNum:number = 0;
    
    start () {
        let loadAssets = []
        for(let i = 0; i < SumImgNum; ++i){
            let voUrl = {url:"./imgs/voImg("+ i +")", type:cc.SpriteFrame}
            loadAssets.push(voUrl)
        }

        for(let i = 0; i < loadAssets.length; ++i){
            cc.loader.loadRes(loadAssets[i].url, loadAssets[i].type, this.onLoadComplete.bind(this));
        }

        let show = cc.fadeIn(5)
        this.imgBg.node.runAction(            
            cc.sequence(
                show,
                cc.callFunc(()=>{
                    let show = cc.fadeIn(2)
                    this.aniClick.node.runAction(show)
                    this.aniClick.play()
                })
        ))
    }

    private onBgClick(EventType){
        if(this.loadedResCount < SumImgNum){
            return;
        }
        
        if(this.aniClick.node.opacity == 255){
            this.aniClick.node.opacity = 0
        }

        this.clickSumNum += 1;
        let worldPoint = EventType.getLocation()
        let love:VoPrefabLove = PoolMgr.instance.getVoLovePrefab();
        love.getComponent(cc.ParticleSystem).node.parent = this.imgBg.node;
        love.getComponent(cc.ParticleSystem).node.setPosition(worldPoint.x , worldPoint.y); 

        let img:VoPrefabImg = PoolMgr.instance.getVoImg();
        img.getComponent("VoPrefabImg").node.parent = this.imgBg.node;  
        img.getComponent("VoPrefabImg").node.setPosition(worldPoint.x , worldPoint.y);    
    }

    private onLoadComplete(err, res){
        this.loadedResCount += 1;    
        if(err){
            console.log(err);
        }else{
            console.log( String("加载资源 " + res._name +    " , no." +this.loadedResCount) );
        }

        if(this.loadedResCount >= SumImgNum){
            this.imgBg.node.on(cc.Node.EventType.TOUCH_START, this.onBgClick, this) 
        }
    }
}

