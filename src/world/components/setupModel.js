import { TextureLoader } from "three";

function setupModel(data) {
    // Access the skinned mesh of the group
    const model = data.children[0] 
    // Create texture loader
    const textureLoader = new TextureLoader(); 
    // Load the texture
    const texture = textureLoader.load('/assets/Aluminum-Scuffed_bl/Aluminum-Scuffed_metallic.png'); 
    // Change the model's texture
    model.material.map = texture; 

    console.log(model)
    return model;
}

export { setupModel }; 