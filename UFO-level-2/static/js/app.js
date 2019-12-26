// from data.js
var tableData = data;

// Reference to table
var tbody = d3.select("tbody");

// Input element and button
var input_element = d3.select(".form-control");
var button = d3.selectAll(".dropdown-item");

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
    input_text = input_element.property("value").toLowerCase();
    filter_category = d3.select(this).text();
    console.log(filter_category);
    console.log(input_text);

    // Filtered data from tableData
    filtered_data = tableData.filter(tableData => tableData[filter_category] === input_text);
    if (filtered_data.length !== 0) {
        table(filtered_data);
    } else {
        alert("Result Not Found");
        table(tableData);
    };

}
button.on("click", handleChange)