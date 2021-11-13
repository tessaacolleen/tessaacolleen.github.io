console.log("Hello")

let width = 970
let height = 700
var svg = d3.select("#viz")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .style("width", width)
            .style("height", height)

svg.append("circle")
.attr("cx", 50)
.attr("cy", 50)
.attr("r", 40)
.attr("fill", "lavender")

