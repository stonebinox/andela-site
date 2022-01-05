import { graphql, useStaticQuery } from "gatsby"

export const useUrlsAndTitles = () => {
  const {
    allContentfulPage: { nodes: urlNodes },
    allContentfulIntro: { nodes: titleNodes },
    allContentfulImages: { nodes: imageNodes },
  } = useStaticQuery(graphql`
    query introAndPageQuery {
      allContentfulPage {
        nodes {
          url
        }
      }

      allContentfulIntro {
        nodes {
          title {
            raw
          }
        }
      }

      allContentfulImages {
        nodes {
          banner {
            file {
              url
            }
          }
        }
      }
    }
  `)

  return {
    urlNodes,
    titleNodes,
    imageNodes,
  }
}
