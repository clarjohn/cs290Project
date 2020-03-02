///document.addEventListener('DOMContentLoaded', postButtons);
document.addEventListener('DOMContentLoaded', trip);
document.getElementById('buttonClick').addEventListener("click", exportTableToCSV);

        function trip(){
            var tval = document.getElementById("trip").textContent;
            document.getElementById("sbox").textContent = tval;
            var tripdetail = [];
            //list items
            var countylist =  [];
  
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
                                {day:"0",location:"Home",desc:"Leave for your trip"},
                                {day:"1",location:"stjohn",desc:"Arrive"},
                                {day:"2",location:"stjohn",desc:"Drive to Cape Merry"},
                                {day:"3",location:"Cape Merry",desc:"see the sea birds"},
                                {day:"4",location:"Bonvista",desc:"watch the storms roll in"},
                                {day:"5",location:"Bull Run",desc:"go on a Puffin tour"},
                                {day:"6",location:"Terra Nova",desc:"Look for Moose"},
                                {day:"7",location:"Trinity",desc:"Visit the old town"},
                                {day:"8",location:"Rsnt",desc:"Check out the root cellers"},
                                {day:"9",location:"Twillingate",desc:"Iceberg tour"},
                                {day:"10",location:"Brokkings",desc:"See the freshwater fjords"},
                                {day:"10",location:"viking way",desc:"See where the viking settled in North America"},
                                {day:"11",location:"St John",desc:"Head Back to St Johns"},
                                {day:"12",location:"St John",desc:"Go out for the night on Geogre St"},
                                {day:"13",location:"St John",desc:"Fly Home"},
                                {day:"14",location:"Home",desc:"Plan your next vist"}
                            ]
            }else if(tval == "Patagonia"){
                document.getElementById("title").style.backgroundImage = "url(./images/chile-flag.png)";
                tripdetail = [
                                {day:"0",location:"Home",desc:"Leave for your trip"},
                                {day:"1",location:"Santiago",desc:"Arrive"},
                                {day:"2",location:"Santiago",desc:"Explore the city"},
                                {day:"3",location:"Lake District",desc:"Arrive"},
                                {day:"4",location:"Lake District",desc:"Go for a Hike"},
                                {day:"5",location:"Lake District",desc:"Go mountaining climbing"},
                                {day:"6",location:"Lake District",desc:"Eat the food so Good"},
                                {day:"7",location:"Lake District",desc:"fly to Punta Arenas"},
                                {day:"8",location:"Punta Arenas",desc:"Check out the straight and view terra del fuego!"},
                                {day:"9",location:"Punta Arenas",desc:"Head to torre del Paine"},
                                {day:"10",location:"Torre del Paine",desc:"Hike up to the towers"},
                                {day:"11",location:"Torre del Paine",desc:"Go find Gunacos"},
                                {day:"12",location:"Torre del Paine",desc:"Go see the glacers"},
                                {day:"13",location:"Torre del Paine",desc:"Take a bike tour"},
                                {day:"14",location:"Torre del Paine",desc:"Head back to Punta Arenas"},
                                {day:"15",location:"Punta Arenas",desc:"Head back to Punta Arenas"},
                                {day:"16",location:"Punta Arenas",desc:"Head back to Santiago"},
                                {day:"17",location:"Santiago",desc:"Fly Home"},
                                {day:"18",location:"Home",desc:"Plan your next vist"}
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


if(tval == "Norway"){
    countylist =  {Capital:"Oslo",Population:"5 Million",Wiki:"https://en.wikipedia.org/wiki/Norway",CIA:"https://www.cia.gov/library/publications/the-world-factbook/geos/no.html"}
}else if(tval == "Newfoundland"){
    countylist =  {Capital:"St Johns",Population:"520,000",Wiki:"https://en.wikipedia.org/wiki/Newfoundland_(island)",CIA:"https://www.newfoundlandlabrador.com/"}
}else if(tval == "Patagonia"){
    countylist =  {Capital:"Santiago",Population:"18 Million",Wiki:"https://en.wikipedia.org/wiki/Chile",CIA:"https://www.cia.gov/library/publications/the-world-factbook/geos/ci.html"}
}

document.getElementById("Capital").textContent = "The capital: "+countylist.Capital;
document.getElementById("Population").textContent = "The population is:"+countylist.Population;



        }
      

//functions to download table to csv






function download(csv, filename) {
    var csvF;
    var downloadLink;
    csvF = new Blob([csv], {type: "text/csv"});
    downloadLink = document.createElement("a");
    downloadLink.download = filename;
    downloadLink.href = window.URL.createObjectURL(csvF);
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
    downloadLink.click();
}



function exportTableToCSV() {
    var filename = 'Your_Trip.csv';
    var csv = [];
    var rows = document.querySelectorAll("table tr");
    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll("td, th");
        for (var j = 0; j < cols.length; j++) 
            row.push(cols[j].innerText);
        csv.push(row.join(","));        
    }
    // Download CSV file
    download(csv.join("\n"), filename);
}