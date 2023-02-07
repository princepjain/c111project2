prediction1 = ""
prediction2 = ""



Webcam.set({
    width :350,
   height: 300,
   image_format: "png",
   png_quality:90
})


Webcam.attach('#camera')

function take_snapshot(){
    Webcam.snap(function(data_url){
        document.getElementById("result").innerHTML = "<img id='result_image' src ='"+ data_url +"'>"
    })
}

console.log('ml5 version:', ml5.version)

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/opo7MxEig/model.json", modelloaded)

function modelloaded(){
 console.log(("model has loaded"))
}
