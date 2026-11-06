"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  useAssignmentsStore,
  type Assignment,
} from "../../../../store/assignmentsStore";
import { useAccountContext } from "../../../../account/AccountContext";

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const router = useRouter();
  const { currentUser } = useAccountContext();
  const isFaculty = currentUser?.role === "FACULTY";
  const isNew = aid === "new";

  const findAssignment = useAssignmentsStore((state) => state.findAssignment);
  const existing = findAssignment(aid);
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore((state) => state.updateAssignment);

  const [assignment, setAssignment] = useState<Assignment>(
    existing ?? {
      _id: "new",
      title: "New Assignment",
      course: cid,
      description: "",
      points: 100,
      due: "",
      available: "",
      until: "",
    },
  );

  const listUrl = `/courses/${cid}/assignments`;

  const save = () => {
    if (isNew) {
      addAssignment(assignment);
    } else {
      updateAssignment(assignment);
    }
    router.push(listUrl);
  };

  if (!isNew && !existing) {
    return (
      <div id="wd-assignments-editor">
        <p>Assignment not found.</p>
        <Link href={listUrl}>Back to Assignments</Link>
      </div>
    );
  }

  const readOnly = !isFaculty;

  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input
        id="wd-name"
        value={assignment.title}
        disabled={readOnly}
        onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
      />{" "}
      <br />
      {!isNew && (
        <>
          <span id="wd-assignment-id">Assignment id: {aid}</span> <br />
        </>
      )}
      <br />
      <textarea
        id="wd-description"
        value={assignment.description}
        disabled={readOnly}
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
        rows={8}
        className="w-full"
      />{" "}
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input
                id="wd-points"
                type="number"
                value={assignment.points}
                disabled={readOnly}
                onChange={(e) =>
                  setAssignment({
                    ...assignment,
                    points: parseInt(e.target.value) || 0,
                  })
                }
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-due-date">Due</label>
            </td>
            <td>
              <input
                type="date"
                id="wd-due-date"
                value={assignment.due}
                disabled={readOnly}
                onChange={(e) =>
                  setAssignment({ ...assignment, due: e.target.value })
                }
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-from">Available from</label>
            </td>
            <td>
              <input
                type="date"
                id="wd-available-from"
                value={assignment.available}
                disabled={readOnly}
                onChange={(e) =>
                  setAssignment({ ...assignment, available: e.target.value })
                }
              />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-available-until">Until</label>
            </td>
            <td>
              <input
                type="date"
                id="wd-available-until"
                value={assignment.until ?? ""}
                disabled={readOnly}
                onChange={(e) =>
                  setAssignment({ ...assignment, until: e.target.value })
                }
              />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <Link href={listUrl} id="wd-cancel">
        {isFaculty ? "Cancel" : "Back"}
      </Link>{" "}
      {isFaculty && (
        <button type="button" onClick={save} id="wd-save">
          Save
        </button>
      )}
    </div>
  );
}
