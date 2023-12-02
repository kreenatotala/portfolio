import React from "react";
import {
  AboutSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";
import { ArticlesSection } from "../gatsby-theme-portfolio-minimal/sections/Articles";
// import { CustomCursor } from "gatsby-theme-portfolio-minimal/src/components/Cursor";

export default function IndexPage() {
  return (
    <>
      <Seo title="Kreena Totala | Software Developer" />
      <Page useSplashScreenAnimation>
        {/* <CustomCursor/> */}
        <HeroSection sectionId="hero" />
        <InterestsSection sectionId="details" heading="Skills" />
        <AboutSection sectionId="about" heading="About" />
        <ArticlesSection sectionId="articles" heading="Experience" />
        {/* <div style={{margin: '0 auto 8rem auto;', padding: 'var(--page-padding)'}}>
          <h1>Experience</h1>
          <ul>
            <li>Chewers</li>
          </ul>
        </div> */}
        <ProjectsSection sectionId="projects" heading="Projects" />
        <ContactSection sectionId="github" heading="Contact" />
      </Page>
    </>
  );
}
