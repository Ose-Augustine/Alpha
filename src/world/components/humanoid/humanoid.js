import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { setupModel } from "../setupModel";
async function loadHumanoid() {
    const loader = new FBXLoader(); 

    // Load the humanoid
    const humanoidData = await loader.loadAsync('/assets/Ch36_nonPBR.fbx');
    const humanoid = setupModel(humanoidData); 
    console.log('human', humanoidData);

    return { humanoid }; 
}
export { loadHumanoid }; 
