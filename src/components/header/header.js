import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import { white } from "../../utils/colors"
import { HeaderContainer, HeaderContent } from "./styles"

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <HeaderContent>
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
    </HeaderContent>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
