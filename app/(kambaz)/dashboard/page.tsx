"use client";

import { useEffect, useState } from "react";
import CourseCard from "./CourseCard";
import * as client from "../courses/client";
import * as enrollmentsClient from "../enrollments/client";
import {
  emptyCourse,
  useCoursesStore,
  type Course,
} from "../store/coursesStore";
import { isEnrolled, useEnrollmentsStore } from "../store/enrollmentsStore";
import { canEdit, useAccountContext } from "../account/AccountContext";

export default function Dashboard() {
  const { currentUser } = useAccountContext();
  const isFaculty = canEdit(currentUser);
  const courses = useCoursesStore((state) => state.courses);
  const setCourses = useCoursesStore((state) => state.setCourses);
  const addCourse = useCoursesStore((state) => state.addCourse);
  const updateCourse = useCoursesStore((state) => state.updateCourse);
  const deleteCourse = useCoursesStore((state) => state.deleteCourse);
  const enrollments = useEnrollmentsStore((state) => state.enrollments);
  const enroll = useEnrollmentsStore((state) => state.enroll);
  const unenroll = useEnrollmentsStore((state) => state.unenroll);
  const [course, setCourse] = useState<Course>(emptyCourse);
  const [showAllCourses, setShowAllCourses] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        setCourses(
          currentUser && !showAllCourses
            ? await client.findMyCourses()
            : await client.fetchAllCourses(),
        );
      } catch {
        setCourses([]);
      }
    };
    load();
  }, [currentUser, showAllCourses]);

  // The server already filters: my courses when signed in, all when toggled.
  const visibleCourses = courses;

  const addAndEnroll = async () => {
    const newCourse = await client.createCourse(course);
    addCourse(newCourse);
    // Enroll the creator so the new course shows in their enrolled view.
    if (currentUser) enroll(currentUser._id, newCourse._id);
  };

  const onEnroll = async (courseId: string) => {
    if (!currentUser) return;
    await enrollmentsClient.enrollIntoCourse("current", courseId);
    enroll(currentUser._id, courseId);
  };

  const onUnenroll = async (courseId: string) => {
    if (!currentUser) return;
    await enrollmentsClient.unenrollFromCourse("current", courseId);
    unenroll(currentUser._id, courseId);
  };

  const onDeleteCourse = async (courseId: string) => {
    await client.deleteCourse(courseId);
    deleteCourse(courseId);
  };

  const onUpdateCourse = async () => {
    const saved = await client.updateCourse(course);
    updateCourse(saved);
  };

  return (
    <div id="wd-dashboard">
      <div className="flex items-center justify-between gap-2">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        {currentUser && (
          <button
            type="button"
            id="wd-enrollments-toggle"
            className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            Enrollments
          </button>
        )}
      </div>
      <hr />
      {isFaculty && (
        <>
          <h5 className="flex flex-wrap items-center gap-2">
            New Course
            <button
              type="button"
              className="rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white"
              id="wd-add-new-course-click"
              onClick={addAndEnroll}
            >
              Add
            </button>
            <button
              type="button"
              className="rounded bg-yellow-400 px-3 py-1.5 text-sm font-medium"
              id="wd-update-course-click"
              onClick={onUpdateCourse}
            >
              Update
            </button>
          </h5>
          <input
            className="mb-2 mt-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
            value={course.name}
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
            id="wd-course-name"
          />
          <textarea
            className="mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
            rows={3}
            value={course.description}
            onChange={(e) =>
              setCourse({ ...course, description: e.target.value })
            }
            id="wd-course-description"
          />
          <input
            className="mb-2 block w-full max-w-xl rounded border border-neutral-300 px-3 py-1.5"
            value={course.number}
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
            placeholder="Course number"
            id="wd-course-number"
          />
          <input
            type="date"
            className="mb-3 block rounded border border-neutral-300 px-3 py-1.5"
            value={course.startDate}
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
            id="wd-course-start-date"
          />
          <hr />
        </>
      )}
      <h2 id="wd-dashboard-published">
        {showAllCourses ? "All Courses" : "Published Courses"} (
        {visibleCourses.length})
      </h2>
      <hr />
      <div
        id="wd-dashboard-courses"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4"
      >
        {visibleCourses.map((c) => {
          const enrolled = isEnrolled(enrollments, currentUser?._id, c._id);
          return (
            <CourseCard
              key={c._id}
              course={c}
              enrolled={enrolled}
              canOpen={!currentUser || enrolled}
              isFaculty={isFaculty}
              onEdit={() => setCourse(c)}
              onDelete={() => onDeleteCourse(c._id)}
              onToggleEnrollment={
                currentUser
                  ? () => (enrolled ? onUnenroll(c._id) : onEnroll(c._id))
                  : undefined
              }
            />
          );
        })}
      </div>
    </div>
  );
}
