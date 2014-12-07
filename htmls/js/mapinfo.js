//This is to print the table containing data from the json files
function printMapInfo(pm25){
    var table = document.getElementById("map-data");
    
    //get the number of keys in one set of data in the json file to decide how many rows to print
    var row_max = Object.keys(pm25[0]).length;
    //console.log(Object.keys(pm25[0])); //for testing
    
    //a loop that makes each row
    for (row=0; row<row_max; row++){
        var rowNode = document.createElement("tr");

      //a loop that makes each data cell within one row
      for (col = 0; col<2; col++){
          var d = document.createElement("td");
          //the first colum in each row needs to show the key of each key/value pairs in the json file
          if (col === 0){
            d.innerHTML = Object.keys(pm25[0])[row] + ":";
            d.className = "td-capital";
          }
          //the second colum in each row needs to show the value of each key/value pair in the json file
          if (col === 1){
              //assign Class and ID to 2nd data cell in each row to bind data and style data. 
              //The tricky part - to get value from the inherently 'unordered' JS object by 'indexing' the key
              d.id = "note-" + Object.keys(pm25[0])[row];
              if (row !== 0){
                d.className = "note-city";
              }
          }
          rowNode.appendChild(d);
      }
    table.appendChild(rowNode);
    }
}
