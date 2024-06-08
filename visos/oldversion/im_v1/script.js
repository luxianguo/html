function Default() {
    document.getElementById("theta12").value = "0.297";//"0.304";
    document.getElementById("theta23").value = "0.425";//"0.539";
    document.getElementById("theta13").value = "0.0215";//"0.0214";
    document.getElementById("dm^2_21").value = "7.37e-5";//"7.53e-5";
    document.getElementById("dm^2_32").value = "2.49e-3";//"2.46e-3";
    document.getElementById("cp").value = "248";
}
function Bimaximal() {
    document.getElementById("theta12").value = "0.5";
    document.getElementById("theta23").value = "0.5";
    document.getElementById("theta13").value = "0";
    document.getElementById("dm^2_21").value = "7.37e-5";//"7.53e-5";
    document.getElementById("dm^2_32").value = "2.56e-3";//"2.46e-3";
    document.getElementById("cp").value = "0";
}
function Tribimaximal() {
    document.getElementById("theta12").value = "0.333333";
    document.getElementById("theta23").value = "0.5";
    document.getElementById("theta13").value = "0";
    document.getElementById("dm^2_21").value = "7.37e-5";//"7.53e-5";
    document.getElementById("dm^2_32").value = "2.56e-3";//"2.46e-3";
    document.getElementById("cp").value = "0";
}
function Trimaximal() {
    document.getElementById("theta12").value = "0.5";
    document.getElementById("theta23").value = "0.5";
    document.getElementById("theta13").value = "0.333333";
    document.getElementById("dm^2_21").value = "7.37e-5";//"7.53e-5";
    document.getElementById("dm^2_32").value = "2.56e-3";//"2.46e-3";
    document.getElementById("cp").value = "90";
}
function Clear() {
    document.getElementById("theta12").value = "";
    document.getElementById("theta23").value = "";
    document.getElementById("theta13").value = "";
    document.getElementById("dm^2_21").value = "";
    document.getElementById("dm^2_32").value = "";
    document.getElementById("cp").value = "";

    document.getElementById("neutrino").value = "";
    document.getElementById("energy").value = "";
    document.getElementById("distance").value = "";
    document.getElementById("density").value = "";
}

function KamLAND() {
    document.getElementById("energy").value = "0.003";
    document.getElementById("distance").value = "170";
    document.getElementById("neutrino").value = "-1";
    document.getElementById("density").value = "2.6";
}
function JUNO() {
    document.getElementById("energy").value = "0.003";
    document.getElementById("distance").value = "53";
    document.getElementById("neutrino").value = "-1";
    document.getElementById("density").value = "2.6";
}
function DayaBay() {
    document.getElementById("energy").value = "0.003";
    document.getElementById("distance").value = "1.9";
    document.getElementById("neutrino").value = "-1";
    document.getElementById("density").value = "2.6";
}
function T2K() {
    document.getElementById("energy").value = "0.6";
    document.getElementById("distance").value = "295";
    document.getElementById("neutrino").value = "2";
    document.getElementById("density").value = "2.6";
}
function HKK() {
    document.getElementById("energy").value = "0.75";
    document.getElementById("distance").value = "1100";
    document.getElementById("neutrino").value = "2";
    document.getElementById("density").value = "2.6";
}
function NOvA() {
    document.getElementById("energy").value = "2";
    document.getElementById("distance").value = "810";
    document.getElementById("neutrino").value = "2";
    document.getElementById("density").value = "2.6";
}
function DUNE() {
    document.getElementById("energy").value = "2.4";
    document.getElementById("distance").value = "1284.9";
    document.getElementById("neutrino").value = "2";
    document.getElementById("density").value = "2.6";
}
function DUNELE() {
    document.getElementById("energy").value = "0.8";
    document.getElementById("distance").value = "1284.9";
    document.getElementById("neutrino").value = "2";
    document.getElementById("density").value = "2.6";
}
function nuSTORM() {
    document.getElementById("energy").value = "3.5";
    document.getElementById("distance").value = "2500";
    document.getElementById("neutrino").value = "1";
    document.getElementById("density").value = "2.6";
}

function Load(){

    Clear();

    d3.select("#reset").on("click", function() {
        d3.selectAll("path").remove();
        d3.select("#svg2").html("");
        d3.select("#timetext").remove();
        ii=-1;
        document.getElementById('Legenddiv').style.height = "0px";
        document.getElementById('start').disabled = false;
        clicks = 0;
    });

    var width = 730; //580
    var height = 650; //500

    var margin = {top: 25*(13-6*Math.sqrt(3)), right: 80, bottom: 25*(13-6*Math.sqrt(3)),left: 50}, //{top: 20, right: 80, bottom: 30, left: 50}
    innerwidth = width - margin.left - margin.right,
    innerheight = height - margin.top - margin.bottom ;

    var svg = d3.select("#Animationdiv")
        .append("svg")
        .attr("width", width)
        .attr("height", height)
        .append("g")
        .attr("transform", "translate(" + 50 + "," + 20 + ")") ; //
        //.attr("transform", "translate(" + margin.left + "," + margin.top + ")") ;

    var x_scale = d3.scale.linear()
        .range([0, innerwidth])
        .domain([-0.70711, 0.70711]);

    var y_scale = d3.scale.linear()
        .range([innerheight, 0])
        .domain([0, 1.22475]);

    svg.append("svg:image")
        .attr('x', 610) //460
        .attr('y', 519) //450
        .attr('width', 25)
        .attr('height', 25)
        .attr("xlink:href", "tau.png")

    svg.append("svg:image")
        .attr('x', -20) //-20
        .attr('y', 519) //450
        .attr('width', 25)
        .attr('height', 25)
        .attr("xlink:href", "muon.png")

    svg.append("svg:image")
        .attr('x', 290) //217
        .attr('y', -20) //-20
        .attr('width', 25)
        .attr('height', 25)
        .attr("xlink:href", "electron.png")

    var x_axis = d3.svg.axis()
        .scale(x_scale)
        .orient("bottom") ;

    var y_axis = d3.svg.axis()
        .scale(y_scale)
        .orient("left") ;

    var trianglePoints = x_scale(-Math.sqrt(2)/2) + ' ' + y_scale(0) + ', ' + x_scale(Math.sqrt(2)/2) + ' ' + y_scale(0) + ', ' + x_scale(0) + ' ' + y_scale(Math.sqrt(1.5)) + ' ' + x_scale(0) + ', ' + y_scale(Math.sqrt(1.5)) + ' ' + x_scale(-Math.sqrt(2)/2) + ' ' + y_scale(0);

    svg.append('polyline')
        .attr('points', trianglePoints)
        .attr('fill','none')
        .style('stroke', 'black')
        .style('stroke-width','2px');

    svg.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + innerheight + ")");
    //  .call(x_axis);

    svg.append("g")
        .attr("class", "y axis");
    //  .call(y_axis) ;

    document.getElementById('overlay').checked = true;


    var color = d3.scale.category10();
    var s=0;
    var ii=-1;

//    svg.append("text")
//        .attr("x", 30)
//        .attr("y", 10)
//        .attr("text-anchor", "middle")
//        .style('font-size','20px')
//        .style('font-family','Arial')
//        .html("Time (\u03BCs):");

    // svg.append("text")
    //   .attr("x", 230)
    //   .attr("y", -5)
    //   .attr("text-anchor", "middle")
    //   .style('font-size','16px')
    //   .html("\u03BD<tspan baseline-shift ='sub'>e</tspan>");

    var logo = svg.append("text")
        .attr('x', 390)//425) //275
        .attr('y', 30)
        .style('font-size','50px')
        .style('font-style','italic')
        .style('fill', 'grey')
        .style('font-weight','bold')
        .style('font-family','Arial, Helvetica, sans-serif')
        .text("VISOSim");

    var svglegend = d3.select("#Legenddiv").append("svg").attr("id","svg2");//.attr("preserveAspectRatio", "xMinYMin meet").attr("viewBox", "0 0 1300 500"); //.attr("width",800).attr("height",450);
    document.getElementById('Legenddiv').style.height = "0px"
    clicks = 0;

    function getColor(s) {
        return color(s);
    }
    function yplace(ii){
        return 20+ii*25*3 ;
    }
    function incHeight() {
      var Legenddivobject = document.getElementById("Legenddiv");
      var height = Legenddivobject.offsetHeight;
        var newHeight = height + 25*3;
      Legenddivobject.style.height = newHeight + 'px';
    }

    d3.select("#start").on("click", function() {

        if (  document.getElementById("theta12").value<0 ||
              document.getElementById("theta12").value>1 ||
              document.getElementById("theta23").value<0 ||
              document.getElementById("theta23").value>1 ||
              document.getElementById("theta13").value<0 ||
              document.getElementById("theta13").value>1 ||
              document.getElementById("energy").value<0  ||
              document.getElementById("distance").value <0 ||
              document.getElementById("theta12").value == "" ||
              document.getElementById("theta23").value == "" ||
              document.getElementById("theta13").value == "" ||
              document.getElementById("dm^2_21").value == "" ||
              document.getElementById("dm^2_32").value == "" ||
              document.getElementById("cp").value == "" ||
              document.getElementById("neutrino").value == ""||
              document.getElementById("energy").value == "" ||
              document.getElementById("distance").value == "" ||
              document.getElementById("density").value == "") {

                alert("Error:Please enter appropriate values!")
              return;
        }

        if (document.getElementById('overwrite').checked == true){

            d3.selectAll("path").remove();
        };
        if (document.getElementById('overlay').checked == true){};

        d3.select("#timetext").remove();

        if (s < 10) {s=s+1};
        if (s>9) {s=0};
        ii=ii+1;
        var ptr = Module._Propagate(Number(document.getElementById("theta12").value), Number(document.getElementById("theta23").value), Number(document.getElementById("theta13").value),Number(document.getElementById("dm^2_21").value), Number(document.getElementById("dm^2_32").value),(Number(document.getElementById("cp").value)*((Math.PI)/180)),
                                    Number(document.getElementById("energy").value), Number(document.getElementById("distance").value), Number(document.getElementById("neutrino").value),Number(document.getElementById("density").value));
        var X = [];
        var Y = [];
        var D = [];

        for (i = 0; i <44000; i++) {
            X[i] = Module.HEAPF64[(ptr >> 3) + i];
            Y[i] = Module.HEAPF64[(ptr >> 3) + i + 44000];
            //D[i] = s ;
            //ds = Number(document.getElementById("distance").value)/44000;
            //s = s + ds;

            //    D[i] = Module.HEAPF64[(ptr >> 3) + i + 88000];
        }

        Module._free_buf(ptr);

        var data = [ { x: X,
                       y: Y }] ;

        svg.datum(data);

        var data_lines = svg.selectAll(".line")
            .data(data.map(function(d) {return d3.zip(d.x, d.y);}))
            .enter().append("g")
            .attr("class", "line");

        var draw_line = d3.svg.line()
            .x(function(d) { return x_scale(d[0]); })
            .y(function(d) { return y_scale(d[1]); })
            .interpolate("cardinal");

        var neutrino = document.getElementById("neutrino");
        var neutrinotext = neutrino.options[neutrino.selectedIndex].text;
        var density = document.getElementById("density");
        var densitytext = density.options[density.selectedIndex].text;

        stmp=
            'sin²\u03D1(12):'+ document.getElementById("theta12").value+"; "+
            'sin²\u03D1(23):'+ document.getElementById("theta23").value+"; "+
            'sin²\u03D1(13):'+ document.getElementById("theta13").value+"; "+
            "<tspan x='3em' dy='1.5em'>"+
            '\u0394m²(21):'  + document.getElementById("dm^2_21").value+" eV²; "+
            '\u0394m²(32):'  + document.getElementById("dm^2_32").value+" eV²; "+
            '\u03B4CP:'      + document.getElementById("cp").value+"&#176;; "+
            "<tspan x='3em' dy='1.5em'>"+
            neutrinotext+"; "+
            'E:'             + document.getElementById("energy").value+" GeV; "+
            'L:'             + document.getElementById("distance").value+" km; " +
            '\u03c1:'        + document.getElementById("density").value+" g/cm\u00B3"

        if (document.getElementById('overwrite').checked == true){
            clicks = 1;
            ii=0;
            d3.select("#svg2").html("");

            document.getElementById('Legenddiv').style.height = "75px";
        };

        svglegend.append("circle").attr("cx",20).attr("cy", yplace(ii-0.2/3)).attr("r", 5).style("fill", getColor(s));
        svglegend.append("text")
            .attr("x",40)
            .attr("y", yplace(ii))
            .html(stmp)
            .style("font-size", "15px")
            .attr("text-anchor", "left")
            .style("alignment-baseline", "middle");

        if (document.getElementById('overlay').checked == true){
            clicks = clicks + 1;
            if(clicks > 1  ){
              incHeight()
            }
            else{
                document.getElementById('Legenddiv').style.height = "75px";
            }
        };

        var path = svg.selectAll("#path")
            .data(data.map(function(d) {return d3.zip(d.x, d.y);}))
            .enter().append("path")
            .attr("class","line")
            .style("stroke", getColor(s))
            .attr("d", function(d) {return draw_line(d);});

        path.each(function(d) { d.totalLength = path.node().getTotalLength(); })
            .attr("stroke-dasharray", function(d) { return d.totalLength + " " + d.totalLength; })
            .attr("stroke-dashoffset", function(d) { return d.totalLength; })
            .transition()
            .duration(5000)
            .ease("linear")
            .attr("stroke-dashoffset", 0);


//        var time = svg.append("text")
//            .attr("x", 40)
//            .attr("y", 11)
//            .attr("id","timetext")
//            .attr("text-anchor", "start")
//            .style('font-size','20px')
//            .style('font-family','Arial')
//            .text((Number(document.getElementById("distance").value)/(0.3)).toFixed(3));

    });
}
