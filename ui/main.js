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



var search_btn = document.getElementById('search-btn');
search_btn.onclick = function(){
    
    //create request object
   
    var request = new XMLHttpRequest();
    
     //capture and store response into a variable
    var margin_top = 0;
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                //capture the list of names
                var names = request.responseText;
                names = JSON.parse(names);
                 var list = ' ';
                for(var i=0;i<names.length;i++){
                    list += '<li class="w3-animate-left">' + names[i] + '<span onclick="this.parentElement.style.display=\'none\' " class="w3-closebtn w3-margin-right w3-medium">&times;</span></li>';
                    
                }
                var search_ul=document.getElementById('search-ul');
                search_ul.innerHTML = list; 
                var search_span=document.getElementById('search-span');
                search_span.innerHTML = 'Search Result: ';
                margin_top+=10+'px';
                search_span.style.marginTop=margin+top;
                
        }
        
    }
    };
   
    
    //make a request to counter endpoint
    var search_input = document.getElementById('search-input');
    var search_val = search_input.value;
    request.open('GET','http://pallavi-vetal.imad.hasura-app.io/submit-query?name='+search_val,true);
    request.send(null);
      
};
