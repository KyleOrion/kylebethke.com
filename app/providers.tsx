'use client';

import { SessionProvider } from 'next-auth/react';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <CssVarsProvider defaultMode="dark">
        <CssBaseline />
        {children}
      </CssVarsProvider>
    </SessionProvider>
  );
}
