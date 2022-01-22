import React from "react";

interface ErrorProps {
  error: any;
  resetErrorBoundary: any;
}

export const Error: React.FC<ErrorProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div>
      <h1>Oops, error occurred</h1>
      <p>{error.message}</p>
    </div>
  );
};
