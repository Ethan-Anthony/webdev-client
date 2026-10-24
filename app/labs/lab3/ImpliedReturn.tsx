export default function ImpliedReturn() {
    const multiply = (a: number, b: number) => a * b;
    const fourTimesFive = multiply(4, 5);
    const square = (a: number) => a * a;
    const nineSquared = square(9);
    const divide = (a: number, b: number) => a / b;
    console.log(fourTimesFive);
    console.log(nineSquared);
    return (
      <div id="wd-implied-return">
        <h4>Implied return</h4>
        fourTimesFive = {fourTimesFive} <br />
        multiply(4, 5) = {multiply(4, 5)} <br />
        nineSquared = {nineSquared} <br />
        square(9) = {square(9)} <br />
        divide(20, 4) = {divide(20, 4)}
        <hr />
      </div>
    );
  }