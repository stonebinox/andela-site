import styled from "styled-components"

import { paleGrey, white, grey, deepGrey } from "../../utils/colors"
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

  @media (max-width: ${spacing.customSpacing("428px")}) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const BannerTitle = styled.h1`
  font-size: 40px;
  margin-top: ${spacing.DOUBLE_BASE_SPACING};
  font-family: sans-serif;
  color: ${deepGrey};
`

export const BannerText = styled.div`
  width: 100%;

  @media (max-width: ${spacing.customSpacing("428px")}) {
    padding: ${spacing.BASE_SPACING};
  }
`

export const BannerDescription = styled.div`
  font-size: 18px;
  color: ${grey};
  font-family: sans-serif;
  line-height: 25px;
`

export const BannerImage = styled.img`
  margin: 0;
`

export const TrustedContainer = styled.div`
  width: 100%;
  background-color: ${white};
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: ${spacing.BASE_SPACING};
  margin-bottom: ${spacing.BASE_SPACING};
`

export const Brand = styled.img`
  width: ${spacing.customSpacing("150px")};
  margin-bottom: ${spacing.BASE_SPACING};
`

export const TalentContainer = styled.div`
  width: 100%;
  background-color: ${paleGrey};
  padding-top: ${spacing.BASE_SPACING};
  padding-bottom: ${spacing.BASE_SPACING};
`

export const SkillSubtitle = styled.div`
  text-align: center;
  font-size: 32px;
  font-family: sans-serif;
  font-weight: 200;

  @media (max-width: ${spacing.customSpacing("428px")}) {
    line-height: ${spacing.DOUBLE_BASE_SPACING};
  }
`

export const SkillSubtitleSmall = styled(SkillSubtitle)`
  font-size: 18px;
  font-weight: normal;
  margin-top: ${spacing.BASE_SPACING};
  color: ${grey};
`

export const TalentList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  max-width: ${spacing.customSpacing("900px")};
`
