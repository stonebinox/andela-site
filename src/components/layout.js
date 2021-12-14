/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { useUrlsAndTitles } from "../utils/api"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const urls = useUrlsAndTitles()

  const parseData = data => {
    const { urlNodes, imageNodes } = data
    const {
      banner: {
        file: { url: imageUrl },
      },
    } = imageNodes[0]
    const { url } = urlNodes[0]

    return (
      <div>
        <img src={imageUrl} border="0" width="90%" />
        <br />
        <a href={url} target="_blank">
          Link
        </a>
      </div>
    )
  }

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        {parseData(urls)}
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
