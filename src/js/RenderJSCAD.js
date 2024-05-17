import { arc, 
    circle, 
    cube, 
    cuboid, 
    cylinder, 
    cylinderElliptic, 
    ellipse, 
    ellipsoid, 
    geodesicSphere, 
    line, 
    polygon, 
    polyhedron, 
    rectangle, 
    roundedCuboid, 
    roundedCylinder, 
    roundedRectangle, 
    sphere, 
    square, 
    star, 
    torus, 
    triangle
} from '@jscad/modeling/src/primitives'

import {
    areAllShapesTheSameType,
    degToRad,
    flatten,
    fnNumberSort,
    insertSorted,
    radiusToSegments,
    radToDeg
} from '@jscad/modeling/src/utils'

import {
    align,
    center,
    centerX,
    centerY,
    centerZ,
    mirror,
    mirrorX,
    mirrorY,
    mirrorZ,
    rotate,
    rotateX,
    rotateY,
    rotateZ,
    scale,
    scaleX,
    scaleY,
    scaleZ,
    transform,
    translate,
    translateX,
    translateY,
    translateZ
} from "@jscad/modeling/src/operations/transforms";

import {
extrudeFromSlices,
extrudeHelical,
extrudeLinear,
extrudeRectangular,
extrudeRotate,
project
} from "@jscad/modeling/src/operations/extrusions";

import {
intersect,
subtract,
union
} from "@jscad/modeling/src/operations/booleans";

function preventTreeShaking() {
    arc();
    circle();
    cube();
    cuboid();
    cylinder();
    cylinderElliptic();
    ellipse();
    ellipsoid();
    geodesicSphere();
    line();
    polygon();
    polyhedron();
    rectangle();
    roundedCuboid();
    roundedCylinder();
    roundedRectangle();
    sphere();
    square();
    star();
    torus();
    triangle();
    areAllShapesTheSameType();
    degToRad();
    flatten();
    fnNumberSort();
    insertSorted();
    radiusToSegments();
    radToDeg();
    align();
    center();
    centerX();
    centerY();
    centerZ();
    mirror();
    mirrorX();
    mirrorY();
    mirrorZ();
    rotate();
    rotateX();
    rotateY();
    rotateZ();
    scale();
    scaleX();
    scaleY();
    scaleZ();
    transform();
    translate();
    translateX();
    translateY();
    translateZ();
    extrudeFromSlices();
    extrudeHelical();
    extrudeLinear();
    extrudeRectangular();
    extrudeRotate();
    project();
    intersect();
    subtract();
    union();
}
preventTreeShaking();

function handleMessageFromChild(event ) {
    var txt = document.getElementById('marco')?.getAttribute("srcdoc");
    load();
    setTimeout(() => {
        try {
            
            var toSend = eval(txt ?? '');
            //console.log(toSend);
            noDisplay();
            var event = new CustomEvent('code', { detail: toSend });
            document.dispatchEvent(event);
        }catch (e) {
            var $loader = document.getElementById('loading');
            $loader?.remove();
            createError(e);
    }
    }, 50);

}

function createError(error){
    var errorLog = document.getElementById('ErrorMessage');
    cleanError();
    errorLog?.style.setProperty('display', 'flex');
    if (error instanceof Error) {
        console.error(error);
        errorLog?.appendChild(document.createTextNode(error.message));
    } else {
        errorLog?.appendChild(document.createTextNode('An error occurred.'));
    }   
}

function cleanError(){
    var errorLog = document.getElementById('ErrorMessage');
    if(errorLog){
        if(errorLog.firstChild !== errorLog.lastChild)
        if(errorLog.lastChild?.nodeType === 3) 
            errorLog.removeChild(errorLog.lastChild);
        
    }
}


function noDisplay(){
    var errorLog = document.getElementById('ErrorMessage');
    errorLog?.style.setProperty('display', 'none');
}

function load() {
    const $load = document.createElement('div');
    $load.id = 'loading';
    $load.className = 'absolute top-0 left-0 w-full h-full bg-neutral-500';
    $load.innerHTML = '<div class="loader"></div>';
    document.body.appendChild($load);
}
document.addEventListener('mensajeNOVA', handleMessageFromChild);