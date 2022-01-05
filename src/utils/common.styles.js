import styled from "styled-components"

import { spacing } from "./spacing"
import { plum } from "./colors"

export const Hero = styled.div`
  width: 100%;
  height: ${spacing.customSpacing("500px")};
  background-color: ${plum};

  @media (max-width: ${spacing.customSpacing("428px")}) {
    height: ${spacing.customSpacing("400px")};
  }
`
