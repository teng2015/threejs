//开启Three.js渲染器
 var renderer;//声明全局变量（对象）
 function initThree() {
	width = document.getElementById('canvas3d').clientWidth;//获取画布「canvas3d」的宽
	height = document.getElementById('canvas3d').clientHeight;//获取画布「canvas3d」的高
	renderer=new THREE.WebGLRenderer({
		antialias:true,//antialias:true/false是否开启反锯齿
		precision:"highp",//precision:highp/mediump/lowp着色精度选择
		alpha:true,//alpha:true/false是否可以设置背景色透明
		premultipliedAlpha:false,//?
		stencil:false,//?
		preserveDrawingBuffer:true,//preserveDrawingBuffer:true/false是否保存绘图缓冲
		maxLights:1//maxLights:最大灯光数
		});//生成渲染器对象（属性：抗锯齿效果为设置有效）
	renderer.setSize(width, height );//指定渲染器的高宽（和画布框大小一致）
	document.getElementById('canvas3d').appendChild(renderer.domElement);//追加 【canvas】 元素到 【canvas3d】 元素中。
	renderer.setClearColor(0x000000,0.5);//设置canvas背景色(clearColor)和背景色透明度（clearAlpha）
  }
   //设置相机
  var camera;
  function initCamera() { 
	camera = new THREE.PerspectiveCamera( 45, width / height , 1 , 5000 );//设置透视投影的相机,默认情况下相机的上方向为Y轴，右方向为X轴，沿着Z轴朝里（视野角：fov 纵横比：aspect 相机离视体积最近的距离：near 相机离视体积最远的距离：far）
	camera.position.x = 0;//设置相机的位置坐标
	camera.position.y = 50;//设置相机的位置坐标
	camera.position.z = 100;//设置相机的位置坐标
	camera.up.x = 0;//设置相机的上为「x」轴方向
	camera.up.y = 0;//设置相机的上为「y」轴方向
	camera.up.z = 1;//设置相机的上为「z」轴方向
	camera.lookAt( {x:0, y:0, z:0 } );//设置视野的中心坐标
  }
   //设置场景
  var scene;
  function initScene() {   
	scene = new THREE.Scene();
  }

  //设置光源
  var light;
  function initLight() { 
	light = new THREE.DirectionalLight(0xff0000, 1.0, 0);//设置平行光源
	light.position.set( 200, 200, 200 );//设置光源向量
	scene.add(light);// 追加光源到场景
  }
   //设置物体
  var sphere;
  function initObject(){  
	sphere = new THREE.Mesh(
		 new THREE.SphereGeometry(20,20),                //width,height,depth
		 new THREE.MeshLambertMaterial({color: 0xff0000}) //材质设定
	);
	scene.add(sphere);
	sphere.position.set(0,0,0);
  }
  //执行
  function threeStart() {
	initThree();
	initCamera();
	initScene();   
	initLight();
	initObject();
	renderer.clear(); 
	renderer.render(scene, camera);
  }