import { TextureLoader, AnimationMixer } from "three";
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

async  function setupModel(data) {
    // Access the skinned mesh of the group
    const model = data.children[1] 
    // Create texture loader
    const textureLoader = new TextureLoader(); 
    const loader = new FBXLoader()

    // Load the texture
    const texture = textureLoader.load('/assets/textures/metallic.png'); 
    console.log(data)

    // Change the model's texture
    model.material.map = texture;

    // Animation
    const mixer = new AnimationMixer(data)
    const animation = data.animations[0]
    const animationAction = mixer.clipAction(animation); 
    animationAction.play(); 
    
    data.tick = delta =>  mixer.update(delta)
    data.position.z = 20; 
    data.castShadow = true; 

    return data;
}

export { setupModel }; 