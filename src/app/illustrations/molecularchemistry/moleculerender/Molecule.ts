import * as THREE from 'three';


export class Molecule {
  atoms: Array<string>;  // Label for each atom
  bonds: Array<[number, number, number]>;  // Atom 1, Atom 2, Bond count
  coordinates: Array<[number, number, number]>;  // x, y, z

  public colorOfAtom(atomName: string) {
    if (atomName == "H") {
      return
    }
  }

  constructor(atoms: Array<string>, bonds: Array<[number, number, number]>, coordinates: Array<[number, number, number]>) {
    this.atoms = atoms;
    this.bonds = bonds;
    this.coordinates = coordinates;
  }

  public addAtom(atomName: string, coordinates: [number, number, number]) {
    this.atoms.push(atomName);
    this.coordinates.push(coordinates);
    return this;
  }

  public addBond(atom1: number, atom2: number, bondCount: number) {
    this.bonds.push([atom1, atom2, bondCount]);
    return this;
  }

  public getGeometry(atomIdx: number) {
    let vector = new THREE.Vector3(this.coordinates[atomIdx][0], this.coordinates[atomIdx][1], this.coordinates[atomIdx][2]);
    const colorDictionary = {
      "C": 0x333333,
      "H": 0xdddddd,
      "O": 0xff0000,
    }
    return {color: colorDictionary[this.atoms[atomIdx]], coordinates: vector};
  }
}

export let mol: Molecule = new Molecule(
  ["C", "C", "H", "O", "H", "H", "H", "H", "H"],
  [
    [0, 1, 1],
    [0, 3, 1],
    [3, 2, 1],
    [0, 4, 1],
    [0, 5, 1],
    [1, 6, 1],
    [1, 7, 1],
    [1, 8, 1]
  ],
  [
    [ 0.011,  -0.566,   0.000],
    [-1.285,   0.246,  -0.000],
    [ 1.925,  -0.229,  -0.000],
    [ 1.130,   0.322,   0.000],
    [ 0.046,  -1.195,   0.890],
    [ 0.046,  -1.195,  -0.890],
    [-2.139,  -0.432,   0.000],
    [-1.320,   0.875,   0.890],
    [-1.320,   0.875,  -0.890],
  ]
);
