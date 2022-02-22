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
            differentTitle
            differentSectionImage {
              title
              file {
                url
              }
            }
            perks {
              perks {
                image
                title
                body
              }
            }
            faq
            faqImage {
              title
              file {
                url
              }
            }
            questions {
              questions {
                question
                answer
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
