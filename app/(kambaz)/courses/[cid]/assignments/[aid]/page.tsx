import Link from "next/link";

export default async function AssignmentEditor({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
    const { cid } = await params;
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" defaultValue="A1 - ENV + HTML" />
        <br />
        <br />
        <textarea id="wd-description" defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Vercel.">
        </textarea>
        <br />
        <table>
          <tbody>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-points">Points</label>
              </td>
              <td>
                <input id="wd-points" defaultValue={100} />
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-group">Assignment Group</label>
              </td>
              <td>
                <select id="wd-group" defaultValue="ASSIGNMENTS">
                  <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                  <option value="QUIZZES">QUIZZES</option>
                  <option value="EXAMS">EXAMS</option>
                  <option value="PROJECT">PROJECT</option>
                </select>
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-display-grade-as">Display Grade as</label>
              </td>
              <td>
                <select id="wd-display-grade-as" defaultValue="PERCENTAGE">
                  <option value="PERCENTAGE">PERCENTAGE</option>
                </select>
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-submission-type">Submission Type</label>
              </td>
              <td>
                <select id="wd-submission-type">
                  <option value="ONLINE">Online</option>
                </select>
                <br />
                <label> <b>Online Entry Options</b></label>
                <br />
                <input type="checkbox" name="check-text-entry" id="wd-text-entry" />
                <label htmlFor="wd-text-entry">Text Entry</label>
                <br />
                <input type="checkbox" name="check-website-url" id="wd-website-url" />
                <label htmlFor="wd-website-url">Website URL</label>
                <br />
                <input type="checkbox" name="check-media-recordings" id="wd-media-recordings" />
                <label htmlFor="wd-media-recordings">Media Recordings</label>
                <br />
                <input type="checkbox" name="check-student-annotation" id="wd-student-annotation" />
                <label htmlFor="wd-student-annotation">Student Annotation</label>
                <br />
                <input type="checkbox" name="check-file-upload" id="wd-file-upload" />
                <label htmlFor="wd-file-upload">File Uploads</label>
              </td>
            </tr>
            <tr>
              <td align="right" valign="top">
                <label htmlFor="wd-assign-to">Assign</label>
              </td>
              <td>
                <label htmlFor="wd-assign-to"><b>Assign to</b></label>
                <br />
                <input id="wd-assign-to" defaultValue="Everyone"/>
                <br />
                <label htmlFor="wd-due-date"><b>Due</b></label>
                <br />
                <input type="date" id="wd-due-date"/>
                <br />
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <label htmlFor="wd-available-from">
                          <b>Available from</b>
                        </label>
                      </td>
                      <td>
                        <label htmlFor="wd-available-until">
                          <b>Until</b>
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input type="date" id="wd-available-from"/>
                      </td>
                      <td>
                        <input type="date" id="wd-available-until"/>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
              
            </tr>

          </tbody>
        </table>
        <br />
        <Link href={`/courses/${cid}/assignments`} id="wd-cancel">
          <button type="button">Cancel</button>
        </Link>{" "}
        <Link href={`/courses/${cid}/assignments`} id="wd-save">
          <button type="button">Save</button>
        </Link>
      </div>
    );
  }