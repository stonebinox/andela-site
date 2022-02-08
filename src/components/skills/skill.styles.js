import styled from "styled-components"

import { paleGrey, white, grey, deepGrey, deepOrange } from "../../utils/colors"
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

export const CustomerSpeakContainer = styled.div`
  width: 100%;
  background-color: ${white};
  padding-top: ${spacing.customSpacing("64px")};
  padding-bottom: ${spacing.customSpacing("64px")};

  @media (max-width: ${spacing.customSpacing("428px")}) {
    padding: ${spacing.DOUBLE_BASE_SPACING};
  }
`

export const CustomerSpeakLayout = styled.div`
  width: 100%;
  max-width: ${spacing.customSpacing("900px")};
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  justify-content: space-between;
  margin-bottom: ${spacing.DOUBLE_BASE_SPACING};

  @media (max-width: ${spacing.customSpacing("428px")}) {
    flex-direction: column;
  }
`

export const CustomerSubtitle = styled.div`
  font-size: 22px;
  color: ${deepOrange};
  font-weight: bold;
  font-family: sans-serif;
  margin-bottom: ${spacing.BASE_SPACING};
`

export const CustomerSpeakTestimonialLayout = styled.div`
  display: grid;
  width: 100%;
  max-width: ${spacing.customSpacing("900px")};
  grid-template-columns: 30% 70%;
  margin: 0 auto;
`

export const CustomerSpeakImage = styled(BannerImage)`
  flex: 1;
  margin: 0 auto;
`

export const CustomerSpeakTestimonialContent = styled.div`
  flex: 1;
`

export const CustomerSpeakTestimonialTitle = styled(SkillSubtitle)`
  text-align: left;
  margin-bottom: ${spacing.BASE_SPACING};
`

export const CustomerSpeakName = styled.div`
  font-family: sans-serif;
  font-size: 12px;
  font-weight: bold;
  line-height: ${spacing.BASE_SPACING};
`

export const CustomerSpeakDesignation = styled(CustomerSpeakName)`
  color: ${grey};
  font-weight: normal;
`
