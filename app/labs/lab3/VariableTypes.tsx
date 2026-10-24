export default function VariableTypes() {
    let numberVariable = 123;
    let myNumber = 123456
    let floatingPointNumber = 234.345;
    let stringVariable = "Hello World!";
    let myString = "my string";
    let booleanVariable = true;
    let isNumber = typeof numberVariable;
    let isString = typeof stringVariable;
    let isBoolean = typeof booleanVariable;
    let isMyNum = typeof myNumber;
    let isMyStr = typeof myString
    let sampleCount = 42;
    let sampleLabel = "Lab 3";
    let isSampleCount = typeof sampleCount;
    let isSampleLabel = typeof sampleLabel;
    return (
      <div id="wd-variable-types">
        <h4>Variables Types</h4>
        numberVariable = {numberVariable}           <br />
        floatingPointNumber = {floatingPointNumber} <br />
        stringVariable = {stringVariable}           <br />
        booleanVariable = {booleanVariable + ""}    <br />
        myNumber = {myNumber}                       <br />
        myString = {myString}                       <br />
        isNumber = {isNumber}                       <br />
        isString = {isString}                       <br />
        isBoolean = {isBoolean}                     <br />
        isMyNum = {isMyNum}                         <br />
        isMyStr = {isMyStr}                         <br />
        sampleCount = {sampleCount}                 <br />
        isSampleCount = {isSampleCount}             <br />
        sampleLabel = {sampleLabel}                 <br />
        isSampleLabel = {isSampleLabel}             <br />
        <hr />
      </div>
    );
  }