import { DirectionalLight, HemisphereLight } from "three";

function createLights() {
    const hemispherelight = new HemisphereLight('darkslategray',1); 
    const directionLight = new DirectionalLight('white', 1); 

    return { hemispherelight, directionLight}
}

export { createLights };