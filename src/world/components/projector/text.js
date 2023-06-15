import { MeshStandardMaterial, Mesh } from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';

async function createTexts() {
    const loader = new FontLoader();
    const font = await loader.loadAsync('/assets/fonts/roboto_medium.json')
    console.log(font);
    const text = new TextGeometry('this is babzo sith ssdfdfdfdfdfsdfsfsadfdfslfdjflskdflsjfdlf kdlfd fo', {
        font:font,
		size: 0.8,
		height: 2,
	})
    const material = new MeshStandardMaterial({color:'white'})
    const mesh = new Mesh(text, material)
    return mesh;
}

export { createTexts };