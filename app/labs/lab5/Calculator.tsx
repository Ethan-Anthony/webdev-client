"use client";
import { useState } from "react";
import * as client from "./client";

const SYMBOLS: Record<string, string> = {
  add: "+",
  subtract: "-",
  multiply: "×",
  divide: "÷",
};

type Calculation = {
  a?: number;
  b?: number;
  operation?: string;
  result?: number;
  error?: string;
};

export default function CalculatorNextWebApiClient() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [operation, setOperation] = useState("add");
  const [calculation, setCalculation] = useState<Calculation | null>(null);
  const calculate = async () => {
    setCalculation(await client.fetchCalculation(a, b, operation));
  };
  return (
    <div id="wd-calculator-next-web-api">
      <h3>Calculator (Next.js Web API)</h3>
      <div className="mb-2 flex items-center gap-2">
        <label htmlFor="wd-calculator-a">A:</label>
        <input id="wd-calculator-a" type="number" placeholder="A"
          className="rounded border border-gray-300 px-2 py-1"
          value={a} onChange={(e) => setA(e.target.value)} />
      </div>
      <div className="mb-2 flex items-center gap-2">
        <label htmlFor="wd-calculator-b">B:</label>
        <input id="wd-calculator-b" type="number" placeholder="B"
          className="rounded border border-gray-300 px-2 py-1"
          value={b} onChange={(e) => setB(e.target.value)} />
      </div>
      <div className="mb-3 flex items-center gap-2">
        <label htmlFor="wd-calculator-operation">Operation:</label>
        <select id="wd-calculator-operation"
          className="rounded border border-gray-300 px-2 py-1"
          value={operation} onChange={(e) => setOperation(e.target.value)}>
          {Object.entries(SYMBOLS).map(([value, symbol]) => (
            <option key={value} value={value}>{symbol}</option>
          ))}
        </select>
      </div>
      <button type="button" id="wd-calculator-calculate"
        className="rounded bg-blue-600 px-4 py-1.5 text-white disabled:opacity-50"
        disabled={a === "" || b === ""}
        onClick={calculate}>
        Calculate
      </button>
      {calculation?.error && (
        <p id="wd-calculator-error" className="mt-2 rounded bg-red-100 px-3 py-2 text-red-800">
          {calculation.error}
        </p>
      )}
      {calculation?.result !== undefined && (
        <p id="wd-calculator-result" className="mt-2 text-lg">
          {calculation.a} {SYMBOLS[calculation.operation ?? ""]} {calculation.b} = {calculation.result}
        </p>
      )}
      <hr className="mt-3" />
    </div>
  );
}
