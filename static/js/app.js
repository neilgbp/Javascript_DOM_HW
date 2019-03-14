// from data.js
var tableData = data;
var tbody = d3.select("tbody");
var submit = d3.select("#filterButton");


// on startup - load data table into the html page
function onStart() {
    data.forEach((entry) => {
        var row = tbody.append("tr");
        Object.entries(entry).forEach(([key, value]) => {
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
}
onStart();
