import { Group } from "three";
import { stencil } from "./stencils";
import * as THREE from "three";
class Cube extends Group {
    constructor(){
        super();

        const front = stencil('yellow', 1)

        const back = stencil('green', 2)
        back.stencilMesh.position.z = -14

        const right = stencil('red', 3)
        right.stencilMesh.position.x = 7
        right.stencilMesh.position.z = -7
        right.stencilMesh.rotation.y = Math.PI / 2

        const left = stencil('blue', 4)
        left.stencilMesh.position.x = -7
        left.stencilMesh.position.z = -7
        left.stencilMesh.rotation.y = -Math.PI / 2

        const top = stencil('green', 5)
        top.stencilMesh.position.y = 7;
        top.stencilMesh.rotation.x = -Math.PI / 2
        top.stencilMesh.position.z = -7

        const bottom = stencil('green', 6)
        bottom.stencilMesh.rotation.x = -Math.PI / 2
        bottom.stencilMesh.position.y = -7
        bottom.stencilMesh.position.z = -7

        let faces = [front, back, right, left, top, bottom]

        for(const char of faces){
            this.add(char.stencilMesh, char.object)
        }

        const boxBorderMat = new THREE.MeshPhongMaterial({ color: 0x1A120B });
        boxBorderMat.stencilWrite = true;
        boxBorderMat.stencilRef = 0;
        boxBorderMat.stencilFunc = THREE.EqualStencilFunc;
        const boxBorderGeom = new THREE.BoxGeometry(14,14,14);
        const mesh = new THREE.Mesh(boxBorderGeom, boxBorderMat)
        mesh.position.z = -7
        this.add(mesh); 

        this.scale.multiplyScalar(2)
    
    }
}

export { Cube } 