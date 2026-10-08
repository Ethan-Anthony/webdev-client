import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
    const { cid } = await params;
    const field = "w-full rounded border border-neutral-300 bg-white px-3 py-2 text-sm";
    const sideLabel = "w-40 shrink-0 pt-2 text-right text-sm";
    const groupLabel = "mb-1 block text-sm font-semibold";
    return (
      <div id="wd-assignments-editor" className="max-w-3xl">
        <label htmlFor="wd-name" className={groupLabel}>Assignment Name</label>
        <input id="wd-name" defaultValue="A1 - ENV + HTML" className={`${field} mb-4`} />
        <label htmlFor="wd-description" className={groupLabel}>Description</label>
        <textarea
          id="wd-description"
          rows={5}
          className={`${field} mb-4`}
          defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Vercel."
        />
        <div className="mb-4 flex gap-4">
          <label htmlFor="wd-points" className={sideLabel}>Points</label>
          <div className="min-w-0 flex-1">
            <input id="wd-points" defaultValue={100} className={field} />
          </div>
        </div>
        <div className="mb-4 flex gap-4">
          <label htmlFor="wd-group" className={sideLabel}>Assignment Group</label>
          <div className="min-w-0 flex-1">
            <select id="wd-group" defaultValue="ASSIGNMENTS" className={field}>
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              <option value="QUIZZES">QUIZZES</option>
              <option value="EXAMS">EXAMS</option>
              <option value="PROJECT">PROJECT</option>
            </select>
          </div>
        </div>
        <div className="mb-4 flex gap-4">
          <label htmlFor="wd-display-grade-as" className={sideLabel}>Display Grade as</label>
          <div className="min-w-0 flex-1">
            <select id="wd-display-grade-as" defaultValue="PERCENTAGE" className={field}>
              <option value="PERCENTAGE">PERCENTAGE</option>
            </select>
          </div>
        </div>
        <div className="mb-4 flex gap-4">
          <label htmlFor="wd-submission-type" className={sideLabel}>Submission Type</label>
          <div className="min-w-0 flex-1 rounded border border-neutral-300 p-3">
            <select id="wd-submission-type" className={`${field} mb-3`}>
              <option value="ONLINE">Online</option>
            </select>
            <span className={groupLabel}>Online Entry Options</span>
            <div className="mb-1 text-sm">
              <input type="checkbox" name="check-text-entry" id="wd-text-entry" className="me-2" />
              <label htmlFor="wd-text-entry">Text Entry</label>
            </div>
            <div className="mb-1 text-sm">
              <input type="checkbox" name="check-website-url" id="wd-website-url" className="me-2" />
              <label htmlFor="wd-website-url">Website URL</label>
            </div>
            <div className="mb-1 text-sm">
              <input type="checkbox" name="check-media-recordings" id="wd-media-recordings" className="me-2" />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
            </div>
            <div className="mb-1 text-sm">
              <input type="checkbox" name="check-student-annotation" id="wd-student-annotation" className="me-2" />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
            </div>
            <div className="text-sm">
              <input type="checkbox" name="check-file-upload" id="wd-file-upload" className="me-2" />
              <label htmlFor="wd-file-upload">File Uploads</label>
            </div>
          </div>
        </div>
        <div className="mb-4 flex gap-4">
          <span className={sideLabel}>Assign</span>
          <div className="min-w-0 flex-1 rounded border border-neutral-300 p-3">
            <label htmlFor="wd-assign-to" className={groupLabel}>Assign to</label>
            <input id="wd-assign-to" defaultValue="Everyone" className={`${field} mb-3`} />
            <label htmlFor="wd-due-date" className={groupLabel}>Due</label>
            <input type="date" id="wd-due-date" className={`${field} mb-3`} />
            <div className="flex gap-3">
              <div className="min-w-0 flex-1">
                <label htmlFor="wd-available-from" className={groupLabel}>Available from</label>
                <input type="date" id="wd-available-from" className={field} />
              </div>
              <div className="min-w-0 flex-1">
                <label htmlFor="wd-available-until" className={groupLabel}>Until</label>
                <input type="date" id="wd-available-until" className={field} />
              </div>
            </div>
          </div>
        </div>
        <label htmlFor="wd-ai-editor-notes" className={groupLabel}>Sample notes</label>
        <textarea id="wd-ai-editor-notes" rows={3} className={`${field} mb-4`} />
        <hr />
        <div className="mt-3 flex justify-end gap-2">
          <Link
            href={`/courses/${cid}/assignments`}
            id="wd-cancel"
            className="rounded border border-neutral-300 bg-neutral-100 px-3 py-1.5 text-sm text-neutral-900 no-underline"
          >
            Cancel
          </Link>
          <Link
            href={`/courses/${cid}/assignments`}
            id="wd-save"
            className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white no-underline"
          >
            Save
          </Link>
        </div>
      </div>
    );
  }
