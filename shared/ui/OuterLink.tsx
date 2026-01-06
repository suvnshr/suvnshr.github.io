import React from "react";

interface OuterLinkProps {
  link: string;
  children: React.ReactNode;
}

function OuterLink({ link, children }: OuterLinkProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default OuterLink;

