//Global Var
var table = []; //to store the rows as lists, starting from top to bottom
//var row_max = Object.keys(pm25[0]).length;

function printMapInfo(pm25){
  var row_max = Object.keys(pm25[0]).length;

  //a loop that makes each row
  for (row=0; row<row_max; row++){
      var rowNode = document.createElement("tr");

    //a loop that makes each data cell within one row
    for (col = 0; col<2; col++){
      var d = document.createElement("td");
      d.id = "d" + row + col; //give an id to each of the data cell
    }
  }
}
