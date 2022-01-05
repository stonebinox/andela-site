import styled from "styled-components"

import { spacing } from "../../../utils/spacing"
import { darkTeal } from "../../../utils/colors"

export const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ index }) => (index % 2 === 0 ? "row" : "row-reverse")};
  height: ${spacing.customSpacing("350px")};

  @media (max-width: ${spacing.customSpacing("428px")}) {
    flex-direction: column;
  }
`
export const ContentContainer = styled.div`
  color: ${darkTeal};
  font-family: Arial, Helvetica, sans-serif;
  flex: 1;
  padding: ${spacing.BASE_SPACING};
  overflow: hidden;
`

export const ImageContainer = styled.div`
  height: ${spacing.customSpacing("350px")};
  flex: 1;
  overflow: hidden;
`
