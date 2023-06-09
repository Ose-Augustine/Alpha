import { createCamera } from "./components/camera";
import { createScene } from "./components/scene";
import { createLights } from "./components/lights";
import { createMesh } from "./components/meshes";

import { Loop } from "./systems/loop";
import { Resizer } from "./systems/Resizer";
import { createRenderer } from "./systems/renderer";

let loop; 
let camera; 
let scene; 
let renderer; 

class World { 
    constructor(container) {

        camera = createCamera(); 
        scene = createScene(); 
        renderer = createRenderer(); 
        

        const cube = createMesh(); 
        const { hemispherelight, directionLight } = createLights(); 

        scene.add(hemispherelight, directionLight, cube )
        container.append(renderer.domElement); 

        const resizer = new Resizer(container, camera, renderer);
        resizer.onResize = () => {
            this.render; 
        }; 

    }

    render() {
        renderer.render(scene, camera);
    }

  
}

export { World }; 