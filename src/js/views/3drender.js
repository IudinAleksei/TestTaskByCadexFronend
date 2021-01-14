import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { CLASS_LIST, COLORS } from '../common/constants';

const drawTriangle = (triangle) => {
  const material = new THREE.LineBasicMaterial({
    color: COLORS.lineColor,
    linewidth: 3,
  });

  const geometry = new THREE.Geometry();
  triangle.forEach((vert) => {
    geometry.vertices.push(new THREE.Vector3(...vert));
  });

  const face = new THREE.Face3(0, 1, 2);

  geometry.faces.push(face);

  const faceMaterial = new THREE.MeshBasicMaterial({ color: COLORS.faceColor });

  const element = new THREE.Mesh(geometry, faceMaterial);

  const edges = new THREE.EdgesGeometry(geometry);
  const line = new THREE.LineSegments(edges, material);

  return [line, element];
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

  camera.position.z = 400;

  verts.forEach((triangle) => {
    const [line, face] = drawTriangle(triangle);
    scene.add(line);
    scene.add(face);
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
