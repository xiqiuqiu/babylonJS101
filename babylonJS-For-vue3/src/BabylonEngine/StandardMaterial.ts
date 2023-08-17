// @ts-ignore
import {
  Scene,
  Engine,
  FreeCamera,
  HemisphericLight,
  Vector3,
  MeshBuilder,
  StandardMaterial,
  Texture
} from '@babylonjs/core'
export class StandardMaterials {
  scene: Scene // 场景
  engine: Engine
  constructor(private canvas: HTMLCanvasElement) {
    this.engine = new Engine(this.canvas, true)
    this.scene = this.CreateScene()
    this.engine.runRenderLoop(() => {
      this.scene.render()
    })
  }
  CreateScene(): Scene {
    const scene = new Scene(this.engine)
    //创建和定位自由摄影机
    const camera = new FreeCamera('camera', new Vector3(0, 4, 6), this.scene)
    // 将摄影机定位到场景原点
    camera.setTarget(Vector3.Zero())
    // 这会将相机连接到画布
    camera.attachControl(this.canvas, true)
    // 设置相机的移动速度
    camera.speed = 0.1
    //使用鼠标滚轮缩放相机
    // camera.wheelPrecision = 50
    // 创建灯光，目标为0,1,0-指向天空
    const light = new HemisphericLight('light', new Vector3(0, 1, 0), this.scene)
    // 将灯光调暗一小部分-0到1
    light.intensity = 0.7
    // 内置“球体”形状。
    const sphere = MeshBuilder.CreateSphere('sphere', { diameter: 2 }, this.scene)
    // 将球体向上移动其高度的1/2
    // sphere.position.y = 1;
    sphere.position = new Vector3(0, 1, 0)
    // 内置“地面”形状。
    const ground = MeshBuilder.CreateGround('ground', { width: 6, height: 6 }, this.scene)

    //为地面添加贴图材质
    ground.material = this.CreateGroundMaterial()
    return scene
  }
  //地面的材质
  CreateGroundMaterial(): StandardMaterial {
    const groundMaterial = new StandardMaterial('groundMaterial', this.scene)

    const uvScale = 4 // 缩放纹理
    const texArray: Texture[] = []
    const diffuseTexture = new Texture('./assets/textures/stone/concrete_floor_02_diff_4k', this.scene)
    console.log(diffuseTexture, ' diffuseTexture')
    groundMaterial.diffuseTexture = diffuseTexture
    // texArray.push(diffuseTexture)

    // const normalTexture = new Texture('/textures/stone/concrete_floor_02_nor_gl_4k', this.scene)
    // groundMaterial.bumpTexture = normalTexture
    // texArray.push(normalTexture)

    // const aoTexture = new Texture('/textures/stone/concrete_floor_02_ao_4k', this.scene)
    // groundMaterial.ambientTexture = aoTexture
    // texArray.push(aoTexture)

    // const specTexture = new Texture('/textures/stone/concrete_floor_02_spec_4k', this.scene)
    // groundMaterial.specularTexture = specTexture
    // texArray.push(specTexture)

    // texArray.forEach((item) => {
    //     item.uScale = uvScale
    //     item.vScale = uvScale
    // })

    return groundMaterial
  }
  // 球体的材质
  CreatesphereMaterial(): StandardMaterial {
    const sphereMaterial = new StandardMaterial('sphereMaterial', this.scene)

    return sphereMaterial
  }
}
