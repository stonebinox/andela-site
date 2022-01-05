import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { darkTeal, white } from "../utils/colors"
import { spacing } from "../utils/spacing"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: darkTeal,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: spacing.customSpacing(960),
        padding: `${spacing.customSpacing(16)} 0`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: white,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
