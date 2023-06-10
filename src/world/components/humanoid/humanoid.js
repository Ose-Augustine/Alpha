import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import { setupModel } from "../setupModel";
async function loadHumanoid() {
    const loader = new FBXLoader(); 
    // Load group
    const humanoidData = await loader.loadAsync('/assets/human.fbx');
    // Scale down group
    humanoidData.scale.setScalar(0.1);
    return humanoidData ; 
}
export { loadHumanoid }; 
