import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import THREE from 'three';

interface DesktopIntroPanelArgs {}

const panelLabels = ['Engineer', 'Artist', 'Musician', 'Traveler', 'Gamer'];

export default class DesktopIntroPanel extends Component<DesktopIntroPanelArgs> {
  @tracked
  panelLabelIndex = 0;

  @tracked
  onDeckLabelIndex = 1;

  get panelLabel(): string {
    return panelLabels[this.panelLabelIndex];
  }

  get onDeckLabel(): string {
    return panelLabels[this.onDeckLabelIndex];
  }

  panelLabels = panelLabels;

  incrementPanelLabelIndex(): void {
    this.panelLabelIndex = (this.panelLabelIndex + 1) % panelLabels.length;
    this.onDeckLabelIndex = (this.onDeckLabelIndex + 1) % panelLabels.length;

    setTimeout(() => this.incrementPanelLabelIndex(), 3000);
  }

  @action
  onInsert(): void {
    setTimeout(() => this.incrementPanelLabelIndex(), 3000);
  }

  @action
  setupThreeJs(element: Element): void {
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, 600 / 500, 0.1, 1000 );

    var renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(600, 500);
    element.appendChild(renderer.domElement);
    const geometry = new THREE.IcosahedronGeometry(200, 0);
    const material = new THREE.MeshStandardMaterial({ color: 0x81d2ff });
    // var material = new THREE.MeshBasicMaterial({ color: 0x81d2ff });
    var cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    const light = new THREE.DirectionalLight( 0xffffff, 0.9 );
    light.translateZ(1);
		scene.add( light );

    camera.position.z = 500;

    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();
  }
}
