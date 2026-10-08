"use client";

import { AiOutlineDashboard } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { FaBook, FaCircleQuestion, FaRegCircleUser } from "react-icons/fa6";
import { GoInbox } from "react-icons/go";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function KambazNavigation() {
  const pathname = usePathname();
  const linkColors = (href: string) =>
    pathname.startsWith(href) ? "bg-white text-red-600" : "bg-black text-white";
  return (
    <nav
      id="wd-kambaz-navigation"
      className="fixed bottom-0 top-0 left-0 z-20 hidden w-[120px] bg-black md:block"
    >
      <Link
        href="/account"
        id="wd-account-link"
        className={`block py-3 text-center text-sm no-underline ${linkColors("/account")}`}
      >
        <FaRegCircleUser
          className={`inline-block text-3xl ${
            pathname.startsWith("/account") ? "text-red-600" : "text-white"
          }`}
        />
        <br />
        Account
      </Link>
      <Link
        href="/dashboard"
        id="wd-dashboard-link"
        className={`block py-3 text-center text-sm no-underline ${linkColors("/dashboard")}`}
      >
        <AiOutlineDashboard className="inline-block text-3xl text-red-600" />
        <br />
        Dashboard
      </Link>
      <Link 
        href="/course" 
        id="wd-course-link"
        className={`block py-3 text-center text-sm no-underline ${linkColors("/course")}`}
      >
        <FaBook className="inline-block overflow-visible text-3xl fill-transparent stroke-red-500 stroke-[20]" />
        <br/>
        Courses
      </Link>
      <Link
        href="/calendar"
        id="wd-calendar-link"
        className={`block py-3 text-center text-sm no-underline ${linkColors("/calendar")}`}
      >
        <FaCalendarAlt className="inline-block overflow-visible text-3xl fill-transparent stroke-red-500 stroke-[20]" />
        <br />
        Calendar
      </Link>
      <Link
        href="/inbox"
        id="wd-inbox-link"
        className={`block py-3 text-center text-sm no-underline ${linkColors("/inbox")}`}
      >
        <GoInbox className="inline-block text-3xl text-red-500" />
        <br />
        Inbox
      </Link>
      <br />
      <Link
        href="/labs"
        id="wd-ai-nav-help"
        className="block bg-black py-3 text-center text-sm text-white no-underline"
      >
        <FaCircleQuestion className="inline-block text-3xl text-red-500" />
        <br />
        Help
      </Link>
    </nav>
  );
}