import { TextureLoader, AnimationMixer } from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

async  function setupModel(data) {
    // Access the skinned mesh of the group
    const model = data.children[0] 
    // Create texture loader
    const textureLoader = new TextureLoader(); 
    const loader = new FBXLoader()
    const animation = await loader.loadAsync('/assets/animations/Walking.fbx'); 
    // Load the texture
    const texture = textureLoader.load('/assets/textures/metallic.png'); 
    //const alphaTexture = textureLoader.load('/assets/textures/roughness.png');
    //const normal = textureLoader.load('/assets/textures/normal.png');
    console.log(data)

    // Change the model's texture
    model.material.map = texture;
    //model.material.alphaMap = alphaTexture;

    // Animation
    const mixer = new AnimationMixer(data)
    const action = mixer.clipAction(animation.animations[0])
    // action.play();
    
    // Transforms
    //data.rotation.y -= Math.PI / 2 
    //data.position.x = 10
    data.position.z = 20; 
    data.castShadow = true; 

    data.tick = delta =>  mixer.update(delta)

    return model;
}

export { setupModel }; 