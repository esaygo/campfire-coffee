'use strict'; //puts more sctrict rules over js

//define Global variables
var hours           = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12 noon', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm'];
var sumTotalPounds  = 0;
var chartData       = [[]];
var chartNewKiosk   = [[]];

//arrays of coffee shops
var coffeArray = [
  ['Pike Place', 14, 55, 1.2, 3.7],
  ['Capitol Hill', 32, 48, 3.2, 0.4],
  ['Seattle Library', 49, 75, 2.6, 0.2],
  ['South Lake Union', 35, 88, 1.3, 3.7],
  ['Sea-Tac Airport', 68, 124, 1.1, 2.7],
  ['Website Sales', 3, 6, 0, 6.7]
];

//get form elements
var formNewStore    = document.getElementById('newStoreForm');
var newStoreButton  = document.getElementById('createStoreBtn');

//load google chart
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);


//object kiosk. Use a function constructor to generate all kiosk objects
function Kiosk (name, minCust, maxCust, avgCups, avgPounds) {
  this.name         = name;
  this.minCust      = minCust;
  this.maxCust      = maxCust;
  this.avgCups      = avgCups;
  this.avgPounds    = avgPounds;
  this.noCustomers  = [];

  this.getNoCustomers = function() {
    for (var i = 0; i < hours.length; i++) {
      this.noCustomers.push((Math.ceil(Math.random() * (this.maxCust - this.minCust +1) + this.minCust)));
    }
  };

  this.getNoCups = function(customersParameter) {
    return this.avgCups * customersParameter;
  };

  this.getAvgPounds = function(customersParameter) {
    return this.avgPounds * customersParameter;
  };

  this.getAvgSales = function(customersParameter) {
    return (customersParameter *(this.avgCups / 20 + this.avgPounds));
  }
}

function render() {
  //create table for projections by hour in lbs
  var sectEl  = document.getElementById('proj-hourly');
  var tblEl   = document.createElement('table');
  tblEl.id    = 'dataTable';
  var trEl    = document.createElement('tr');
  var thEl    = document.createElement('th');

  thEl.textContent = '';
  trEl.appendChild(thEl);

  //table header - display hours
  for(var i = 0; i < hours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    trEl.appendChild(thEl);
  }

  //create the Totallbs heading
  var thElTotal = document.createElement('th');
  thElTotal.textContent = 'Total lbs';
  trEl.appendChild(thElTotal);

  //append header table to table and html section
  tblEl.appendChild(trEl);
  sectEl.appendChild(tblEl);

  //create row headers for each coffee shop.
  for(var i = 0; i < (coffeArray.length); i++) {
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = coffeArray[i][0];
    trEl.appendChild(thEl);
    tblEl.appendChild(trEl);
    sectEl.appendChild(tblEl);

    //create new objects for each coffee shop eg: pikePlace = new Kiosk('Pike', 14, 55, 1.2, 3.7);
    var objKiosk = new Kiosk(coffeArray[i][0],coffeArray[i][1],coffeArray[i][2], coffeArray[i][3], coffeArray[i][4]);
    objKiosk.getNoCustomers();

    //create td for hourly sales
    for(var j = 0; j < hours.length; j++) {
      var tdEl = document.createElement('td');
      tdEl.textContent = objKiosk.getAvgSales(objKiosk.noCustomers[j]).toFixed(1);
      trEl.appendChild(tdEl);
      tblEl.appendChild(trEl);
      sectEl.appendChild(tblEl);
      sumTotalPounds = sumTotalPounds + parseFloat(objKiosk.getAvgSales(objKiosk.noCustomers[j]));
    }

    chartData.push([objKiosk.name,sumTotalPounds]);
    //create cells for the totals lbs by shop
    var tdElTotal = document.createElement('td');
    tdElTotal.textContent = Number(Math.ceil(sumTotalPounds)).toLocaleString('en');
    tdElTotal.className ="total-lbs";
    trEl.appendChild(tdElTotal);
    tblEl.appendChild(trEl);
    sectEl.appendChild(tblEl);
  }//for coffeArray
}

//Code for form - adding new stores
function renderForm(name, minCust, maxCust, avgCups, avgPounds) {
  var newData = document.getElementById('dataTable');
  var trEl    = document.createElement('tr');
  var thEl    = document.createElement('th');
  thEl.textContent = name;
  trEl.appendChild(thEl);
  newData.appendChild(trEl);

  //create new coffee shop with values filled in by user
  var objKiosk = new Kiosk(name, minCust, maxCust, avgCups, avgPounds);
  objKiosk.getNoCustomers();

  //create td for hourly sales
  var sumTotalPounds = 0;
  for(var j = 0; j < hours.length; j++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = objKiosk.getAvgSales(objKiosk.noCustomers[j]).toFixed(1);
    trEl.appendChild(tdEl);
    newData.appendChild(trEl);
    sumTotalPounds = sumTotalPounds + parseFloat(objKiosk.getAvgSales(objKiosk.noCustomers[j]));
  }

  //update the chart array
  chartNewKiosk.push([document.getElementById('newKiosk').value,sumTotalPounds]);

  var tdElTotal = document.createElement('td');
  tdElTotal.textContent = sumTotalPounds.toFixed(2);
  tdElTotal.className = "total-lbs";
  trEl.appendChild(tdElTotal);
  newData.appendChild(trEl);
}

//google chart
function drawChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Kiosk');
  data.addColumn('number', 'Lbs per day');
  for (var i = 0; i < chartData.length; i++) {
    data.addRow([chartData[i][0], chartData[i][1]]);
  }

  for (var i = 0; i < chartNewKiosk.length; i++) {
    data.addRow([chartNewKiosk[i][0], chartNewKiosk[i][1]]);
  }
  var options = {
    title: 'Coffee sales lbs per day'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}

//handler function for new store submission
function handleFormSubmit(event) {
  console.log(event);
  event.preventDefault(); //this prevents reloading the page when clicking submit button

  if(!event.target.storeName.value || !event.target.minCust.value || !event.target.minCust.value || !event.target.maxCust.value || !event.target.avgCups.value        || !event.target.avgPounds) {
    return alert('All fields must be filled in!');
  }

  if (parseFloat(event.target.minCust.value) > parseFloat(event.target.maxCust.value)) {
    return alert("Maximum number of customers value needs to be higher than Minimum number of customers!");
  }

  // variables for storing the form labels -  they will be used as parameters in the render function
  var name    = event.target.storeName.value;
  var min     = parseFloat(event.target.minCust.value);
  var max     = parseFloat(event.target.maxCust.value);
  var cups    = parseFloat(event.target.avgCups.value);
  var pounds  = parseFloat(event.target.avgPounds.value);

  renderForm(name, min, max, cups, pounds);
  drawChart();

  //clear the fileds after submit
  event.target.storeName.value  = null;
  event.target.minCust.value    = null;
  event.target.maxCust.value    = null;
  event.target.avgCups.value    = null;
  event.target.avgPounds.value  = null;
}

/*---MAIN---*/
render();

//Indicate event('submit) which will trigger the response - add event listener for the new store form(variable formNewStore stores the id)
formNewStore.addEventListener('submit', handleFormSubmit);
