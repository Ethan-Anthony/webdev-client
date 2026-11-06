"use client";

import { create } from "zustand";
import assignmentsJson from "../database/assignments.json";

// The seed JSON has no "until" date, so it is optional here.
export type Assignment = (typeof assignmentsJson)[number] & { until?: string };

type AssignmentsStore = {
  assignments: Assignment[];
  // Any _id passed in is replaced with a fresh one.
  addAssignment: (assignment: Omit<Assignment, "_id"> & { _id?: string }) => void;
  deleteAssignment: (assignmentId: string) => void;
  updateAssignment: (assignment: Assignment) => void;
  findAssignment: (assignmentId: string) => Assignment | undefined;
};

export const useAssignmentsStore = create<AssignmentsStore>((set, get) => ({
  assignments: assignmentsJson,
  addAssignment: (assignment) =>
    set((state) => ({
      assignments: [
        ...state.assignments,
        { ...assignment, _id: crypto.randomUUID() },
      ],
    })),
  deleteAssignment: (assignmentId) =>
    set((state) => ({
      assignments: state.assignments.filter((a) => a._id !== assignmentId),
    })),
  updateAssignment: (assignment) =>
    set((state) => ({
      assignments: state.assignments.map((a) =>
        a._id === assignment._id ? assignment : a,
      ),
    })),
  findAssignment: (assignmentId) =>
    get().assignments.find((a) => a._id === assignmentId),
}));
