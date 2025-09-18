var createScene = function () {
     var scene = new BABYLON.Scene(engine);

    var camera = new BABYLON.ArcRotateCamera("camera", BABYLON.Tools.ToRadians(90), BABYLON.Tools.ToRadians(65), 10, BABYLON.Vector3.Zero(), scene);

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    const roofMat = new BABYLON.StandardMaterial("roofMat");
    roofMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/roof.jpg", scene);


    
    // Our built-in 'ground' shape.
    var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);
    let groundMaterial = new BABYLON.StandardMaterial("Ground Material", scene);
    ground.material = groundMaterial;
    let groundTexture = new BABYLON.Texture(Assets.textures.checkerboard_basecolor_png.path, scene);
    ground.material.diffuseTexture = groundTexture;

    var mat1 = new BABYLON.StandardMaterial("mat1", scene);
	mat1.diffuseTexture = new BABYLON.Texture("https://tse3.mm.bing.net/th/id/OIP.QSCdJJYGXBrT3bmfGS32GQHaF7?rs=1&pid=ImgDetMain&o=7&rm=3", scene);
	mat1.bumpTexture = new BABYLON.Texture("https://tse4.mm.bing.net/th/id/OIP.fvJpA7tH88Ut82mCl5MQfwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", scene);

    /*BABYLON.SceneLoader.ImportMesh("",Assets.meshes.Yeti.rootUrl, Assets.meshes.Yeti.filename, scene, function(newMeshes){
        newMeshes[0].scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
    
    });*/

    BABYLON.SceneLoader.ImportMeshAsync("", "https://aannewball.github.io/myCoolBabylonApp/", "mico.glb").then((result) => {
    	result.meshes[1].position.x = 4;
        result.meshes[1].material = roofMat;
        result.meshes[1].rotate  = new BABYLON.Vector3(0, 45, 0);
        result.meshes[1].scaling = new BABYLON.Vector3(0.5, 0.5, 0.5);
    


    });

    BABYLON.SceneLoader.ImportMeshAsync("", "https://santi12g.github.io/minionsVoragineApp/", "rio.glb").then((result) => {
    	result.meshes[1].position.x = 1;
        //result.meshes[1].rotation.x = BABYLON.Tools.ToRadians(90);
        result.meshes[1].rotationQuaternion = null;
        result.meshes[1].rotation.x = BABYLON.Tools.ToRadians(-90);
        result.meshes[1].position.y = 0.5
        //result.meshes[1].rotate  = new BABYLON.Vector3(90, 90, 0);
        result.meshes[1].material = mat1;
        result.meshes[1].scaling = new BABYLON.Vector3(0.1,0.1,0.1);
        
  
    });



    //BABYLON.SceneLoader.ImportMeshAsync("semi_house", "https://assets.babylonjs.com/meshes/", "both_houses_scene.babylon");





    return scene;
};
