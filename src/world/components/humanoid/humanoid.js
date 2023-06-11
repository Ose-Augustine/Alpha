import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { setupModel } from "../setupModel";
async function loadHumanoid() {
    const loader = new FBXLoader(); 
    // Load group
    const humanoidData = await loader.loadAsync('/assets/Push.fbx');
    // Scale down group
    humanoidData.scale.setScalar(0.1);
    
    const children = setupModel(humanoidData); 
    console.log(humanoidData)
    return humanoidData ; 
}
export { loadHumanoid }; 
