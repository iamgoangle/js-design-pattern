// object-based creational design pattern
const car = {
  noOfWheel: 4,
  start() {
    return "started";
  },
  stop() {
    return "stop";
  }
};

const bmw = Object.create(car, {
  owner: {
    value: "Golf"
  }
});

console.log(bmw.start());
console.log(bmw.stop());
console.log(bmw.owner);
console.log(bmw.__proto__ == car);
