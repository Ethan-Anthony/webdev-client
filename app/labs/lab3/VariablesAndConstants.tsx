export default function VariablesAndConstants() {
    var functionScoped = 2;
    var greeting = "Welcome to lab 3"
    let blockScoped = 5;
    let name = "Ethan"
    const constant1 = functionScoped - blockScoped;
    const sampleSum = functionScoped + blockScoped;
    return (
      <div id="wd-variables-and-constants">
        <h4>Variables and Constants</h4>
        functionScoped = {functionScoped} <br />
        greeting = {greeting}             <br />
        blockScoped = {blockScoped}       <br />
        name = {name}                     <br />
        constant1 = {constant1}           <br />
        sampleSum = {sampleSum}
        <hr />
      </div>
    );
  }