import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as THREE from 'three';

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
  private geometry: THREE.BoxGeometry;
  private material: THREE.Material;
  private cube: THREE.Mesh;
  private renderer!: THREE.WebGLRenderer;
  private scene!: THREE.Scene;
  private ambientLight!: THREE.Light;
  private pointLight!: THREE.Light;

  private animateCube() {
    const rotationSpeedX: number = 0.05;
    const rotationSpeedY: number = 0.01;

    this.cube.rotation.x += rotationSpeedX;
    this.cube.rotation.y += rotationSpeedY;
  }

  private createScene() {
    //* Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000)
    this.scene.add(this.cube);
    //*Camera
    this.camera = new THREE.PerspectiveCamera(
      1,
      this.canvas.clientWidth / this.canvas.clientHeight,
      1,
      1000,
    )
    this.camera.position.z = 200;

    this.ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    this.scene.add(this.ambientLight)
    this.pointLight = new THREE.PointLight(0xffffff, 1);
    this.pointLight.position.set(8, 16, 8);
    this.scene.add(this.pointLight);
  }

  private startRenderingLoop() {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, alpha: true, antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);

    let component: MoleculeRenderComponent = this;
    (function render() {
      requestAnimationFrame(render);
      component.animateCube();
      component.renderer.render(component.scene, component.camera);
    }());
  }

  constructor() {
    this.geometry = new THREE.BoxGeometry(1, 1, 1);
    this.material = new THREE.MeshStandardMaterial({color: 0xff0051, flatShading: true, metalness: 0, roughness: 1});
    this.cube = new THREE.Mesh(this.geometry, this.material);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.createScene();
    this.startRenderingLoop();
  }
}
