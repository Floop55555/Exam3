const categoryurl = " https://countriesnow.space/api/v0.1/countries/population/cities"
let app = document.getElementById("table")
let drivers = [];
const body = document.getElementById("root");
let cityData = []

function handleOnLoad()
{
    createCityArray()
}

function createCityArray()
{
    fetch(categoryurl).then(function(response){
        console.log(response);
        return response.json();
    }).then(function(json){
        console.log(json);
        createTable(json);
});
}

function createTable(driverData)
    {
    let table = document.createElement("table");
        
    table.style.border = "1px solid #000";
    table.id = "cityTable";

    let tableBody = document.createElement("tbody");
    tableBody.style.border = "1px solid #000";
    tableBody.id = "citytableBody";
    table.appendChild(tableBody);

    let tableRow = document.createElement("tr");
    tableRow.style.border = "1px solid #000";
    tableBody.appendChild(tableRow);

    let tableHeader1 = document.createElement("th");
    tableHeader1.style.width = "200px"
    tableHeader1.style.border = "1px solid #000";
    tableHeader1.appendChild(document.createTextNode('City Name'));
    tableRow.appendChild(tableHeader1);

    let tableHeader2 = document.createElement("th");
    tableHeader2.style.width = "75px"
    tableHeader2.style.border = "1px solid #000";
    tableHeader2.appendChild(document.createTextNode('City Country'));
    tableRow.appendChild(tableHeader2);

    let tableHeader3 = document.createElement("th");
    tableHeader3.style.border = "1px solid #000";
    tableHeader3.appendChild(document.createTextNode('Population'));
    tableRow.appendChild(tableHeader3);
    
    driverData.forEach(city => {
            let tr = document.createElement("tr");
            tableBody.appendChild(tr);
            
            let td1 = document.createElement("td");
            td1.style.border = "1px solid #000";
            td1.appendChild(document.createTextNode(`${city.city}`));
            tr.appendChild(td1);
            
            let td2 = document.createElement("td");
            td2.style.border = "1px solid #000";
            td2.appendChild(document.createTextNode(`${city.country}`));
            tr.appendChild(td2);
            
            let td3 = document.createElement("td");
            td3.style.border = "1px solid #000";
            td3.appendChild(document.createTextNode(`${city.populationCounts[0].value}`));
            tr.appendChild(td3);
    })
   app.appendChild(table);
}