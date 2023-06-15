import { AmbientLight, DirectionalLight, HemisphereLight, SpotLight } from "three";

function createLights() {
    const hemispherelight = new HemisphereLight('white',3); 
    const directionLight = new DirectionalLight('white',2); 
    const spotLight = new SpotLight('white',0.2,20)

    spotLight.castShadow = true


    directionLight.position.set(30,10,10)
    spotLight.position.set( 0, 10, 10);


    return { hemispherelight, directionLight, spotLight}
}

export { createLights };