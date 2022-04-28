import styled from "styled-components"

import { mediumGrey, lightEmerald } from "../../utils/colors"
import { spacing } from "../../utils/spacing"

export const HeroDescription = styled.div`
  color: ${mediumGrey};
  font-size: 16px;
  font-family: sans-serif;
  max-width: ${spacing.customSpacing("325px")};
  margin: 0 auto;
`

export const HeroTitle = styled.div`
  color: ${lightEmerald};
`
