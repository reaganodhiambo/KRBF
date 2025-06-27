import React from 'react';

export function PrimaryButton({ children, className = '', as, ...props }) {
  const Component = as || 'button';
  return (
    <Component
      className={`px-8 py-4 text-lg text-center font-semibold rounded-lg bg-sky-700 text-white hover:bg-sky-800 transition ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export function SecondaryButton({ children, className = '', as, ...props }) {
  const Component = as || 'button';
  return (
    <Component
      className={`px-8 py-4 text-lg text-center font-semibold rounded-lg bg-gray-200 text-sky-700 hover:bg-gray-300 transition ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
