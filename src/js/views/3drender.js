import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { CLASS_LIST, COLORS } from '../common/constants';

const drawTriangle = (triangle) => {
  const material = new THREE.LineBasicMaterial({ color: COLORS.lineColor });
  const points = [];

  triangle.forEach((vert) => {
    points.push(new THREE.Vector3(...vert));
  });

  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  const line = new THREE.LineLoop(geometry, material);

  return line;
};

const render3d = (verts) => {
  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer();

  const canvasContainer = document.querySelector(`.${CLASS_LIST.canvasContainer}`);
  canvasContainer.innerHTML = '';

  const camera = new THREE.PerspectiveCamera(75, canvasContainer.clientWidth / canvasContainer.clientHeight, 0.1, 2000);

  scene.background = new THREE.Color(COLORS.sceneBackground);

  renderer.setSize(canvasContainer.clientWidth, canvasContainer.clientHeight);

  const canvas = renderer.domElement;
  canvas.classList.add(CLASS_LIST.canvas);
  canvasContainer.append(canvas);

  camera.position.z = 600;

  const color = 0xFFFFFF;
  const intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-100, 200, 400);
  scene.add(light);

  verts.forEach((triangle) => {
    const mesh = drawTriangle(triangle);
    scene.add(mesh);
  });

  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 5, 0);
  controls.update();

  function animate() {
    requestAnimationFrame(animate);

    controls.update();

    renderer.render(scene, camera);
  }

  animate();
};

export default render3d;
