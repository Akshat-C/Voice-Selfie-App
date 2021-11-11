var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start1()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function run(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;

    document.getElementById('textbox').innerHTML = Content;
    if (Content == "take my selfie")
    {
        speak(); 
    }
   
}

function speak()
{
    var synth = window.speechSynthesis;
    var sd = "Taking Your Selfie in 5 Seconds"
    var utter = new SpeechSynthesisUtterance(sd);
    synth.speak(utter);
    Webcam.attach(camera);
    setTimeout(function() {
        takepic();
        save();
    }, 5000);
}
camera = document.getElementById("camera");
Webcam.set({
    height: 250,
    width: 360,
    image_format: "png",
    png_quality: 90
});


function takepic()
{
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = "<img src="+data_uri+" id='result_img'>";
});
}



function save()
{
    lin = document.getElementById("link");
    image_pic = document.getElementById("result_img").src;
    lin.href = image_pic;
    lin.click();
}