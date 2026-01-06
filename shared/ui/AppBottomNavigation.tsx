"use client";

import React, { useRef, useEffect, RefObject } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { Book, BubbleChart, Laptop, Person } from "@mui/icons-material";
import { Scrollspy } from "@makotot/ghostui"
import styles from "./AppBottomNavigation.module.scss";


export default function AppBottomNavigation() {
  const sections = ["about", "skills", "projects", "blogs"];

  // Use type assertion to indicate to TypeScript that this is an array of RefObject<Element>
  const sectionRefs = [
    useRef<Element>(null),
    useRef<Element>(null),
    useRef<Element>(null),
    useRef<Element>(null)
  ] as unknown as RefObject<Element>[];

  useEffect(() => {
    sections.forEach((sectionId, index) => {
      const element = document.querySelector(`#${sectionId}`) as Element | null;
      if (element && sectionRefs[index]) {
        (sectionRefs[index] as React.MutableRefObject<Element>).current = element;
      }
    });
  }, []);

  return (
    <Scrollspy sectionRefs={sectionRefs} offset={-100}>
      {({ currentElementIndexInViewport }) => (
        <BottomNavigation
          value={currentElementIndexInViewport}
          onChange={(event, newValue) => {
            const targetRef = sectionRefs[newValue];
            if (targetRef?.current) {
              targetRef.current.scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
            }
          }}
          showLabels
          className={styles.bottomNavigation}
        >
          <BottomNavigationAction label="About" icon={<Person />} />
          <BottomNavigationAction label="Skills" icon={<BubbleChart />} />
          <BottomNavigationAction label="Projects" icon={<Laptop />} />
          <BottomNavigationAction label="Blogs" icon={<Book />} />
        </BottomNavigation>
      )}
    </Scrollspy>
  );
}
