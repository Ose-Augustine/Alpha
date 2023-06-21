import * as TWEEN from '@tweenjs/tween.js';

function animate(start, target, duration, model) {
    const introLightTween = new TWEEN.Tween(start).to(target, duration)
    introLightTween.onUpdate((object) => {model.position.set(object.x, object.y, object.z)});

    return introLightTween; 
    // introLightTween.delay(7000)
    // window.onload = () => introLightTween.start() ;

    // const modelLightTween = new TWEEN.Tween({x:0, y:15, z:10}).to({x:0, y:15, z:25}, 4000)
   
    
}

export { animate }