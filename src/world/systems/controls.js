import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { Vector3 } from 'three';

function createControls(camera, canvas) {
    const controls = new OrbitControls(camera, canvas); 

    controls.enableDamping = true; 
    controls.tick = () => controls.update(); 

    return controls; 

}

export { createControls};