//load map of China
var paper = Raphael("paper1",600,489);
paper.image("img/china-sm.png",0,0,600,489);

function updateDate(val){
    document.getElementById("note1").innerHTML=pm25[val]["date"];

    var rbj = pm25[val]["beijing"]/5;
    var rsh = pm25[val]["shanghai"]/5;
    var rgz = pm25[val]["guangzhou"]/5;
    var rcd = pm25[val]["chengdu"]/5;
    var rsy = pm25[val]["shenyang"]/5;

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
};
