import { graphql } from "gatsby"

export const homeData = graphql`
  query pageQuery($id: String) {
    contentfulPage(id: { eq: $id }) {
      title
    }
  }
`
