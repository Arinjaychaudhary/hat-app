function preload(){

}

function setup(){
    canvas = createCanvas(400,400);
    canvas.position(600,200);
    camera=createCapture(VIDEO);
    camera.hide();

    Posemodel=ml5.poseNet(camera,modelLoaded);
    Posemodel.on('pose',gotPoses);

}

function draw(){
 image(camera,0,0,400,400);
}

function take_snapshot(){
  save("filterimage.png");
}


function modelLoaded(){
  console.log("Model Loaded");
}

function gotPoses(results){
  if(results.length > 0)
  {
    console.log(results);
    console.log("nose x: "+results[0].pose.nose.x);
    console.log("nose y: "+results[0].pose.nose.y);
    console.log("left wrist x: "+results[0].pose.leftWrist.x);
    console.log("left wrist y: "+results[0].pose.leftWrist.y);
    console.log("right wrist x: "+results[0].pose.rightWrist.x);
    console.log("right wrist y: "+results[0].pose.rightWrist.y);
  }
}