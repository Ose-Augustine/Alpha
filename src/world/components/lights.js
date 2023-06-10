import { DirectionalLight, HemisphereLight } from "three";

function createLights() {
    const hemispherelight = new HemisphereLight('white', 'darkslategray',1); 
    const directionLight = new DirectionalLight('white', 2); 

    return { hemispherelight, directionLight}
}

export { createLights };