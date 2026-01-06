"use client";

import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import customTheme from "@shared/theme/customTheme";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

