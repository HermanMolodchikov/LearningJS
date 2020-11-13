
window.onload = init;
function init() {
    var map = document.getElementById("map");
    map.onclick = showCoords;
}

function showCoords(eventObj) {
    var map = document.getElementById("coords");
    var x = eventObj.clientX;
    var y = eventObj.clientY;
    map.innerHTML = "Map coordinates: "+ x + ", " + y;
}


function pushB() {
    var pushButton = document.getElementById("pushbutton");
    pushButton.onclick = timerMsg;
}

function timerMsg() {
    var textArea = document.getElementById("textarea");
    phrase = document.getElementById("phrase");
    for(var i = 0; i < phrase.length; i++) {
        textArea.innerHTML(phrase[i]);
        console.log(phrase[i]);
    }
}


pushB();
