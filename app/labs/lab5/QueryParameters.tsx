"use client";
import { useState } from "react";

export default function QueryParameters() {
  const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>
      <input id="wd-query-parameter-a" type="number" className="border p-1 me-2"
        value={a} onChange={(e) => setA(e.target.value)} />
      <input id="wd-query-parameter-b" type="number" className="border p-1"
        value={b} onChange={(e) => setB(e.target.value)} />
      <br />
      <a id="wd-query-parameter-add" className="text-blue-700 underline me-4"
        href={`${HTTP_SERVER}/lab5/calculator?operation=add&a=${a}&b=${b}`}>
        Add {a} + {b}
      </a>
      <a id="wd-query-parameter-subtract" className="text-blue-700 underline me-4"
        href={`${HTTP_SERVER}/lab5/calculator?operation=subtract&a=${a}&b=${b}`}>
        Subtract {a} - {b}
      </a>
      <a id="wd-query-parameter-multiply" className="text-blue-700 underline me-4"
        href={`${HTTP_SERVER}/lab5/calculator?operation=multiply&a=${a}&b=${b}`}>
        Multiply {a} * {b}
      </a>
      <a id="wd-query-parameter-divide" className="text-blue-700 underline"
        href={`${HTTP_SERVER}/lab5/calculator?operation=divide&a=${a}&b=${b}`}>
        Divde {a} / {b}
      </a>
      <hr />
    </div>
  );
}
