"use client";
import { useState } from "react";

export default function PathParameters() {
  const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div id="wd-path-parameters">
      <h3>Path Parameters</h3>
      <input id="wd-path-parameter-a" type="number" className="border p-1 me-2"
        value={a} onChange={(e) => setA(e.target.value)} />
      <input id="wd-path-parameter-b" type="number" className="border p-1"
        value={b} onChange={(e) => setB(e.target.value)} />
      <br />
      <a id="wd-path-parameter-add" className="text-blue-700 underline me-4"
        href={`${HTTP_SERVER}/lab5/add/${a}/${b}`}>
        Add {a} + {b}
      </a>
      <a id="wd-path-parameter-subtract" className="text-blue-700 underline me-4"
        href={`${HTTP_SERVER}/lab5/subtract/${a}/${b}`}>
        Subtract {a} - {b}
      </a>
      <a id="wd-path-parameter-multiply" className="text-blue-700 underline me-4"
        href={`${HTTP_SERVER}/lab5/multiply/${a}/${b}`}>
        Multiply {a} * {b}
      </a>
      <a id="wd-path-parameter-divide" className="text-blue-700 underline"
        href={`${HTTP_SERVER}/lab5/divide/${a}/${b}`}>
        Divide {a} / {b}
      </a>
      <hr />
    </div>
  );
}
