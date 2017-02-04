console.log('Loaded!');

var profile = document.getElementById('propic');
var margin = 0;
function moveRight(){
    margin = margin + 10;
    if(margin <50){
    profile.style.marginLeft = margin + 'px';
    }
    else{
         margin = 0;
        while(margin<150){
       
        var inter = setInterval(moveDown,100);
    }
    } 
    }

function moveDown(){
    margin = margin +10;
    profile.style.marginTop = margin + 'px';
}
profile.onclick = function(){
   var inter = setInterval(moveRight,100);
};