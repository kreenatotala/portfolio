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
import { CustomCursor } from "gatsby-theme-portfolio-minimal/src/components/Cursor";

export default function IndexPage() {
  return (
    <>
      <Seo title="Kreena Totala | Software Developer" />
      <Page useSplashScreenAnimation>
        <CustomCursor/>
        <HeroSection sectionId="hero" />
        <InterestsSection sectionId="details" heading="Details" />
        <AboutSection sectionId="about" heading="About Portfolio Minimal" />
        <ArticlesSection sectionId="articles" heading="Latest Articles" sources={['Medium']} />
        <ProjectsSection sectionId="features" heading="Built-in Features" />
        <ContactSection sectionId="github" heading="Issues?" />
      </Page>
    </>
  );
}
