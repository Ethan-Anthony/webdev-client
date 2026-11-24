"use client";
import { useState } from "react";

const BUTTON = "rounded bg-blue-600 px-3 py-1.5 text-sm text-white me-2";

export default function WorkingWithRemoteObjects() {
  const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const [module, setModule] = useState({
    id: "M101", name: "Introduction to Web Development",
    description: "HTML, CSS, JavaScript, React, and Node.js fundamentals",
    course: "CS4550",
  });
  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
  const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;
  return (
    <div id="wd-working-with-remote-objects">
      <h3>Working With Remote Objects</h3>

      <h4>Retrieving Objects</h4>
      <a id="wd-retrieve-assignments" className={BUTTON}
        href={`${HTTP_SERVER}/lab5/assignment`}>
        Get Assignment
      </a>
      <a id="wd-retrieve-module" className={BUTTON}
        href={MODULE_API_URL}>
        Get Module
      </a>

      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className={BUTTON}
        href={`${HTTP_SERVER}/lab5/assignment/title`}>
        Get Title
      </a>
      <a id="wd-retrieve-module-name" className={BUTTON}
        href={`${MODULE_API_URL}/name`}>
        Get Module Name
      </a>

      <h4>Modifying Properties</h4>
      <div className="mb-2">
        <a id="wd-update-assignment-title" className={BUTTON}
          href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
          Update Title
        </a>
        <input id="wd-assignment-title" className="border p-1"
          value={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })} />
      </div>
      <div className="mb-2">
        <a id="wd-update-assignment-score" className={BUTTON}
          href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
          Update Score
        </a>
        <input id="wd-assignment-score" type="number" className="border p-1"
          value={assignment.score}
          onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) || 0 })} />
      </div>
      <div className="mb-2">
        <a id="wd-update-assignment-completed" className={BUTTON}
          href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
          Update Completed
        </a>
        <input id="wd-assignment-completed" type="checkbox"
          checked={assignment.completed}
          onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })} />
        <label htmlFor="wd-assignment-completed" className="ms-1">Completed</label>
      </div>
      <div className="mb-2">
        <a id="wd-update-module-name" className={BUTTON}
          href={`${MODULE_API_URL}/name/${encodeURIComponent(module.name)}`}>
          Update Module Name
        </a>
        <input id="wd-module-name" className="border p-1"
          value={module.name}
          onChange={(e) => setModule({ ...module, name: e.target.value })} />
      </div>
      <div className="mb-2">
        <a id="wd-update-module-description" className={BUTTON}
          href={`${MODULE_API_URL}/description/${encodeURIComponent(module.description)}`}>
          Update Module Description
        </a>
        <input id="wd-module-description" className="border p-1 w-96"
          value={module.description}
          onChange={(e) => setModule({ ...module, description: e.target.value })} />
      </div>
      <hr />
    </div>
  );
}
