function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);

    canvas= createCanvas(550,550);
    canvas.position(650,100);

    posenet = ml5.poseNet(video , modelLoaded);
    posenet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized!");
}

function gotPoses(result){
    if(result.length > 0){
        console.log(result);
    }
}

function draw(){
    background("white")
}