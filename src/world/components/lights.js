import { AmbientLight, DirectionalLight, HemisphereLight, SpotLight } from "three";

function createLights() {
    const hemispherelight = new HemisphereLight('white',3); 
    const directionLight = new DirectionalLight('white',2); 
    const spotLight = new SpotLight('white',0.5,40)

    spotLight.castShadow = true
    spotLight.tick = (delta) => {
        spotLight.position.x += 0.2; 
    }
    directionLight.position.set(30,10,10)
    spotLight.position.set( -40, 10, 10);


    return { hemispherelight, directionLight, spotLight}
}

export { createLights };