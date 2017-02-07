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

				var button=document.getElementById('counter');
				button.onclick=function() {
				  
				 
				  
				  var request=new XMLHttpRequest();
				  
				  
				  
				  request.onreadystatechange=function(){
				    if(request.readyState===XMLHttpRequest.DONE){
					if(request.status===200){
					    var counter=request.responseText;
					   
					    var span=document.getElementById('count');
					    span.innetHTML=counter.toString();
					 }
				   }
				      
				  };
		              request.open('GET','http://pallavi-vetal.imad.hasura-app.io/counter',true);
			   
			      request.send(null); 
				};
