// This is a structural pattern where the interface of one class is translated to another.

// This pattern is often used to create wrappers for new refactored APIs
// so that other existing old APIs can still work with them

// legacy system
class LegacyApi {
  constructor() {
    this.operations = (term1, term2, operation) => {
      switch (operation) {
        case "add":
          return term1 + term2;
        case "sub":
          return (term1 = term2);
        default:
          return NaN;
      }
    };
  }
}

// new interface
class NewCalculator {
  constructor() {
    this.add = (term1, term2) => {
      return term1 + term2;
    };

    this.sub = (term1, term2) => {
      return term1 - term2;
    };
  }
}

// adaptor
class Adaptor {
  constructor() {
    const newCalc = new NewCalculator();

    this.operations = (term1, term2, operation) => {
      switch (operation) {
        case "add":
          return newCalc.add(term1, term2);
        case "sub":
          return newCalc.sub(term1, term2);
        default:
          return NaN;
      }
    };
  }
}

// usage
const oldCalc = new LegacyApi();
console.log(oldCalc.operations(10, 5, "add"));

const newCalc = new NewCalculator();
console.log(newCalc.add(10, 5));

const adapted = new Adaptor();
console.log(adapted.operations(10, 5, "add"));
