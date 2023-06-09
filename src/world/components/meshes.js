import { MeshStandardMaterial, Mesh, BoxGeometry} from "three";

function createMesh() {
    const geometry = new BoxGeometry(10,10,10); 
    const material = new MeshStandardMaterial({color:'red'}); 

    const mesh = new Mesh(geometry, material); 

    return mesh; 
}

export { createMesh };