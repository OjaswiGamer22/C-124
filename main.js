function preload(){

}

function setup(){
video= createCapture(VIDEO);
video.size(500,500);
canvas=createCanvas(500,400);
canvas.position(560,100);
poseNet=ml5.poseNet(video,Modelloaded);
poseNet.on("pose", gotPoses);
}

function draw(){
background("gray");
}

function Modelloaded(){
    console.log("poseNet is initialized");
    }

    function gotPoses(results){
        if(results.length > 0){
            console.log(results);
        }
    }