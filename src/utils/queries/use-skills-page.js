import { graphql, useStaticQuery } from "gatsby"

export const useSkillsPage = () => {
  try {
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
            andelaLogo {
              title
              file {
                url
              }
            }
            howToText
            andelaFeatures {
              features {
                featureTitle
                featureBody
              }
            }
          }
        }
      }
    `)

    const mainNode = nodes[0]

    return mainNode
  } catch (e) {
    console.log(e)
  }

  return null
}
