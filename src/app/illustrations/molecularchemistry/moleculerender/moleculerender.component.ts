import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import {Molecule, mol} from './Molecule'

@Component({
  selector: 'app-illustrations-molecularchemistry-moleculerender',
  templateUrl: './moleculerender.component.html',
  styleUrls: ['./moleculerender.component.scss']
})
export class MoleculeRenderComponent implements OnInit, AfterViewInit {

  @ViewChild('canvas')
  private canvasRef: ElementRef;

  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }

  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;

  private update() {
  }

  private stage() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000)
    this.camera = new THREE.PerspectiveCamera(
      1.5,
      this.canvas.clientWidth / this.canvas.clientHeight,
      1,
      1000,
    )
    this.camera.position.z = 200;

    for (let atomIdx = 0; atomIdx < mol.atoms.length; atomIdx++) {
      const sphereMaterial = new THREE.MeshPhongMaterial({color: mol.getGeometry(atomIdx).color});
      const sphereGeometry = new THREE.IcosahedronGeometry( 1, 3 );
      const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      sphere.position.copy(mol.getGeometry(atomIdx).coordinates);
      sphere.scale.multiplyScalar(0.2);
      this.scene.add(sphere);
    }

    const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    for (let bondIdx = 0; bondIdx < mol.bonds.length; bondIdx += 1) {
      const object = new THREE.Mesh(boxGeometry, new THREE.MeshPhongMaterial({color: 0xffffff}));
      const pos_u = mol.getGeometry(mol.bonds[bondIdx][0]).coordinates, pos_v = mol.getGeometry(mol.bonds[bondIdx][1]).coordinates;
      object.position.copy(pos_u);
      object.position.lerp(pos_v, 0.5);
      object.scale.set(0.01, 0.01, pos_u.distanceTo(pos_v));
      object.lookAt(pos_v);
      this.scene.add(object);
    }

    const light1 = new THREE.DirectionalLight( 0xffffff, 0.8 );
    light1.position.set( 1, 1, 1 );
    this.scene.add(light1);
    const light2 = new THREE.DirectionalLight( 0xffffff, 0.5 );
    light2.position.set( - 1, - 1, 1 );
    this.scene.add(light2);
  }

  private animate() {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, alpha: true, antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    let controls = new OrbitControls(this.camera, this.renderer.domElement);

    let component: MoleculeRenderComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.update();
      component.renderer.render(component.scene, component.camera);
    }());
  }

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.stage();
    this.animate();
  }
}
