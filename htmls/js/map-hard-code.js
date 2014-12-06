//load map of China
var paper = Raphael("paper1",600,489);
paper.image("img/china-sm.png",0,0,600,489);

function updateDate(val){

    document.getElementById("note-date").innerHTML=pm25[val]["date"];
    document.getElementById("note-bj").innerHTML=pm25[val]["beijing"];
    document.getElementById("note-sh").innerHTML=pm25[val]["shanghai"];
    document.getElementById("note-gz").innerHTML=pm25[val]["guangzhou"];
    document.getElementById("note-cd").innerHTML=pm25[val]["chengdu"];

    var rbj = pm25[val]["beijing"]/5;
    var rsh = pm25[val]["shanghai"]/5;
    var rgz = pm25[val]["guangzhou"]/5;
    var rcd = pm25[val]["chengdu"]/5;
//    var rsy = pm25[val]["shenyang"]/5;

    var bj = paper.circle(439,187,rbj); //Beijing
    bj.attr("fill", "#f00");
    bj.attr("stroke",0);
    bj.attr("fill-opacity", 0.1);

    var sh = paper.circle(503,303,rsh); //Shanghai
    sh.attr("fill", "#f00");
    sh.attr("stroke",0);
    sh.attr("fill-opacity", 0.1);

    var gz = paper.circle(416,420,rgz); //Guangzhou
    gz.attr("fill", "#f00");
    gz.attr("stroke",0);
    gz.attr("fill-opacity", 0.1);

    var cd = paper.circle(305,310,rcd); //chengdu
    cd.attr("fill", "#f00");
    cd.attr("stroke",0);
    cd.attr("fill-opacity", 0.1);

    //var sy = paper.circle(505,168,rsy); //shenyang
    //sy.attr("fill", "#f00");
    //sy.attr("stroke",0);
    //sy.attr("fill-opacity", 0.1);

//a function to change the background color of the cells presenting data for each city
  $(".note-city").each(function(i, obj){
    if (+$(this).html() <= 50){
      $(this).css("background-color","#7fff00").css("color","#000");
    } else if (+$(this).html() <= 100) {
      $(this).css("background-color","#ffff00").css("color","#000");
    } else if (+$(this).html() <= 150) {
      $(this).css("background-color","#ffa500").css("color","#000");
    } else if (+$(this).html() <= 200) {
      $(this).css("background-color","#ff4500").css("color","#fff");
    } else if (+$(this).html() <= 300) {
      $(this).css("background-color","#800080").css("color","#fff");
    } else if (+$(this).html() <= 500) {
      $(this).css("background-color","#800000").css("color","#fff");
    }
  });
};
//obj == this
