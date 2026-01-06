import React from "react";
import type { OuterLinkProps } from "./types";

/**
 * Renders an external link that opens in a new browser tab.
 *
 * Security best practices are enforced by applying
 * `rel="noopener noreferrer"` to prevent window access vulnerabilities.
 *
 * @param props - Component props.
 * @param props.link - URL to navigate to.
 * @param props.children - Content rendered inside the anchor element.
 *
 * @returns An anchor element configured for external navigation.
 */
export default function OuterLink({ link, children }: OuterLinkProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
