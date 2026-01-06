import React from "react";
import type { MarginProps } from "./types";

/**
 * Renders a spacer element with configurable margin.
 *
 * The margin value is calculated as `12 * count` and applied uniformly
 * on all sides of the element.
 *
 * @param props - Component props.
 * @param props.count - Multiplier used to calculate the margin size.
 *
 * @returns A div element acting as a spacing utility.
 */
export default function Margin({ count = 1 }: MarginProps) {
  const margin = 12 * count;

  return <div style={{ margin }} />;
}
