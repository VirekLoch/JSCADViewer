const LanguageCompletion = [

    /***********PRIMITIVES************************/

    {
        label: 'arc',
        detail: 'arc(options: {center: Vector2, radius: number, startAngle: number, endAngle: number, segments: number, makeTangent: Boolean}): Path2D',
        insertText: 'arc',
        documentation: {
            isTrusted: true,
            value: "Construct an arc in two dimensional space where all points are at the same distance from the center."
        },
    },
    {
        label: 'circle',
        detail: 'circle(options: {center: Vector2, radius: number, segments: number, startAngle: number , endAngle: number}): Path2D',
        insertText: 'circle',
        documentation: {
            isTrusted: true,
            value: "Construct a circle in two dimensional space where all points are at the same distance from the center."
        },
    },
    {
        label: 'cube',
        detail: 'cube(options: {center: Vector3, size: number}): Geom3',
        insertText: 'cube',
        documentation: {
            isTrusted: true,
            value: "Construct an axis-aligned solid cube in three dimensional space with six square faces."
        },
    },
    {
        label: 'cuboid',
        detail: 'cuboid(options: {center: Vector3, size: Vector3}): Geom3',
        insertText: 'cuboid',
        documentation: {
            isTrusted: true,
            value: "Construct an axis-aligned solid cuboid in three dimensional space with six rectangular faces."
        },
    },
    {
        label: 'cylinder',
        detail: 'cylinder(options: {center: Vector3, height: number, radius: number, segments: number}): Geom3',
        insertText: 'cylinder',
        documentation: {
            isTrusted: true,
            value: "Construct a cylinder in three dimensional space with two circular faces and a curved surface."
        },
    },
    {
        label: 'cylinderElliptic',
        detail: 'cylinderElliptic(options: {center: Vector3, height: number, startRadius: Vector2,startAngle: number ,endRadius: Vector2, segments: number}): Geom3',
        insertText: 'cylinderElliptic',
        documentation: {
            isTrusted: true,
            value: "Construct an elliptic cylinder in three dimensional space with two elliptic faces and a curved surface."
        },
    },
    {
        label: 'ellipse',
        detail: 'ellipse(options: {center: Vector2, radius: Vector2, segments: number, startAngle: number, endAngle: number}): Path2D',
        insertText: 'ellipse',
        documentation: {
            isTrusted: true,
            value: "Construct an ellipse in two dimensional space where all points are at the same distance from the center."
        },
    },
    {
        label: 'ellipsoid',
        detail: 'ellipsoid(options: {center: Vector3, radius: Vector3, segments: number, axes: Array}): Geom3',
        insertText: 'ellipsoid',
        documentation: {
            isTrusted: true,
            value: "Construct an ellipsoid in three dimensional space with three orthogonal axes."
        },
    },
    {
        label: 'geodesicSphere',
        detail: 'geodesicSphere(options: {radius: number, frecuency: number}): Geom3',
        insertText: 'geodesicSphere',
        documentation: {
            isTrusted: true,
            value: "Construct a geodesic sphere in three dimensional space with triangular faces."
        },
    },
    {
        label: 'line',
        detail: 'line(points: Vector2): Path2D',
        insertText: 'line',
        documentation: {
            isTrusted: true,
            value: "Construct a new line in two dimensional space from the given points. The points must be provided as an array, where each element is a 2D point."
        },
    },
    {
        label: 'polygon',
        detail: 'polygon(options: {points: Array, paths: Array, orientation: String}): Path2D',
        insertText: 'polygon',
        documentation: {
            isTrusted: true,
            value: "Construct a polygon in two dimensional space from a list of points, or a list of points and paths. \n\n"+
            "NOTE: The ordering of points is important, and must define a counter clockwise rotation of points."
        },
    },
    {
        label: 'polyhedron',
        detail: 'polyhedron(options: {points: Array, faces: Array, colors: Array, orientation: String}): Geom3',
        insertText: 'polyhedron',
        documentation: {
            isTrusted: true,
            value: "Construct a polyhedron in three dimensional space from the given set of 3D points and faces. The faces can define outward or inward facing polygons (orientation). However, each face must define a counter clockwise rotation of points which follows the right hand rule."
        },
    },
    {
        label: 'rectangle',
        detail: 'rectangle(options: {center: Vector2, size: Vector2}): Path2D',
        insertText: 'rectangle',
        documentation: {
            isTrusted: true,
            value: "Construct a rectangle in two dimensional space with the given center and size."
        },
    },
    {
        label: 'roundedCuboid',
        detail: 'roundedCuboid(options: {center: Vector3, size: Vector3, roundRadius: number, segments: number}): Geom3',
        insertText: 'roundedCuboid',
        documentation: {
            isTrusted: true,
            value: "Construct an axis-aligned solid cuboid in three dimensional space with rounded corners."
        },
    },
    {
        label: 'roundedCylinder',
        detail: 'roundedCylinder(options: {center: Vector3, height: number, radius: number, roundRadius: number, segments: number}): Geom3',
        insertText: 'roundedCylinder',
        documentation: {
            isTrusted: true,
            value: "Construct a Z axis-aligned solid cylinder in three dimensional space with rounded ends."
        },
    },
    {
        label: 'roundedRectangle',
        detail: 'roundedRectangle(options: {center: Vector2, size: Vector2, roundRadius: number, segments: number}): Path2D',
        insertText: 'roundedRectangle',
        documentation: {
            isTrusted: true,
            value: "Construct a rectangle in two dimensional space with rounded corners."
        },
    },
    {
        label: 'sphere',
        detail: 'sphere(options: {center: Vector3, radius: number, segments: number, axes: Array}): Geom3',
        insertText: 'sphere',
        documentation: {
            isTrusted: true,
            value: "Construct a sphere in three dimensional space with a curved surface."
        },
    },
    {
        label: 'square',
        detail: 'square(options: {center: Vector2, size: number}): Path2D',
        insertText: 'square',
        documentation: {
            isTrusted: true,
            value: "Construct a square in two dimensional space with the given center and size."
        },
    },
    {
        label: 'star',
        detail: 'star(options: {center: Vector2, vertices: number, density: number, innerRadius: number, startAngle: number, outerRadius: number}): Path2D',
        insertText: 'star',
        documentation: {
            isTrusted: true,
            value: "Construct a star in two dimensional space with the given center, number of points, outer radius, and inner radius."
        },
    },
    {
        label: 'torus',
        detail: 'torus(options: {outerRadius: number, innerRadius: number, innerRotation: Integrer, outerRotation: number, startAngle: number, inerSegments: Integrer, outerSegments: number}): Geom3',
        insertText: 'torus',
        documentation: {
            isTrusted: true,
            value: "Construct a torus in three dimensional space with a circular cross section."
        },
    },
    {
        label: 'triangle',
        detail: 'function triangle(options: {type: String, values: Array}) : geom2',
        insertText: 'triangle',
        documentation: {
            isTrusted: true,
            value: "Construct a triangle in two dimensional space from the given set of 2D points."
        },
    },

    /***************EXTRUSIONS******************/ 
    {
        label: 'extrudeFromSlices',
        detail: 'extrudeFromSlices(options: {numberOfSlices: number, callback: Function, capStart: Boolean, capEnd: Boolean, close: Boolean, repair: Boolean}, base: Object): Geom3',
        insertText: 'extrudeFromSlices',
        documentation: {
            isTrusted: true,
            value: "Construct a solid from the given set of slices."
        },
    },
    {
        label: 'extrudeHelical',
        detail: 'extrudeHelical(options: {height: number, startAngle: number, endOffset: number, angle: number, segments: number, pitch: number, segmentsPerRotation: Number}, geometry: Geom2): Geom3',
        insertText: 'extrudeHelical',
        documentation: {
            isTrusted: true,
            value: "Construct a helical extrusion in three dimensional space."
        },
    },
    {
        label: 'extrudeLinear',
        detail: 'extrudeLinear(options: {height: number, twistAngle: number, twistSteps: number, offset: number, twistOffset: number, segments: number, callback: Function}, objects: Object): Geom3',
        insertText: 'extrudeLinear',
        documentation: {
            isTrusted: true,
            value: "Construct a linear extrusion in three dimensional space."
        },
    },
    {
        label: 'extrudeRectangular',
        detail: 'extrudeRectangular(options: {size: Vector2, height: number}, objects: Object): Geom3',
        insertText: 'extrudeRectangular',
        documentation: {
            isTrusted: true,
            value: "Construct a rectangular extrusion in three dimensional space."
        },
    },
    {
        label: 'extrudeRotate',
        detail: 'extrudeRotate(options: {angle: number, segments: number, overflow: String, startAngle: Number}, geometry: geom2): Geom3',
        insertText: 'extrudeRotate',
        documentation: {
            isTrusted: true,
            value: "Construct a rotational extrusion in three dimensional space."
        },

    },
    {
        label: 'project',
        detail: 'project(options: {axis: Array, origin: Array} objects: Object): Geom2',
        insertText: 'project',
        documentation: {
            isTrusted: true,
            value: "Construct a projection in two dimensional space."
        },
    },

    /***************TRANSFORMS******************/
    {
        label: 'aling',
        detail: 'align(options: {modes: Array, relativeTo: Array, grouped: Boolean}, geometries: Object): Object',
        insertText: 'align',
        documentation: {
            isTrusted: true,
            value: "Align the given set of geometries."
        },
    },
    {
        label: 'center',
        detail: 'center(options: {axes: Array, relativeTo: Array}, geometries: Object): Object',
        insertText: 'center',
        documentation: {
            isTrusted: true,
            value: "Center the given set of geometries."
        },
    },
    {
        label: 'centerX',
        detail: 'centerX(...objects: Object): Object | Array',
        insertText: 'centerX',
        documentation: {
            isTrusted: true,
            value: "Center the given objects about the X axis.\n\nParameters:\n- objects: Object (repeatable) - the objects to center\n\nReturns: the centered object, or a list of centered objects"
        },
    },
    {
        label: 'centerY',
        detail: 'centerY(...objects: Object): Object | Array',
        insertText: 'centerY',
        documentation: {
            isTrusted: true,
            value: "Center the given objects about the Y axis.\n\nParameters:\n- objects: Object (repeatable) - the objects to center\n\nReturns: the centered object, or a list of centered objects"
        },
    },
    {
        label: 'centerZ',
        detail: 'centerZ(...objects: Object): Object | Array',
        insertText: 'centerZ',
        documentation: {
            isTrusted: true,
            value: "Center the given objects about the Z axis.\n\nParameters:\n- objects: Object (repeatable) - the objects to center\n\nReturns: the centered object, or a list of centered objects"
        },
    },
    {
        label: 'mirror',
        detail: 'mirror(options: {origin : Array, normal: Array}objects: Object): Object | Array',
        insertText: 'mirror',
        documentation: {
            isTrusted: true,
            value: "Mirror the given objects using the given options.\n\nExample:\n```javascript\nlet myshape = mirror({normal: [0,0,10]}, cube({center: [0,0,15], radius: [20, 25, 5]}))\n```\nParameters:\n- options: Object - options for mirror\n  - origin: Array (optional, default: [0,0,0]) - the origin of the plane\n  - normal: Array (optional, default: [0,0,1]) - the normal vector of the plane\n- objects: Object (repeatable) - the objects to mirror\n\nReturns: the mirrored object, or a list of mirrored objects"
        },
    },
    {
        label: 'mirrorX',
        detail: 'mirrorX(...objects: Object): Object | Array',
        insertText: 'mirrorX',
        documentation: {
            isTrusted: true,
            value: "Mirror the given objects about the X axis.\n\nParameters:\n- objects: Object (repeatable) - the objects to mirror\n\nReturns: the mirrored object, or a list of mirrored objects"
        },
    },
    {
        label: 'mirrorY',
        detail: 'mirrorY(...objects: Object): Object | Array',
        insertText: 'mirrorY',
        documentation: {
            isTrusted: true,
            value: "Mirror the given objects about the Y axis.\n\nParameters:\n- objects: Object (repeatable) - the geometries to mirror\n\nReturns: the mirrored object, or a list of mirrored objects"
        },
    },
    {
        label: 'mirrorZ',
        detail: 'mirrorZ(...objects: Object): Object | Array',
        insertText: 'mirrorZ',
        documentation: {
            isTrusted: true,
            value: "Mirror the given objects about the Z axis.\n\nParameters:\n- objects: Object (repeatable) - the geometries to mirror\n\nReturns: the mirrored object, or a list of mirrored objects"
        },
    },
    {
        label: 'rotate',
        detail: 'rotate(angles: Array, ...objects: Object): Object | Array',
        insertText: 'rotate',
        documentation: {
            isTrusted: true,
            value: "Rotate the given objects using the given options.\n\nExample:\n```javascript\nconst newsphere = rotate([TAU / 8, 0, 0], sphere())\n```\nParameters:\n- angles: Array - angle (RADIANS) of rotations about X, Y, and Z axis\n- objects: Object (repeatable) - the objects to rotate\n\nReturns: the rotated object, or a list of rotated objects"
        },
    },
    {
        label: 'rotateX',
        detail: 'rotateX(angle: Number, ...objects: Object): Object | Array',
        insertText: 'rotateX',
        documentation: {
            isTrusted: true,
            value: "Rotate the given objects about the X axis, using the given options.\n\nParameters:\n- angle: Number - angle (RADIANS) of rotations about X\n- objects: Object (repeatable) - the objects to rotate\n\nReturns: the rotated object, or a list of rotated objects"
        },
    },
    {
        label: 'rotateY',
        detail: 'rotateY(angle: Number, ...objects: Object): Object | Array',
        insertText: 'rotateY',
        documentation: {
            isTrusted: true,
            value: "Rotate the given objects about the Y axis, using the given options.\n\nParameters:\n- angle: Number - angle (RADIANS) of rotations about Y\n- objects: Object (repeatable) - the objects to rotate\n\nReturns: the rotated object, or a list of rotated objects"
        },
    },
    {
        label: 'rotateZ',
        detail: 'rotateZ(angle: Number, ...objects: Object): Object | Array',
        insertText: 'rotateZ',
        documentation: {
            isTrusted: true,
            value: "Rotate the given objects about the Z axis, using the given options.\n\nParameters:\n- angle: Number - angle (RADIANS) of rotations about Z\n- objects: Object (repeatable) - the objects to rotate\n\nReturns: the rotated object, or a list of rotated objects"
        },
    },
    {
        label: 'scale',
        detail: 'scale(factors: Array, ...objects: Object): Object | Array',
        insertText: 'scale',
        documentation: {
            isTrusted: true,
            value: "Scale the given objects using the given options.\n\nExample:\njavascript\nlet myshape = scale([5, 0, 10], sphere())\n\nParameters:\n- factors: Array - X, Y, Z factors by which to scale the objects\n- objects: Object (repeatable) - the objects to scale\n\nReturns: the scaled object, or a list of scaled objects"
        },
    },
    {
        label: 'scaleX',
        detail: 'scaleX(factor: Number, ...objects: Object): Object | Array',
        insertText: 'scaleX',
        documentation: {
            isTrusted: true,
            value: "Scale the given objects about the X axis using the given options.\n\nParameters:\n- factor: Number - X factor by which to scale the objects\n- objects: Object (repeatable) - the objects to scale\n\nReturns: the scaled object, or a list of scaled objects"
        },
    },
    {
        label: 'scaleY',
        detail: 'scaleY(factor: Number, ...objects: Object): Object | Array',
        insertText: 'scaleY',
        documentation: {
            isTrusted: true,
            value: "Scale the given objects about the Y axis using the given options.\n\nParameters:\n- factor: Number - Y factor by which to scale the objects\n- objects: Object (repeatable) - the objects to scale\n\nReturns: the scaled object, or a list of scaled objects"
        },
    },
    {
        label: 'scaleZ',
        detail: 'scaleZ(factor: Number, ...objects: Object): Object | Array',
        insertText: 'scaleZ',
        documentation: {
            isTrusted: true,
            value: "Scale the given objects about the Z axis using the given options.\n\nParameters:\n- factor: Number - Z factor by which to scale the objects\n- objects: Object (repeatable) - the objects to scale\n\nReturns: the scaled object, or a list of scaled objects"
        },
    },
    {
        label: 'transform',
        detail: 'transform(matrix: mat4, ...objects: Object): Object | Array',
        insertText: 'transform',
        documentation: {
            isTrusted: true,
            value: "Transform the given objects using the given matrix.\n\nExample:\njavascript\nconst newsphere = transform(mat4.rotateX(TAU / 8), sphere())\n\nParameters:\n- matrix: mat4 - a transformation matrix\n- objects: Object (repeatable) - the objects to transform\n\nReturns: the transformed object, or a list of transformed objects"
        },
    },
    {
        label: 'translate',
        detail: 'translate(offset: Array, ...objects: Object): Object | Array',
        insertText: 'translate',
        documentation: {
            isTrusted: true,
            value: "Translate the given objects using the given options.\n\nExample:\njavascript\nconst newsphere = translate([5, 0, 10], sphere())\n\nParameters:\n- offset: Array - offset (vector) of which to translate the objects\n- objects: Object (repeatable) - the objects to translate\n\nReturns: the translated object, or a list of translated objects"
        },
    },
    {
        label: 'translateX',
        detail: 'translateX(offset: Number, ...objects: Object): Object | Array',
        insertText: 'translateX',
        documentation: {
            isTrusted: true,
            value: "Translate the given objects along the X axis using the given options.\n\nParameters:\n- offset: Number - X offset of which to translate the objects\n- objects: Object (repeatable) - the objects to translate\n\nReturns: the translated object, or a list of translated objects"
        },
    },
    {
        label: 'translateY',
        detail: 'translateY(offset: Number, ...objects: Object): Object | Array',
        insertText: 'translateY',
        documentation: {
            isTrusted: true,
            value: "Translate the given objects along the Y axis using the given options.\n\nParameters:\n- offset: Number - Y offset of which to translate the objects\n- objects: Object (repeatable) - the objects to translate\n\nReturns: the translated object, or a list of translated objects"
        },
    },
    {
        label: 'translateZ',
        detail: 'translateZ(offset: Number, ...objects: Object): Object | Array',
        insertText: 'translateZ',
        documentation: {
            isTrusted: true,
            value: "Translate the given objects along the Z axis using the given options.\n\nParameters:\n- offset: Number - Z offset of which to translate the objects\n- objects: Object (repeatable) - the objects to translate\n\nReturns: the translated object, or a list of translated objects"
        },
    },
   
];

export default LanguageCompletion;
