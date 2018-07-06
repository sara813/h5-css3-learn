
var btnElem = document.getElementById("btn");
btnElem.addEventListener("click",function(){
    var videoEle = document.getElementById("audio-elem");
console.log(videoEle,11111);
videoEle.play();
});

window.onload = function(){
    var videoEle = document.getElementById("audio-elem");
console.log(videoEle,11111);
videoEle.play();
};

