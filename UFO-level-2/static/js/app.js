// from data.js
var tableData = data;

// Reference to table
var tbody = d3.select("tbody");

// Input element and button
var datetime = d3.select("#datetime");
var city = d3.select("#city");
var state = d3.select("#state");
var country = d3.select("#country");
var shape = d3.select("#shape");

var button = d3.select("#filter-btn");

// Append table to webpage
function table(r){
    r.forEach(sighting => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key,value]) => {
            var entries = row.append("td").text(value);
        });
    });
};
table(tableData);

// Filter by multiple category
function handleChange() {
    tbody.html("");
    // Select input value
    var dateInputText = datetime.property("value").toLowerCase();
    var cityInputText = city.property("value").toLowerCase();
    var stateInputText = state.property("value").toLowerCase();
    var countryInputText = country.property("value").toLowerCase();
    var shapeInputText = shape.property("value").toLowerCase();

    console.log(dateInputText);
    console.log(cityInputText);
    console.log(stateInputText);
    console.log(countryInputText);
    console.log(shapeInputText);

    filter_table = tableData
    // Filtered data from tableData
    if(dateInputText !== ""){
        var filter_table = filter_table.filter(filter_table => filter_table.datetime === dateInputText);
    } 
    if(cityInputText !== ""){
        var filter_table = filter_table.filter(filter_table => filter_table.city === cityInputText);
    }
    if(stateInputText !== ""){
        var filter_table = filter_table.filter(filter_table => filter_table.state === stateInputText);
    }
    if(countryInputText !== ""){
        var filter_table = filter_table.filter(filter_table => filter_table.country === countryInputText);
    }
    if(shapeInputText !== ""){
        var filter_table = filter_table.filter(filter_table => filter_table.shape === shapeInputText);
    }

    console.log(filter_table.length);
    
    if (filter_table.length !== 0){
        table(filter_table);
    } else{
        alert("Results Not Found");
        table(tableData);
    }
}
button.on("click", handleChange)