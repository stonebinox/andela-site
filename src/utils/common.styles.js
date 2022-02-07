import styled from "styled-components"

import { spacing } from "./spacing"
import { plum, green, darkTeal, blue, white } from "./colors"

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

export const PageContainer = styled.div`
  margin: 0;
  padding: 0;
`

export const MainButton = styled.button`
  min-height: ${spacing.customSpacing("54px")};
  background-color: ${blue};
  color: ${white};
  font-size: 18px;
  border: 0;
  margin-top: ${spacing.BASE_SPACING};
  font-family: sans-serif;
  font-weight: bold;
  min-width: ${spacing.customSpacing("144px")};
  cursor: pointer;
`
