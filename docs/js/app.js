class App {
	constructor(scene) {
		this.scene = scene;
	}

	init() {
		var light = new THREE.DirectionalLight(0xFFFFFF);
		light.position.set(2, 2, 0);
		scene.add( light );

		var ambientLight = new THREE.AmbientLight(0x888888);
		scene.add( ambientLight );

		this.meshCube = new THREE.Mesh();
		var geometryCube = new THREE.BoxGeometry(10, 10, 10);
		var materialCube = new THREE.MeshLambertMaterial( { color: 0x00ff88 } );
		this.meshCube = new THREE.Mesh( geometryCube, materialCube );
		this.meshCube.position.set(0, 0, 50);
		this.scene.add( this.meshCube );

		var meshSphere = new THREE.Mesh();
		var loaderSphere = new THREE.TextureLoader();
		var textureSphere = loaderSphere.load( './img/photo.jpg');
		var materialSphere = new THREE.MeshBasicMaterial({ map:textureSphere, side:THREE.BackSide });
		var geometrySphere = new THREE.SphereGeometry(1000,32,32);
		meshSphere = new THREE.Mesh( geometrySphere, materialSphere );
		meshSphere.position.set(0, 0, 0);

		this.scene.add( meshSphere );
	}

	update(dt) {
		this.meshCube.rotation.x += dt * 0.8
		this.meshCube.rotation.z += dt * 0.2
	}

	render(dt) {

	}
}
