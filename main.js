function setup(){
    canvas=createCanvas(400,400);
    canvas.center()
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/lKKwblVEk/model.json',modelLoaded);
}

function modelLoaded(){
    console.log("Model Is On");
}

function draw(){
    image(video,0,0,400,400);
    classifier.classify(video,gotResult);
}

function gotResult(error,Results){
    if (error){
        console.error(error);
    }
    else{
        console.log(Results);
        document.getElementById("O_N").innerHTML=Results[0].label;
        document.getElementById("O_A").innerHTML=Results[0].confidence.toFixed(3);
    }
}
