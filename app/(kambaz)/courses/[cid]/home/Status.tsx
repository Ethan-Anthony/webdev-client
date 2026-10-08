import { CiImport } from "react-icons/ci";
import { FaCheckCircle, FaFileImport, FaMagic, FaStream } from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdAnalytics, MdAnnouncement, MdDoNotDisturbAlt } from "react-icons/md";

export default function CourseStatus() {
    return (
      <div id="wd-course-status">
        <h2 className="mb-3 text-xl font-semibold">Course Status</h2>
        <div className="flex gap-1">
          <button
            type="button"
            className="inline-flex min-w-0 flex-1 items-center justify-center rounded border border-neutral-300 bg-white px-1.5 py-1.5 text-xs"
          >
            <MdDoNotDisturbAlt className="me-1 shrink-0 text-base" /> Unpublish
          </button>
          <button
            type="button"
            className="inline-flex min-w-0 flex-1 items-center justify-center rounded bg-green-600 px-1.5 py-1.5 text-xs text-white hover:bg-green-700"
          >
            <FaCheckCircle className="me-1 shrink-0 text-base" /> Publish
          </button>
        </div>
        <button
          type="button"
          className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
        >
          <CiImport />Import Existing Content
        </button>
        <button
          type="button"
          className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
        >
          <FaFileImport />Import from Commons</button>
        <button
          type="button"
          className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
        >
          <GoHome />Choose Home Page</button>
        <button
          type="button"
          className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
        >
          <FaStream />View Course Stream</button>
        <button
          type="button"
          className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
        >
          <MdAnnouncement />New Announcement</button>
        <button
          type="button"
          className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
        >
         <MdAnalytics /> New Analytics</button>
        <button
          type="button"
          className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
        >
          <IoIosNotificationsOutline />View Course Notifications</button>
        <button
          id="wd-ai-status"
          type="button"
          className="mb-1 flex w-full items-center rounded border border-neutral-300 bg-white px-3 py-2 text-left text-sm"
        >
          <FaMagic className="me-2" />Sample action
        </button>
      </div>
    );
  }
