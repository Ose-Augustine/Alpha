import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";

async function loadHumanoid() {
    const loader = new FBXLoader(); 
    
    // Load the humanoid
    const humanoidData = await loader.loadAsync('/assets/Ch36_nonPBR.fbx')
    console.log('human', humanoidData);
}
export { loadHumanoid }; 
