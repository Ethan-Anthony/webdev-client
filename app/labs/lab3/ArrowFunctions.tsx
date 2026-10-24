const subtract = (a: number, b: number) => {
    return a - b;
  };

const add = (a: number, b: number) => {
    return a + b;
};

const multiply = (a: number, b: number) => {
    return a * b;
};
  
  export default function ArrowFunctions() {
    const threeMinusOne = subtract(3, 1);
    console.log(threeMinusOne);
    const fivePlusOne = add(5, 1);
    console.log(fivePlusOne);
    return (
      <div id="wd-arrow-functions">
        <h4>New ES6 arrow functions</h4>
        threeMinusOne = {threeMinusOne} <br />
        subtract(3, 1) = {subtract(3, 1)} <br />
        fivePlusOne = {fivePlusOne} <br />
        add(5, 1) = {add(5, 1)} <br />
        multiply(3, 4) = {multiply(3, 4)}
        <hr />
      </div>
    );
  }