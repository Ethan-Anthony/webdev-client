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
  const link = "flex flex-col items-center py-3 text-center text-sm no-underline";
  return (
    <nav
      id="wd-kambaz-navigation"
      className="fixed bottom-0 top-0 left-0 z-20 hidden w-[120px] flex-col bg-black md:flex"
    >
      <Link
        href="/account"
        id="wd-account-link"
        className={`${link} ${linkColors("/account")}`}
      >
        <FaRegCircleUser
          className={`text-3xl ${
            pathname.startsWith("/account") ? "text-red-600" : "text-white"
          }`}
        />
        Account
      </Link>
      <Link
        href="/dashboard"
        id="wd-dashboard-link"
        className={`${link} ${linkColors("/dashboard")}`}
      >
        <AiOutlineDashboard className="text-3xl text-red-600" />
        Dashboard
      </Link>
      <Link
        href="/course"
        id="wd-course-link"
        className={`${link} ${linkColors("/course")}`}
      >
        <FaBook className="overflow-visible text-3xl fill-transparent stroke-red-500 stroke-[20]" />
        Courses
      </Link>
      <Link
        href="/calendar"
        id="wd-calendar-link"
        className={`${link} ${linkColors("/calendar")}`}
      >
        <FaCalendarAlt className="overflow-visible text-3xl fill-transparent stroke-red-500 stroke-[20]" />
        Calendar
      </Link>
      <Link
        href="/inbox"
        id="wd-inbox-link"
        className={`${link} ${linkColors("/inbox")}`}
      >
        <GoInbox className="text-3xl text-red-500" />
        Inbox
      </Link>
      <Link
        href="/labs"
        id="wd-ai-nav-help"
        className={`${link} mt-4 bg-black text-white`}
      >
        <FaCircleQuestion className="text-3xl text-red-500" />
        Help
      </Link>
    </nav>
  );
}
