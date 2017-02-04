console.log('Loaded!');

var profile = document.getElementById("propic");
var margin = 0;
function moveRight(){
    margin = margin + 10;
    profile.style.marginLeft = margin + "px";
}
profile.onClick = function(){
    var interval =setInterval(moveRight,50);
};