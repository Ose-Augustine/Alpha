import * as TWEEN from '@tweenjs/tween.js';

function animate(model) {
    const start = {x:-40, y:15, z:3}
    const target = {x:80, y:15, z:3}
    const introLightTween = new TWEEN.Tween(start).to(target, 8000)
    introLightTween.onUpdate((object) => {model.position.set(object.x, object.y, object.z)});
    introLightTween.start();  
    
}

export { animate }