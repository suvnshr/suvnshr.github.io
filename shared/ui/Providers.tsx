"use client";

import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import customTheme from "@shared/theme/customTheme";
import type { ProvidersProps } from "./types";

/**
 * Wraps children with ThemeProvider, applying custom MUI theme.
 *
 * @param props - Component props including children to provide theming for
 * @returns JSX.Element
 * @remarks Applies CssBaseline for consistent styling.
 * @public
 */
export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
