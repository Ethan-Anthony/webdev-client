"use client";

import { useEffect, useState, type ReactNode } from "react";
import { useAccountContext } from "./AccountContext";
import * as client from "./client";
import * as enrollmentsClient from "../enrollments/client";
import { useEnrollmentsStore } from "../store/enrollmentsStore";

export default function Session({
  children,
}: {
  children: ReactNode;
}) {
  const [pending, setPending] = useState(true);
  const { setCurrentUser } = useAccountContext();
  const setEnrollments = useEnrollmentsStore((state) => state.setEnrollments);

  useEffect(() => {
    const fetchProfile = async () => {
      // Load enrollments first so course access checks use the server's list.
      try {
        setEnrollments(await enrollmentsClient.findAllEnrollments());
      } catch {
        /* keep the cached list if the server is down */
      }
      try {
        const currentUser = await client.profile();
        setCurrentUser(currentUser);
      } catch {
        setCurrentUser(null);
      } finally {
        setPending(false);
      }
    };
    fetchProfile();
  }, [setCurrentUser, setEnrollments]);

  if (pending) {
    return null;
  }
  return children;
}