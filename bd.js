img="";
status=""
objects=[]
Objectdetector="";
function setup(){
canvas=createCanvas(640,300)
canvas.center();
Objectdetector=ml5.objectDetector('cocossd', modelLoaded)
document.getElementById("status").innerHTML="status: object detecting "

}
function preload(){
    img=loadImage("bd.jpg")
}

function draw(){
    image(img,0,0,640,300)
    if(status!=undefined){
      Objectdetector.detect(img,gotResult)
      for(var i=0;i<objects.length;i++ ){

        document.getElementById("status").innerHTML="status: object detacted";
        fill("blue")
        percent=floor(objects[i].confidence*100);
        text(objects[i].label+""+percent+"%",objects[i].x,objects[i].y);
noFill()
stroke("blue")
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
  }
}


function modelLoaded(){
console.log("Model Loaded")
status=true;

}

function gotResult(error,results){
  if(error){
    console.error(error)
  }
  else{
    console.log(results)
    objects=results;
  }
}