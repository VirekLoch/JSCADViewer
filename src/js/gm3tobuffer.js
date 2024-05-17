import * as THREE from 'three';


function geom3ToBufferGeometry(geometry) {
    const toRet = new THREE.BufferGeometry();
    const vertices  = [];
    const indices  = [];
    if(typeof geometry === 'undefined') throw new Error("Geometry is undefined");
    if(typeof geometry.polygons !== 'object' ) throw new Error("Geometry is not a valid geom3 object");
    try{
    geometry.polygons.forEach((polygon) => {
        const indexOffset = vertices.length / 3;

        polygon.vertices.forEach((vertex) => {
            vertices.push(vertex[0], vertex[1], vertex[2]);
        });

        for (let i = 2; i < polygon.vertices.length; i++) {
            indices.push(indexOffset, indexOffset + i - 1, indexOffset + i);
        }
    });
    }catch(e){
        throw new Error("Geometry is not a valid geom3 object");
    }
    toRet.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    toRet.setIndex(indices);
    toRet.computeVertexNormals();

    return toRet;
}
export {geom3ToBufferGeometry}