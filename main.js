nosex=0;
nosey=0;

function takeSnap(){
save("My_goggle.png");
}

function preload(){
goggle=loadImage('https://i.postimg.cc/DyVbmK8n/G.png');
}

function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
console.log("poseNet is Initialized");
}

function gotPoses(results){
    if(results.length > 0){
    console.log(results);
    nosex=results[0].pose.nose.x-65;
    nosey=results[0].pose.nose.y-70;
    console.log("nosex= "+nosex);
    console.log("nosey= "+nosey);
    }
    }

    function draw(){
    image(video,0,0,300,300);
    image(goggle, nosex, nosey,130,80)
    }