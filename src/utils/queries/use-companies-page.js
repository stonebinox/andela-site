import { graphql, useStaticQuery } from "gatsby"

export const useCompaniesPage = () => {
  const {
    allContentfulFullPage: { nodes },
  } = useStaticQuery(graphql`
    query forCompaniesPageQuery {
      allContentfulFullPage {
        nodes {
          primaryHeading
          secondaryHeading
          paragraph {
            raw
          }
        }
      }
    }
  `)

  const mainNode = nodes[0]
  const { primaryHeading, secondaryHeading, paragraph } = mainNode

  return {
    primaryHeading,
    secondaryHeading,
    paragraph,
  }
}
