import * as TWEEN from '@tweenjs/tween.js';

function animate(model) {
    const start = {x:0, y:20, z:-25}
    const target = {x:0, y:20, z:20}
    const tween = new TWEEN.Tween(start).to(target, 8000)
    tween.onUpdate((object) => {model.position.set(object.x, object.y, object.z)});
    tween.start();  
    
}

export { animate }