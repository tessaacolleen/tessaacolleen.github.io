console.log("Hello!")

let width = 970
let height = 700
var svg = d3.select("#viz")
            .append("svg")
            .attr("width", width)
            .attr("height", height)
            .style("width", width)
            .style("height", height)