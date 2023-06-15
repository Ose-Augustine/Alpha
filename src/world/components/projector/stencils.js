import * as THREE from "three";

function stencil (objectColor, stencilRef){
    // CUBE FACE
    const planeGeom = new THREE.PlaneGeometry(14,14,14);
    const stencilMat = new THREE.MeshPhongMaterial({ color: 'white' });
    stencilMat.depthWrite = false;
    stencilMat.stencilWrite = true;
    stencilMat.stencilRef = stencilRef;
    stencilMat.stencilFunc = THREE.AlwaysStencilFunc;
    stencilMat.stencilZPass = THREE.ReplaceStencilOp;
    const stencilMesh = new THREE.Mesh(planeGeom, stencilMat);

    // OBJECT INSIDE CUBE
    const objectMat = new THREE.MeshPhongMaterial({ color: objectColor});
    const geometry = new THREE.BoxGeometry(10,10,10)
    objectMat.stencilWrite = true;
    objectMat.stencilRef = stencilRef;
    objectMat.stencilFunc = THREE.EqualStencilFunc;
    const object = new THREE.Mesh(geometry, objectMat);

    return { stencilMesh, object}
}

export { stencil }
