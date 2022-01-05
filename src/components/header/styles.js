import styled from "styled-components"

import { darkTeal } from "../../utils/colors"
import { spacing } from "../../utils/spacing"

export const HeaderContainer = styled.header`
  background-color: ${darkTeal};
`

export const HeaderContent = styled.div`
  margin: 0 auto;
  max-width: ${spacing.customSpacing("960px")};
  padding: ${spacing.BASE_SPACING} 0;

  @media (max-width: ${spacing.customSpacing("428px")}) {
    padding: ${spacing.BASE_SPACING};
  }
`
