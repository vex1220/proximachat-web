import { ReactNode } from 'react';

interface AuroraTextProps {
  children: ReactNode;
}

export default function AuroraText({ children }: AuroraTextProps) {
  return (
    <span className="text-gradient-aurora">
      {children}
    </span>
  );
}
