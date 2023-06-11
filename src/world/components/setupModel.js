import { TextureLoader, AnimationMixer } from "three";

function setupModel(data) {
    // Access the skinned mesh of the group
    const model = data.children[0] 
    // Create texture loader
    const textureLoader = new TextureLoader(); 
    // Load the texture
    const texture = textureLoader.load('/assets/textures/metallic.png'); 
    // Change the model's texture
    model.material.map = texture; 

    // Animation
    const mixer = new AnimationMixer(data)
    const action = mixer.clipAction(data.animations[1])
    action.play();
    
    data.tick = delta => mixer.update(delta)

    return model;
}

export { setupModel }; 