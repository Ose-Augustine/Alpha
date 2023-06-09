import { Clock } from "three";

const clock = new Clock();

class Loop {
    constructor(camera, scene, renderer) {
        this.camera = camera; 
        this.scene = scene;
        this.renderer = renderer;
        this.updatables = []; 
    }

    start() {
        this.renderer.setAnimationLoop(() => {
            this.tick(); 

            this.renderer.render(this.scene, this.camera); 
        })
    }

    stop() {
        this.renderer.setAnimationLoop(null); 
    }

    tick() {
        // Time it took last frame to render
        const delta = clock.getDelta();

        // Execute the tick method of each object 
        // with animation 
        // for(const object of this.updatables) {
        //     object.tick(delta);
        // }

    }
}

export { Loop };