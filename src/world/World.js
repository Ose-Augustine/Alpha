
import { createCamera } from './components/camera'
import { createMesh } from './components/meshes';
import { createLights } from './components/lights';
import { createScene } from './components/scene';
import { loadHumanoid } from './components/humanoid/humanoid';
import { createTexts } from './components/projector/text';
import { Cube } from './components/projector/Cube';

import { createControls } from './systems/controls';
import { createRenderer } from './systems/renderer';
import { Resizer } from './systems/Resizer';
import { Loop } from './systems/loop';
import { animate } from './systems/animations';

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
        const {hemispherelight, directionLight, introLight, backgroundLight, modelLIght} = createLights();
        const {background, foreground} = createMesh(); 
        const cube = new Cube(); 

        const start = {x:-40, y:15, z:3}
        const target = {x:80, y:15, z:3}
        const intro = animate(start, target, 20000, introLight);
       // intro.delay(7000)
        intro.start(); 

        //loop.updatables.push(controls);

        // scene.add(hemispherelight, directionLight); 
        scene.add(introLight,backgroundLight,modelLIght, background, foreground); 
        const resizer = new Resizer (container, camera, renderer);

    }

    async init() {
        const data = await loadHumanoid(); 
        const text = await createTexts(); 
        text.position.x = -38
        loop.updatables.push(data)
        console.log(loop.updatables)
        scene.add(data, text)
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