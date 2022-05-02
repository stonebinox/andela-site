import styled from "styled-components"

import {
  mediumGrey,
  lightEmerald,
  emarald,
  blackLight,
} from "../../utils/colors"
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
  font-family: serif;
  font-size: 32px;
  margin-bottom: ${spacing.BASE_SPACING};
`

export const StepQuestion = styled.div`
  text-align: center;
  font-family: serif;
  font-size: 24px;
  font-weight: 400;
  max-width: ${spacing.customSpacing("420px")};
  margin: 0 auto;
`

export const Highlight = styled.span`
  color: ${emarald};
  font-style: italic;
`

export const InputLabel = styled.div`
  font-family: sans-serif;
  font-size: 16px;
  color: ${blackLight};
  text-align: left;
  margin-left: ${spacing.customSpacing("12px")};
  margin-top: ${spacing.BASE_SPACING};
`
