"use client";

import { useEffect } from "react";
import EmptyState from "./_components/EmptyState";

interface ErrorProps {
  error: Error;
}

const Error = ({ error }: ErrorProps) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <EmptyState
      title="Uh oh!"
      subtitle="An error occurred. Please try again later."
    />
  );
};

export default Error;
