import styled from "styled-components"

import { lightEmerald, emarald, blackLight, white } from "../../utils/colors"
import { spacing } from "../../utils/spacing"
import { InputWrapper } from "../signup/signup.styles"

export const HeroDescription = styled.div`
  color: ${white};
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

export const SearchBar = styled(InputWrapper)`
  max-width: ${spacing.customSpacing("520px")};
  margin: 0 auto;
  margin-top: ${spacing.BASE_SPACING};
  margin-bottom: ${spacing.DOUBLE_BASE_SPACING};
`

export const YearsContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: ${spacing.customSpacing("600px")};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: ${spacing.DOUBLE_BASE_SPACING};
`
