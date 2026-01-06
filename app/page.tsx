"use client";

import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import AppBottomNavigation from "@shared/ui/AppBottomNavigation";
import Copyright from "@shared/ui/Copyright";
import Margin from "@shared/ui/Margin";
import BlogSection from "@features/blogs/BlogSection";
import DomainSection from "@features/skills/DomainSection";
import ProfileSection from "@features/profile/ProfileSection";
import ProjectSection from "@features/projects/ProjectSection";
import { fetchMediumFeed } from "@features/blogs/utils/fetchMediumFeed";
import { useEffect, useState } from "react";

interface MediumFeedResponse {
  items: Array<{
    title: string;
    description: string;
    thumbnail?: string;
    categories: string[];
    link: string;
  }>;
}

/**
 * HomePage is the main landing page of the portfolio website, assembling
 * all sections such as About, Skills, Projects, and Blogs.
 *
 * Fetches blog data from Medium and passes it to BlogSection.
 * Responsive design: adapts navigation and layout for different devices.
 *
 * @returns JSX.Element Main page component
 * @remarks This is the root container for the homepage structure.
 */
export default function HomePage() {
  const theme = useTheme();
  const isMediumOrDown = useMediaQuery(theme.breakpoints.down("md"));
  const [blogsData, setBlogsData] = useState<MediumFeedResponse | null>(null);

  useEffect(() => {
    fetchMediumFeed().then(setBlogsData);
  }, []);

  return (
    <div className="App">
      <div id="about">
        <ProfileSection />
      </div>
      <Container>
        <Margin count={2} />

        <div id="skills">
          <Typography variant="h4">Skills</Typography>
          <Margin />
          <DomainSection />
        </div>

        <Margin count={2} />

        <div id="projects" className="page-section">
          <Typography variant="h4">Projects</Typography>
          <Margin />
          <ProjectSection />
        </div>

        <Margin count={2} />

        <div id="blogs" className="page-section">
          <Typography variant="h4">Blogs</Typography>
          <Margin />
          {blogsData && <BlogSection blogsData={blogsData} />}
        </div>

        <Margin count={2} />
      </Container>
      <Copyright />

      {isMediumOrDown && (
        <>
          <Margin count={4} />
          <AppBottomNavigation />
        </>
      )}
    </div>
  );
}

