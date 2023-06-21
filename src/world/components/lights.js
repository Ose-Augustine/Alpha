import { AmbientLight, DirectionalLight, HemisphereLight, SpotLight } from "three";

function createLights() {
    const hemispherelight = new HemisphereLight('white','darkslategray',0.3); 
    const directionLight = new DirectionalLight('white',2); 
    const introLight = new SpotLight('white',0.8,10)
    const backgroundLight = new SpotLight('orange',10, 100); 
    const modelLIght = new SpotLight('white', 0.8, 10)

    backgroundLight.position.set(0,0,1);
    backgroundLight.castShadow = true

    modelLIght.position.z = 25
    modelLIght.position.y = 15

    introLight.castShadow = true
    directionLight.position.set(30,10,10)
    introLight.distance = 25


    return { hemispherelight, directionLight, introLight, backgroundLight, modelLIght}
}

export { createLights };