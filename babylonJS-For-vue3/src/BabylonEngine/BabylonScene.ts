// @ts-ignore
import { Scene, Engine,FreeCamera,HemisphericLight,Vector3 ,MeshBuilder} from "@babylonjs/core"
export class BabylonScene {
    scene: Scene; // 场景
    engine: Engine;
    constructor(private canvas: HTMLCanvasElement) {
        this.engine = new Engine(this.canvas, true);
        this.scene = this.CreateScene();
        this.engine.runRenderLoop(() => {
            this.scene.render();
        });
    }
    CreateScene(): Scene {
        const scene = new Scene(this.engine);
        //创建和定位自由摄影机
        const camera = new FreeCamera("camera",
            new Vector3(0, 5, -10), this.scene);
        // 将摄影机定位到场景原点
        camera.setTarget(Vector3.Zero());
        // 这会将相机连接到画布
        camera.attachControl(this.canvas, true);
        // 创建灯光，目标为0,1,0-指向天空
        const light = new HemisphericLight("light",
            new Vector3(0, 1, 0), this.scene);
        // 将灯光调暗一小部分-0到1
        light.intensity = 0.7;
        // 内置“球体”形状。
        const sphere = MeshBuilder.CreateSphere("sphere",
            {diameter: 2, segments: 32}, this.scene);
        // 将球体向上移动其高度的1/2
        // sphere.position.y = 1;
        sphere.position = new Vector3(0, 1, 0);
        // 内置“地面”形状。
        const ground = MeshBuilder.CreateGround("ground",
            {width: 6, height: 6}, this.scene);
        return scene;
    }
}


