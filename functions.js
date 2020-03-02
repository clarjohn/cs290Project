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
        

      

        function Locations(locval){
            document.getElementById("test").textContent = "Table";
            if(locval == "Nor"){
                var tripdetail = [{day:"1",location:"Oslo",desc:"Arrive"}
                                  ,{day:"2",location:"Oslo",desc:"Go to Viking Museum"}
                                  ,{day:"3",location:"Oslo",desc:"Go Sledding"}
                                ]
            }else if(locval == "New"){
                var tripdetail = [{day:"1",location:"stjohn",desc:"Arrive"}
                                 ,{day:"2",location:"stjohn",desc:"Drive to Cape Merry"}
                                 ,{day:"3",location:"Cape Merry",desc:"see the sea birds"}
            ]

            }else if(locval == "Pat"){
                var tripdetail = [{day:"1",location:"Santiago",desc:"Arrive"}
                                 ,{day:"2",location:"Santiago",desc:"Explore the city"}
                                  ,{day:"3",location:"Lake District",desc:"Arrive"}
            ]
            }
            var table = document.getElementById("exTripody");
            for(var t in tripdetail){
                var row = table.insertRow();

                 for(var d in t ){
                     let th = row.insertCell();
                     let text = document.createTextNode(t[d]);

                     cell.appendChild(text);
                 }
            }
        }



        function trip(){
            var tval = document.getElementById("trip").textContent;
            document.getElementById("sbox").textContent = tval;
            if(tval == "Norway"){
                document.getElementById("title").style.backgroundImage = "url(./images/norwayflag.jpg)";
                Locations("Nor");
    
            }else if(tval == "Newfoundland"){
                document.getElementById("title").style.backgroundImage = "url(./images/newfoundland-flag.png)";
                Locations("New");
            }else if(tval == "Patagonia"){
                Locations("Pat");
            }




 



        }
*/


        function trip(){
            var tval = document.getElementById("trip").textContent;
            document.getElementById("sbox").textContent = tval;
            var tripdetail = [];
            if(tval == "Norway"){
                document.getElementById("title").style.backgroundImage = "url(./images/norwayflag.jpg)";
                 tripdetail = [
                                    {day:"0",location:"Home",desc:"Leave for your trip"},
                                    {day:"1",location:"Oslo",desc:"Arrive"},
                                    {day:"2",location:"Oslo",desc:"Go to Viking Museum"},
                                    {day:"3",location:"Oslo",desc:"Go Sledding"},
                                    {day:"4",location:"Oslo",desc:"Go See the ski jump"},
                                    {day:"5",location:"Tromso",desc:"fly to Tromso"},
                                    {day:"6",location:"Tromso",desc:"Go see the northern lights"},
                                    {day:"7",location:"Tromso",desc:"have a beer"},
                                    {day:"8",location:"Tromso",desc:"Go Skiing"},
                                    {day:"9",location:"Tromso",desc:"Go Showshoeing"},
                                    {day:"10",location:"Tromso",desc:"visit the Sami"},
                                    {day:"11",location:"Sweden",desc:"Day trip to Sweden"},
                                    {day:"12",location:"Bergen",desc:"tour the fjords"},
                                    {day:"13",location:"Bergen",desc:"hike in mountains"},
                                    {day:"14",location:"Bergen",desc:"go out to dinner"},
                                    {day:"15",location:"Oslo",desc:"arrive back in Oslo"},
                                    {day:"16",location:"Oslo",desc:"Fly Home"},
                                    {day:"17",location:"Home",desc:"Plan your next vist"}
                                ]
    
            }else if(tval == "Newfoundland"){
                document.getElementById("title").style.backgroundImage = "url(./images/newfoundland-flag.png)";
                tripdetail = [
                                {day:"1",location:"stjohn",desc:"Arrive"},
                                {day:"2",location:"stjohn",desc:"Drive to Cape Merry"},
                                {day:"3",location:"Cape Merry",desc:"see the sea birds"}
                            ]
            }else if(tval == "Patagonia"){
                document.getElementById("title").style.backgroundImage = "url(./images/chile-flag.png)";
                tripdetail = [
                                {day:"1",location:"Santiago",desc:"Arrive"},
                                {day:"2",location:"Santiago",desc:"Explore the city"},
                                {day:"3",location:"Lake District",desc:"Arrive"}
                            ]    
            }


///load table


  
  function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
  
  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
  
  let table = document.querySelector("table");
  let data = Object.keys(tripdetail[0]);
  generateTable(table, tripdetail);
  generateTableHead(table, data);



// load list 



        }
      