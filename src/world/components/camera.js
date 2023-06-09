import { PerspectiveCamera } from "three";

function createCamera() {
    let camera = new PerspectiveCamera(45, 1, 0.1, 1000); 
    // Set camera far from cube
    camera.position.z =  60; 

    return camera; 
}

export { createCamera }