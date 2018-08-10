class BallFactory {
  constructor() {
    this.createBall = type => {
      let ball;
      if (type === "football") {
        ball = new Football();
      } else {
        ball = new Basketball();
      }

      return ball;
    };
  }
}

class Football {
  constructor() {
    this._type = "football";
    this.kick = () => {
      return "You kicked the football";
    };
  }
}

class Basketball {
  constructor() {
    this._type = "basketball";
    this.bounce = () => {
      return "Your boinced the basketball";
    };
  }
}

// instance object
const factory = new BallFactory();
const myFootball = factory.createBall("football");
const myBasketball = factory.createBall("basketball");

console.log(myFootball.kick());
console.log(myBasketball.bounce());
