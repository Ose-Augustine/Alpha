import { MeshStandardMaterial, Mesh, BoxGeometry, MeshPhongMaterial, PlaneGeometry} from "three";

function createMesh() {
    const material = new MeshPhongMaterial({color:'white'}); 
    const geometry = new PlaneGeometry(50,50); 

    const background = new Mesh(geometry, material)
    const foreground = background.clone(); 

    background.position.z = -100;
    background.position.y = 40
    background.scale.x = 6
    background.scale.y = 2

    foreground.rotation.x = -Math.PI / 2;
    foreground.receiveShadow = true;
    //background.scale.multiplyScalar(4)

    return foreground; 
}

export { createMesh };