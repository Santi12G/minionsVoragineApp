var createScene = function () {
     var scene = new BABYLON.Scene(engine);

    var camera = new BABYLON.ArcRotateCamera("camera", BABYLON.Tools.ToRadians(90), BABYLON.Tools.ToRadians(65), 10, BABYLON.Vector3.Zero(), scene);

    // This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
    var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

    // Default intensity is 1. Let's dim the light a small amount
    light.intensity = 0.7;

    // Para las texturas de los cimientos de la casa
    

    
    // Our built-in 'ground' shape.
    var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);
    let groundMaterial = new BABYLON.StandardMaterial("Ground Material", scene);
    ground.material = groundMaterial;
    let groundTexture = new BABYLON.Texture(Assets.textures.checkerboard_basecolor_png.path, scene);
    ground.material.diffuseTexture = groundTexture;

    var mat1 = new BABYLON.StandardMaterial("mat1", scene);
	mat1.diffuseTexture = new BABYLON.Texture("https://cdn.pixabay.com/photo/2018/08/04/20/34/water-3584391_1280.jpg", scene);
	mat1.bumpTexture = new BABYLON.Texture("https://tse4.mm.bing.net/th/id/OIP.fvJpA7tH88Ut82mCl5MQfwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", scene);
    
    var houseCimMat = new BABYLON.StandardMaterial("houseCimMat", scene);
    houseCimMat.diffuseTexture = new BABYLON.Texture(
    "https://th.bing.com/th/id/R.4e36d2767d995a79c71f7ec04109ff3c?rik=HPa8akzBV02mww&pid=ImgRaw&r=0", scene);
    
    var houseFacMat = new BABYLON.StandardMaterial("houseFacMat", scene);
    houseFacMat.diffuseTexture = new BABYLON.Texture(
    "https://tse3.mm.bing.net/th/id/OIP.ODW5piQqtRWnrMPmqrxBJwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3", scene);
    
    var tierraMat = new BABYLON.StandardMaterial("tierraMat", scene);
    tierraMat.diffuseTexture = new BABYLON.Texture(
    "https://thumbs.dreamstime.com/b/textura-de-la-tierra-79262873.jpg", scene);
    tierraMat.bumpTexture = new BABYLON.Texture("https://th.bing.com/th/id/R.92fe8e25fdf803f4e7e7c246157dc8cb?rik=3rJQqxf3Lsit%2fA&riu=http%3a%2f%2fwww.thebest3d.com%2fdogwaffle%2fdownload%2fNormalMap%2fnormalmap1.jpg&ehk=Db0kgClrunCYH4g0lFlV6Djj9SsKwNkStW2F9YzH4PU%3d&risl=&pid=ImgRaw&r=0", scene);


    var pisoDentroCasaMat = new BABYLON.StandardMaterial("pisoDentroCasaMat", scene);
    pisoDentroCasaMat.diffuseTexture = new BABYLON.Texture(
    "https://tse1.mm.bing.net/th/id/OIP.azB8RHGVNb6rgG3qBHO9nQHaF6?w=800&h=639&rs=1&pid=ImgDetMain&o=7&rm=3", scene);
    pisoDentroCasaMat.bumpTexture = new BABYLON.Texture("https://thumbs.dreamstime.com/b/normal-map-seamless-pattern-siding-floor-wall-noise-texture-normal-map-seamless-pattern-siding-floor-wall-247774432.jpg?w=360", scene);

    var pisoCasaMat = new BABYLON.StandardMaterial("pisoCasaMat", scene);
    pisoCasaMat.diffuseTexture = new BABYLON.Texture(
    "https://tse4.mm.bing.net/th/id/OIP.czHVYYAerMjG59_JF4q6AgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", scene);
    pisoCasaMat.bumpTexture = new BABYLON.Texture("https://santi12g.github.io/minionsVoragineApp/pisoPiedraNormal.jpg", scene);

    var techoMat = new BABYLON.StandardMaterial("techoMat", scene);
    techoMat.diffuseTexture = new BABYLON.Texture(
    "https://tse3.mm.bing.net/th/id/OIP.fnSk_bVCSfjWRy4K68bDxAHaFf?rs=1&pid=ImgDetMain&o=7&rm=3", scene);
    


    

    /*BABYLON.SceneLoader.ImportMesh("",Assets.meshes.Yeti.rootUrl, Assets.meshes.Yeti.filename, scene, function(newMeshes){
        newMeshes[0].scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
    
    });*/

    BABYLON.SceneLoader.ImportMeshAsync("", "https://santi12g.github.io/minionsVoragineApp/", "cimientosCasa.glb").then((result) => {
    
    // esto se usa cuando una malla tiene varios objetos en una misma para poder aplicarle
    // los cambios a cada una de estas
       
        result.meshes.forEach(mesh => {
            mesh.material = houseCimMat;
            mesh.scaling = new BABYLON.Vector3(0.5, 0.5, 0.5);
            mesh.position.y = 0.3;
            mesh.rotationQuaternion = null;
            mesh.rotation.x = BABYLON.Tools.ToRadians(45);
            mesh.rotation.z = BABYLON.Tools.ToRadians(0);
            mesh.rotation.y = BABYLON.Tools.ToRadians(0);
        });
    });

    BABYLON.SceneLoader.ImportMeshAsync("", "https://santi12g.github.io/minionsVoragineApp/", "estructuraCasa.glb").then((result) => {
    
    // esto se usa cuando una malla tiene varios objetos en una misma para poder aplicarle
    // los cambios a cada una de estas
        result.meshes.forEach(mesh => {
            mesh.material = houseFacMat;
            mesh.scaling = new BABYLON.Vector3(0.4, 0.4, 0.4);
            mesh.position.y = 0.3;
            mesh.rotationQuaternion = null;
            mesh.rotation.x = BABYLON.Tools.ToRadians(45);
            mesh.rotation.z = BABYLON.Tools.ToRadians(0);
            mesh.rotation.y = BABYLON.Tools.ToRadians(0);
        });
    });

    BABYLON.SceneLoader.ImportMeshAsync("", "https://santi12g.github.io/minionsVoragineApp/", "rio.glb").then((result) => {
    	//result.meshes[1].position.z = -3;
        //result.meshes[1].rotation.x = BABYLON.Tools.ToRadians(90);
        result.meshes[1].rotationQuaternion = null;
        result.meshes[1].rotation.y = BABYLON.Tools.ToRadians(180);
        result.meshes[1].rotation.x = BABYLON.Tools.ToRadians(-90);
        result.meshes[1].position.y = 0.05;
        result.meshes[1].position.z = 1.05;
        
        //result.meshes[1].rotate  = new BABYLON.Vector3(90, 90, 0);
        result.meshes[1].material = mat1;
        result.meshes[1].scaling = new BABYLON.Vector3(0.25,0.25,0.25);
        
  
    });

    BABYLON.SceneLoader.ImportMeshAsync("", "https://santi12g.github.io/minionsVoragineApp/", "tierra.glb").then((result) => {
    	//result.meshes[1].position.z = -1.8;
        //result.meshes[1].rotation.x = BABYLON.Tools.ToRadians(90);
        //result.meshes[1].rotationQuaternion = null;
        //result.meshes[1].rotation.y = BABYLON.Tools.ToRadians(180);
        result.meshes[1].scaling = new BABYLON.Vector3(0.25, 0.25, 0.25);
        result.meshes[1].position.x = -1.5;
        result.meshes[1].position.y = 0.25;
        //result.meshes[1].rotate  = new BABYLON.Vector3(90, 90, 0);
        result.meshes[1].material = tierraMat;
        result.meshes[1].scaling = new BABYLON.Vector3(0.25,0.25,0.25);
        
  
    });

    BABYLON.SceneLoader.ImportMeshAsync("", "https://santi12g.github.io/minionsVoragineApp/", "pisoDentroCasa.glb").then((result) => {
    	//result.meshes[1].position.z = -1.8;
        //result.meshes[1].rotation.x = BABYLON.Tools.ToRadians(90);
        //result.meshes[1].rotationQuaternion = null;
        //result.meshes[1].rotation.y = BABYLON.Tools.ToRadians(180);
        result.meshes[1].position.x = 0.05;
        result.meshes[1].position.y = 0.4;
        result.meshes[1].position.z = 0.1
        //result.meshes[1].rotate  = new BABYLON.Vector3(90, 90, 0);
        result.meshes[1].material = pisoDentroCasaMat;
        result.meshes[1].scaling = new BABYLON.Vector3(0.25,0.25,0.25);
        
  
    });

    BABYLON.SceneLoader.ImportMeshAsync("", "https://santi12g.github.io/minionsVoragineApp/", "pisoCasa.glb").then((result) => {
    	//result.meshes[1].position.z = -1.8;
        //result.meshes[1].rotation.x = BABYLON.Tools.ToRadians(90);
        //result.meshes[1].rotationQuaternion = null;
        //result.meshes[1].rotation.y = BABYLON.Tools.ToRadians(180);
        result.meshes[1].position.x = -0.55;
        result.meshes[1].position.y = 0.41;
        result.meshes[1].position.z = 0.1
        //result.meshes[1].rotate  = new BABYLON.Vector3(90, 90, 0);
        result.meshes[1].material = pisoCasaMat;
        result.meshes[1].scaling = new BABYLON.Vector3(0.25,0.25,0.25);
        
  
    });


    // el techo sale desproporcional

    
    BABYLON.SceneLoader.ImportMeshAsync("", "https://santi12g.github.io/minionsVoragineApp/", "techo.glb").then((result) => {
    	// esto se usa cuando una malla tiene varios objetos en una misma para poder aplicarle
    // los cambios a cada una de estas
        result.meshes.forEach(mesh => {
            mesh.material = techoMat;
            mesh.scaling = new BABYLON.Vector3(0.4, 0.4, 0.4);
            mesh.position.y = 0.3;
            mesh.rotationQuaternion = null;
            mesh.rotation.x = BABYLON.Tools.ToRadians(45);
            mesh.rotation.z = BABYLON.Tools.ToRadians(0);
            mesh.rotation.y = BABYLON.Tools.ToRadians(0);
        });
    });





    BABYLON.SceneLoader.ImportMeshAsync("", "https://santi12g.github.io/minionsVoragineApp/", "palmeras.glb").then((result) => {
    
    // esto se usa cuando una malla tiene varios objetos en una misma para poder aplicarle
    // los cambios a cada una de estas
        result.meshes.forEach(mesh => {
            mesh.material = houseFacMat;
            mesh.scaling = new BABYLON.Vector3(0.4, 0.4, 0.4);
            mesh.position.y = 0.3;
            mesh.rotationQuaternion = null;
            mesh.rotation.x = BABYLON.Tools.ToRadians(0);
            mesh.rotation.z = BABYLON.Tools.ToRadians(0);
            mesh.rotation.y = BABYLON.Tools.ToRadians(0);
        });
    });



    //BABYLON.SceneLoader.ImportMeshAsync("semi_house", "https://assets.babylonjs.com/meshes/", "both_houses_scene.babylon");





    return scene;
};
