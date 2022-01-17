import React from "react"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { useCompaniesPage } from "../utils/queries/use-companies-page"
import { Button } from "../utils/common.styles"
import { darkTeal } from "../utils/colors"

const ForCompanies = () => {
  const {
    primaryHeading,
    secondaryHeading,
    paragraph: { raw },
  } = useCompaniesPage()

  return (
    <Layout pageTitle={primaryHeading}>
      <Seo title={primaryHeading} />
      <h2 color={darkTeal}>{secondaryHeading}</h2>
      <p
        dangerouslySetInnerHTML={{
          __html: documentToHtmlString(JSON.parse(raw)),
        }}
        color={darkTeal}
      />
      <Button>Hire talent</Button>
    </Layout>
  )
}

export default ForCompanies
