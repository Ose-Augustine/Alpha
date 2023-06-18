import { AmbientLight, DirectionalLight, HemisphereLight, SpotLight } from "three";

function createLights() {
    const hemispherelight = new HemisphereLight('white',3); 
    const directionLight = new DirectionalLight('white',2); 
    const introLight = new SpotLight('white',0.8,10)
    const backgroundLight = new SpotLight('orange',10, 100); 
    //const followLight = introLight.clone(); 

    backgroundLight.position.set(0,0,1);
    backgroundLight.castShadow = true

    introLight.castShadow = true
    introLight.tick = (delta) => {
        // delta = delta * 2
        // introLight.position.z += delta; 
    }
    directionLight.position.set(30,10,10)
    // introLight.position.z = 3
    // introLight.position.y = 15;
    // introLight.position.x = 40;
    //introLight.angle = 45
    introLight.distance = 25


    return { hemispherelight, directionLight, introLight, backgroundLight}
}

export { createLights };