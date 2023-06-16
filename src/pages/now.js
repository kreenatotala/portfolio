import React from 'react'
import { LegalSection, Page, Seo } from "gatsby-theme-portfolio-minimal";

export default function Now() {
  return (
    <>
        <Seo title="Now" useTitleTemplate={true} noIndex={true} />
        <Page>
          <LegalSection sectionId="privacy" heading="What am I doing now?" />
        </Page>
    </>

  )
}
