import React from 'react';

const Alert = ({ children, className = '', ...props }) => (
  <div
    role="alert"
    className={`rounded-lg border p-4 ${className}`}
    {...props}
  >
    {children}
  </div>
);

const AlertTitle = ({ children, className = '', ...props }) => (
  <h5
    className={`mb-1 font-medium leading-none tracking-tight ${className}`}
    {...props}
  >
    {children}
  </h5>
);

const AlertDescription = ({ children, className = '', ...props }) => (
  <div
    className={`text-sm [&_p]:leading-relaxed ${className}`}
    {...props}
  >
    {children}
  </div>
);

export { Alert, AlertTitle, AlertDescription };