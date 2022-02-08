import { graphql, useStaticQuery } from "gatsby"

export const useSkillsPage = () => {
  const {
    allContentfulSkillPage: { nodes },
  } = useStaticQuery(graphql`
    query skillsPageQuery {
      allContentfulSkillPage {
        nodes {
          pageTitle
          subtitle
          smallSubtitle
          trustedByBrands {
            title
            file {
              url
            }
          }
          titleDescription {
            titleDescription
          }
          bannerImage {
            file {
              url
            }
          }
          customerSubtitle
          customerSubtitleDescription
          customerSpeakImage {
            title
            file {
              url
            }
          }
          customerSpeakTitle
          customerSpeakLongDescription {
            raw
          }
          customerSpeakName
          customerSpeakDesignation
        }
      }
    }
  `)

  const mainNode = nodes[0]

  return mainNode
}
