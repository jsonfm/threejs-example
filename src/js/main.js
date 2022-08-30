import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: '#ffea00'} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );


const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update();

const axesHelper = new THREE.AxesHelper(3);
scene.add( axesHelper );

const gridHelper = new THREE.GridHelper();
scene.add( gridHelper );

camera.position.z = 5;

const gui = new dat.GUI();
const options = {
    cubeColor: '#ffea00',
    wireframe: false,
}

gui.addColor(options, 'cubeColor').onChange((e) => {
    cube.material.color.set(e);
})

gui.add(options, 'wireframe').onChange((e) => {
    cube.material.wireframe = e;
})

function animate(time=0.01) {
    requestAnimationFrame( animate );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();