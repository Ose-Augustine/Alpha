import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { setupModel } from "../setupModel";
async function loadHumanoid() {
    const loader = new FBXLoader(); 
    // Load group
    const humanoidData = await loader.loadAsync('/assets/animations/standing_w_briefcase.fbx');
    // Scale down group
    humanoidData.scale.setScalar(0.1);
    
    const modifiedData = setupModel(humanoidData); 
    return modifiedData ; 
}
export { loadHumanoid }; 
