///document.addEventListener('DOMContentLoaded', postButtons);
document.addEventListener('DOMContentLoaded', trip);



/*
function postButtons(){
    //submit
        document.getElementById('postsub').addEventListener('click', function(event){
          var request2 = new XMLHttpRequest();
         // var payload = {input:null}
        //set payload
        var input = document.getElementById('Name').value;
        var UserEmail = document.getElementById('Email').value;
        var UserMessage = document.getElementById('Message').value;
        var payload = "Name="+input+"&Email="+UserEmail+"&Message="+UserMessage;
        ///
          request2.open('post', 'http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php', true);
          request2.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
          request2.send(payload);
        })
    }

    function postButtons(){
        //submit
            document.getElementById('postsub').addEventListener('click', function(event){
              var request2 = new XMLHttpRequest();
              var payload = {input:null}
            //set payload
            var UserName = document.getElementById('Name').value;
            var UserEmail = document.getElementById('Email').value;
            var UserMessage = document.getElementById('Message').value;
    
            ///
            request2.open("GET", "http://web.engr.oregonstate.edu/~zhangluy/tools/class-content/form_tests/check_request.php?Name="+UserName+"&Email="+UserEmail+"&Message="+UserMessage, true);
         
            })
        }
        

        */

        function trip(){
            var tval = document.getElementById("trip").textContent;
            document.getElementById("sbox").textContent = tval;
            if(tval == "Norway"){
                document.getElementById("title").style.backgroundImage = "url(./images/norwayflag.jpg)";
            }else if(tval == "Newfoundland"){
                document.getElementById("title").style.backgroundImage = "url(./images/newfoundland-flag.png)";
            }else if(tval == "Patagonia"){
                document.getElementById("title").style.backgroundImage = "url(./images/chile-flag.png)";
            }
        }
       