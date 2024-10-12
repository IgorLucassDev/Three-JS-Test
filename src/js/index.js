import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, 600 / 400, 1, 1000);
const view = document.querySelector('#view')
const speed = document.querySelector('#speed')

const renderer = new THREE.WebGLRenderer();

renderer.setSize(600, 400)

view.appendChild(renderer.domElement)

// cube
const geometry = new THREE.BoxGeometry(1, 1 ,1)
const material = new THREE.MeshBasicMaterial({color: 0x00ff00})
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)
cube.rotateX(-20)
camera.position.z = 10
renderer.setAnimationLoop( arotate );

function arotate(){
    const cubeSpeed = speed.value
    cube.rotation.y += 0.01 * cubeSpeed
    renderer.render(scene, camera)
}




