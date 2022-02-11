x = 0;
y = 0;
draw_circle = "";
draw_rect = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "system is listening please speak now";
    recognition.start();
}

recognition.onresult = function(event) {
    
    console.log(event);

    var content = event.results[0][0].trascript;

    document.getElementById("status").innerHTML = "The speech has been recognized as:" + content;
    if(content=="circle")
    {
        x = Math.floor(math.random()  * 900);
        y = Math.floor(math.random()  * 600); 
        document.getElementById("status").innerHTML = "started drawing rectangle";
        draw_rect = "set" 
    }
}

function setup() {
    canvas = createCanvas(900,900)
}

function draw() {
    if(draw_circle == "set")
    {
        radius = math.floor(math.random()  * 100)
        circle(x,y,radius);
        document.getElementById("status").innerHTML = "Circle is drawn.  ";
        draw_circle = "";
    }

    if(draw_rect == "set")
    {
        rect(x,y,70,50);
        document.getElementById("status").innerHTML = "Rectangle is drawn. ";
        draw_rect = "";
    }
}