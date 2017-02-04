console.log('Loaded!');

var profile = document.getElementById('propic');
var margin = 0;
function moveRight(){
    margin = margin + 10;
    profile.style.marginLeft = margin + 'px';
    }

function moveDown(){
    margin = margin +10;
    profile.style.marginRight = margin + 'px';
}
profile.onclick = function(){
    if(margin < 50){
        var interval =setInterval(moveRight,50); 
    }
    else{
        margin = 0;
        var inter =setInterval(moveDown,50);
    }
};