// from data.js
var tableData = data;

// Reference to table
var table_body = d3.select("tbody");

// Input element and button
var text = d3.select(".form-control");
var button = d3.select("#filter-btn");

// Append table to the webpage
tableData.forEach(sighting => {
    var row = table_body.append("tr");
    Object.entries(sighting).forEach(([key,value])=>{
        var entries = row.append("td").text(value);
    });
});

function handleChange() {
    table_body.html("")
    // value of the input field
    var inputText = text.property("value");
    console.log(inputText);
    // filtered data
    var filtered_data = tableData.filter(tableData => tableData.datetime === inputText);

    console.log(filtered_data);

    // rows matches user input
    filtered_data.forEach(filtered =>{
        var new_row = table_body.append("tr")
        Object.entries(filtered).forEach(([key,value]) =>{
            var new_entries = new_row.append("td").text(value);
        });
    });

};

button.on("click",handleChange)
