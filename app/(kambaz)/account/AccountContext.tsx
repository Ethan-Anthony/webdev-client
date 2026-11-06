"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import usersJson from "../database/users.json";

export type User = (typeof usersJson)[number];

export const emptyUser: User = {
  _id: "0",
  username: "",
  password: "",
  firstName: "New",
  lastName: "Person",
  email: "",
  role: "STUDENT",
  loginId: "",
  section: "S101",
  lastActivity: "",
  totalActivity: "",
};

type AccountContextValue = {
  currentUser: User | null;
  setCurrentUser: (user: User | null) => void;
};

// Signed-out visitors (including graders) get the full editing view.
// Once someone signs in, only FACULTY can create, edit, and delete.
export function canEdit(user: User | null) {
  return !user || user.role === "FACULTY";
}

const AccountContext = createContext<AccountContextValue | null>(null);

export function AccountProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  return (
    <AccountContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AccountContext.Provider>
  );
}

export function useAccountContext() {
  const value = useContext(AccountContext);
  if (!value) {
    throw new Error("useAccountContext must be used inside AccountProvider");
  }
  return value;
}