/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header/header"
import "./layout.css"
import { spacing } from "../utils/spacing"

const MainContent = styled.div`
  margin: 0 auto;
  max-width: ${spacing.customSpacing("960px")};
  padding-top: ${spacing.BASE_SPACING};
`

const Layout = ({ pageTitle = null, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header
        siteTitle={pageTitle || data.site.siteMetadata?.title || `Title`}
      />
      <MainContent>
        <main>{children}</main>
      </MainContent>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
