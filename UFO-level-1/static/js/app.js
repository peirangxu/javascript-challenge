// from data.js
var tableData = data;

// Reference to table
var table_body = d3.select("tbody");

// Input element and button
var text = d3.select(".form-control");
var button = d3.select("#filter-btn");

// Append table to the webpage
function table(r) {
    r.forEach(sighting => {
        var row = table_body.append("tr");
        Object.entries(sighting).forEach(([key,value])=>{
            var entries = row.append("td").text(value);
        });
    });
};
table(tableData);

// function to filter table by date/time
function handleChange() {
    table_body.html("");
    // value of the input field
    var inputText = text.property("value");
    console.log(inputText);
    // filtered data
    var filtered_data = tableData.filter(tableData => tableData.datetime === inputText);

    console.log(filtered_data);
    if (filtered_data.length !== 0) {
        // rows matches user input
        table(filtered_data);
    } else{
        alert("Result Not Found");
        table(tableData);
    };
};

button.on("click",handleChange);
