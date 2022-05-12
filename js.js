statius="";
function setup(){
    canvas=createCanvas(480,480);
    canvas.center();
    video=createCapture(VIDEO);
    vidoe.size(400,400);
    video.hide();
}
function Start(){
    od=ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML="Status: Detecting objects";
    input=document.getElementById("input").value;
}
function modelloaded(){
    console.log("model loaded!");
    statius=true;
}
function draw(){
    image(vidoe,0,0,400,400);
}