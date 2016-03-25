console.log('I am slowwwwwly catching up');

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function PizzaStore(name, time, minPizzaOrdered, maxPizzaOrdered, minPizzaDelivered, maxPizzaDelivered) {
  this.name = name;
  this.time = time;
  this.minPizzaOrdered = minPizzaOrdered;
  this.maxPizzaOrdered = maxPizzaOrdered;
  this.minPizzaDelivered = minPizzaDelivered;
  this.maxPizzaDelivered = maxPizzaDelivered;

  this.deliveriesPerHour = function(){
    return Math.floor(Math.random() * (this.maxPizzaDelivered - this.minPizzaDelivered + 1)) + minPizzaDelivered;
  };
}

console.log('I am slowwwwwly catching up');

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function PizzaStore(name, time, minPizzaOrdered, maxPizzaOrdered, minPizzaDelivered, maxPizzaDelivered) {
  this.name = name;
  this.time = time;
  this.minPizzaOrdered = minPizzaOrdered;
  this.maxPizzaOrdered = maxPizzaOrdered;
  this.minPizzaDelivered = minPizzaDelivered;
  this.maxPizzaDelivered = maxPizzaDelivered;

  this.deliveriesPerHour = function(){
    return Math.floor(Math.random() * (this.maxPizzaDelivered - this.minPizzaDelivered + 1)) + minPizzaDelivered;
  };
  this.ordersPerHour = function(){
    return Math.floor(Math.random() * (this.maxPizzaOrdered - this.minPizzaOrdered + 1)) + minPizzaOrdered;
  };
}

console.log('Will my methods work? That is the question!');

function generateDataRow(inputArray){
  var row = document.createElement('tr');
  var col;
  for(var i = 0; i < inputArray.length; i++){
    col = document.createElement('td');
    col.textContent = inputArray[i];
    row.appendChild(col);
  }
  return row;
}
function generateHeadingRow(inputArray){
  var row = document.createElement('tr');
  var col;
  for(var i = 0; i < inputArray.length; i++){
    col = document.createElement('th');
    col.textContent = inputArray[i];
    row.appendChild(col);
  }
  return row;
}

var pizzaTable = document.createElement('table');

var bFirstRow = generateHeadingRow(['Time', 'Pizzas Sold', 'Pizzas Delivered', 'Drivers Needed']);
var bSecondRow = generateDataRow(['dunc', '88', 'javascript']);
var bThirdRow = generateDataRow(['slug', '707', 'html']);
var bFourthRow = generateDataRow(['neo', '301', 'css']);
var bFifthRow = generateDataRow([]);
var bSixthRow = generateDataRow([]);
var bSeventhRow = generateDataRow([]);
var bEighthRow = generateDataRow([]);
var bNinthRow = generateDataRow([]);
var bTenthRow = generateDataRow([]);
var bEleventhRow = generateDataRow([]);
var bTwelthRow = generateDataRow([]);
var bThirteenthRow = generateDataRow([]);
var bFourteenthRow = generateDataRow([]);
var bFifteenthRow = generateDataRow([]);
var bSixteenthRow = generateDataRow([]);
var bSeventeenthRow = generateDataRow([]);
var bEighteenthRow = generateDataRow([]);

peopleTable.appendChild(firstRow);
peopleTable.appendChild(secondRow);
peopleTable.appendChild(thirdRow);
peopleTable.appendChild(fourthRow);

document.getElementById('table-demo').appendChild(peopleTable);
