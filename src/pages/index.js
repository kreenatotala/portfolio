import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";
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
        {/* <ArticlesSection sectionId="articles" heading="Blog" sources={['blog']} /> */}
        <ProjectsSection sectionId="projects" heading="Projects" />
        <ContactSection sectionId="github" heading="Contact" />
      </Page>
    </>
  );
}
