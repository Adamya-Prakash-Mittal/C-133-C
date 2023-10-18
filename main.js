var Img;
var C;
var M;
var O;
var OC;
var OH;
var OW;
var OX;
var OY;
var RU="";
var status="";
var R;
var G;
var B;
var R2;
var G2;
var B2;
function preload(){
   Img= loadImage("dog_cat.jpg");
}
function setup(){
    C= createCanvas(600,400);
    C.center();
    M= ml5.objectDetector('cocossd', ML);
    document.getElementById("S").innerHTML="Status: Model Loaded!";
    M.detect(Img, GR);
    document.getElementById("S").innerHTML="Status: Analyzing the input!";
    R= Math.random()*255;
    G= Math.random()*255;
    B= Math.random()*255;
    R2= Math.random()*255;
    G2= Math.random()*255;
    B2= Math.random()*255;
}
function draw(){
   image(Img, 0, 0, 600, 400);
//   stroke(255,0,0);
//   strokeWeight(5);
//   noFill();
//   rect(50,60,400,320);
//   strokeWeight(1);
//   text("Dog", 60, 80);
//   strokeWeight(5);
//   stroke(0,255,0);
//   rect(260,80,260,300);
//   strokeWeight(1);
//   text("Cat", 270, 100);
if(status!==""){
for (i=0; i<RU.length; i++){
    O=RU[i].label
    OC=RU[i].confidence;
    OH=RU[i].height;
    OW=RU[i].width;
    OX=RU[i].x;
    OY=RU[i].y;
    if(i==0){
        stroke(R, G, B);
    } else{
        stroke(R2, G2, B2);
    }
    noFill();
    strokeWeight(5);
    rect(OX, OY, OH, OW);
    strokeWeight(1);
    text(O, OX, OY+10);
    console.log(O, OC, OH, OW, OX, OY);
    }
}
}
function GR(E,R){
    console.log(R);
    RU= R;
    status=true;
    document.getElementById("S").innerHTML="Status: Object Detected!";
}
function ML(){
    console.log("d");
   
}