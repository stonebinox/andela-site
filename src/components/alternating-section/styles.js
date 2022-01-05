import styled from "styled-components"

import { spacing } from "../../utils/spacing"

export const SectionsContainer = styled.div`
  width: 100%;
`

export const AlternatingSectionsContainer = styled.div`
  margin-top: ${spacing.DOUBLE_BASE_SPACING};
  margin-bottom: ${spacing.DOUBLE_BASE_SPACING};

  @media (max-width: ${spacing.customSpacing("428px")}) {
    margin: ${spacing.DOUBLE_BASE_SPACING} ${spacing.BASE_SPACING};
  }
`
