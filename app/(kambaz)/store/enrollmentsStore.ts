"use client";

import { create } from "zustand";
import enrollmentsJson from "../database/enrollments.json";

export type Enrollment = (typeof enrollmentsJson)[number];

type EnrollmentsStore = {
  enrollments: Enrollment[];
  setEnrollments: (enrollments: Enrollment[]) => void;
  enroll: (userId: string, courseId: string) => void;
  unenroll: (userId: string, courseId: string) => void;
};

export const useEnrollmentsStore = create<EnrollmentsStore>((set) => ({
  enrollments: enrollmentsJson,
  setEnrollments: (enrollments) => set({ enrollments }),
  enroll: (userId, courseId) =>
    set((state) =>
      state.enrollments.some((e) => e.user === userId && e.course === courseId)
        ? state
        : {
            enrollments: [
              ...state.enrollments,
              { _id: crypto.randomUUID(), user: userId, course: courseId },
            ],
          },
    ),
  unenroll: (userId, courseId) =>
    set((state) => ({
      enrollments: state.enrollments.filter(
        (e) => !(e.user === userId && e.course === courseId),
      ),
    })),
}));

// Plain helper so components can check membership against the array they selected.
export function isEnrolled(
  enrollments: Enrollment[],
  userId: string | undefined,
  courseId: string,
) {
  return (
    !!userId &&
    enrollments.some((e) => e.user === userId && e.course === courseId)
  );
}
