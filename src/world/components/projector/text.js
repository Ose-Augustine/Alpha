import { MeshStandardMaterial,MeshBasicMaterial ,Mesh } from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

async function createTexts() {
    const loader = new FontLoader();
    const font = await loader.loadAsync('/assets/fonts/roboto_medium.json')
    console.log(font);
    const text = new TextGeometry('Bahdman Babzo', {
        font:font,
		size: 7,
		height: 2,
	})
    const material = new MeshStandardMaterial({color:'white'})
    const mesh = new Mesh(text, material)
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    return mesh;
}

export { createTexts };