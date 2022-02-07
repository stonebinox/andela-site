import styled from "styled-components"

import { paleGrey } from "../../utils/colors"
import { spacing } from "../../utils/spacing"

export const Banner = styled.div`
  width: 100%;
  background-color: ${paleGrey};
`

export const BannerContent = styled.div`
  width: 100%;
  max-width: ${spacing.customSpacing("900px")};
  margin: 0 auto;
  display: grid;
  grid-template-columns: 50% 50%;
`

export const BannerTitle = styled.h1`
  font-size: 40px;
  margin-top: ${spacing.DOUBLE_BASE_SPACING};
`

export const BannerText = styled.div`
  width: 100%;
`

export const BannerDescription = styled.div`
  font-size: 18px;
  color: #575b74;
  font-family: sans-serif;
  line-height: 25px;
`

export const BannerImage = styled.img`
  margin: 0;
`
