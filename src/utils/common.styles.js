import styled from "styled-components"

import { spacing } from "./spacing"
import { plum, green, darkTeal } from "./colors"

export const Hero = styled.div`
  width: 100%;
  height: ${spacing.customSpacing("500px")};
  background-color: ${plum};

  @media (max-width: ${spacing.customSpacing("428px")}) {
    height: ${spacing.customSpacing("400px")};
  }
`

export const Button = styled.button`
  min-height: 40px;
  padding: ${spacing.BASE_SPACING};
  width: fit-content;
  max-width: 250px;
  border: 0;
  border-radius: 2px;
  background-color: ${green};
  cursor: pointer;
  color: ${darkTeal};
`
