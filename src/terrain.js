import * as THREE from 'three';

export class Terrain extends THREE.Mesh{
    constructor(width, height){
        super();
        this.width = width;
        this.height = height;
        this.treeCount = 10;
        this.rockCount = 20;
       
        this.createTerrain();
        this.createTrees();
        this.createRocks();
    }

    createTerrain() {
        if(this.terrain) {
            this.terrain.geometry.dispose();
            this.terrain.material.dispose();
            this.remove(this.terrain);
        }
       const terrainMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x50a000,
        wireframe: true, 
    });
        const terrainGeometry = new THREE.PlaneGeometry(
            this.width,
            this.height,
            this.width,
            this.height,
        );
        this.terrain = new THREE.Mesh(terrainGeometry, terrainMaterial);
        this.terrain.rotation.x = -Math.PI / 2;
        this.terrain.position.set(this.width / 2, 0, this.height / 2);
        this.add(this.terrain);
    }

    createTrees() {
        const treeRadius = 0.2;
        const treeHeight = 1;

        const treeGeometry = new THREE.ConeGeometry(treeRadius, treeHeight, 8); // For Trees We Use ConeGeometry
        const treeMaterial = new THREE.MeshStandardMaterial({
            color: 0x305010,
            flatShading: true //Noticeable
        });
        

        this.trees = new THREE.Group();
        this.add(this.trees);

        this.trees.clear
        for (let i = 0; i < this.treeCount; i++){
            
            const treeMesh = new THREE.Mesh(treeGeometry, treeMaterial); 
            treeMesh.position.set (
               Math.floor( this.width * Math.random()) + 0.5,
                treeHeight / 2,
                Math.floor(this.height * Math.random()) + 0.5
            ) 
            this.trees.add(treeMesh);
           
        }
    }
    createRocks() {
        const minRockRadius = 0.3;
        const maxRockRadius = 0.4;
        const radius = minRockRadius + (Math.random() * (maxRockRadius - minRockRadius));

        const treeMaterial = new THREE.MeshStandardMaterial({
            color: 0xb0b0b0,
            flatShading: true //Noticeable
        });
        

        this.rocks = new THREE.Group();
        this.add(this.rocks);

        this.trees.clear
        for (let i = 0; i < this.rockCount; i++){
            const rockGeometry = new THREE.SphereGeometry(radius, 6, 5); // For Rock We Use SphereGeometry
            const rockMesh = new THREE.Mesh(rockGeometry, rockMesh); 
            rockMesh.position.set (
               Math.floor( this.width * Math.random()),
                0,
                Math.floor(this.height * Math.random())
            ) 
            this.rocks.add(treeMesh);
           
        }
    }
}

// Trees
//   - Terrain Mesh
//   - Trees Group
//      - Tree 1
//      - Tree 2
//      - ...
