// src/app/providers.tsx
'use client';

import { ReactNode } from 'react';
import { Amplify } from 'aws-amplify';
import awsExports from '../aws-exports'; // correct path

// ✅ v6 signature: config first, options second
Amplify.configure(awsExports, { ssr: true });

export default function Providers({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
