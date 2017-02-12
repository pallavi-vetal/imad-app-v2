console.log('Loaded!');

//****************************For counting likes*****************************
var red= '#FF69B4';
var like_btn=document.getElementById('like-btn');
like_btn.onclick=function(){
  
    //create request object
    
    var request = new XMLHttpRequest();
    
     //capture and store response into a variable
     
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
                like_btn.style.color = red ;
                
            }
        }
        
    };
   
    
    //make a request to counter endpoint
    
    request.open('GET',"http://pallavi-vetal.imad.hasura-app.io/counter",true);
    request.send(null);
};

//************************* For Searching Operation *********************/

var search_input = document.getElementById('search-input');
var search_val = search_input.value;

var search_btn = document.getElementById('search-btn');
search_btn.onclick = function(){
  
      
};
