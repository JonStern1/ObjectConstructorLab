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
