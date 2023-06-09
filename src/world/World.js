import { createCamera } from './components/camera'
import { createMesh } from './components/meshes';
import { createLights } from './components/lights';
import { createScene } from './components/scene';

import { createControls } from './systems/controls';
import { createRenderer } from './systems/renderer';
import { Resizer } from './systems/Resizer';
import { Loop } from './systems/loop';

let scene; 
let camera; 
let renderer; 
let loop; 

class World { 
    constructor(container) {
        camera = createCamera(); 
        scene = createScene();
        renderer = createRenderer();
        loop = new Loop(camera, scene, renderer); 
        container.append(renderer.domElement); 

        const controls = createControls(camera, renderer.domElement); 
        const {hemispherelight, directionLight} = createLights();
        const meshGroup = createMesh(); 


        loop.updatables.push(controls, meshGroup)

        scene.add(hemispherelight, directionLight, meshGroup); 
        
        const resizer = new Resizer (container, camera, renderer);

    }

    render() {
        renderer.render(scene, camera); 
    }    

    start() {
        loop.start();
    }

    stop() {
        loop.stop();
    }

}

export { World };