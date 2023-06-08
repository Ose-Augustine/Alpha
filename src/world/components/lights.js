import { DirectionalLight, HemisphereLight } from "three";

function createLights() {
    const hemispherelight = new HemisphereLight('white', 'darkslategray',7); 
    const directionLight = new DirectionalLight('white', 6); 

    return { hemispherelight, directionLight}
}

export { createLights };