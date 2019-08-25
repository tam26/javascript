var tableData = data;

let tbody = d3.select("tbody");

tbody.html("");

// READ IN DATA.JS

data.forEach(item => {
    tr = tbody.append('tr')
    tr.append('td').text(item.datetime)
    tr.append('td').text(item.city)
    tr.append('td').text(item.state)
    tr.append('td').text(item.country)
    tr.append('td').text(item.shape)
    tr.append('td').text(item.durationMinutes)
    tr.append('td').text(item.comments)

});

// SET UP FILTER

var button = d3.select('#filter-btn');

button.on("click", function() {
    var input = d3.select('#datetime');
    var value = input.property("value");
    var filtered_data = tableData.filter(item => {
        return item.datetime === value;
    });

var tbody = d3.select("tbody");

//RESET RESULTS

tbody.html("");

//RETURN FILTERED RESULTS

filtered_data.forEach(item => {
    tr = tbody.append('tr')
    tr.append('td').text(item.datetime)
    tr.append('td').text(item.city)
    tr.append('td').text(item.state)
    tr.append('td').text(item.country)
    tr.append('td').text(item.shape)
    tr.append('td').text(item.durationMinutes)
    tr.append('td').text(item.comments)
});

})

