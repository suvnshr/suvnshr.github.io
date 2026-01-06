import React from "react";

interface MarginProps {
  count?: number;
}

export default function Margin({ count = 1 }: MarginProps) {
  const margin = 14 * count;

  return <div style={{ margin }} />;
}

