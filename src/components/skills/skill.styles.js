import styled from "styled-components"

import {
  paleGrey,
  white,
  grey,
  deepGrey,
  deepOrange,
  lightGrey,
  blue,
  paleBlue,
  lightTeal,
} from "../../utils/colors"
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

  @media (max-width: ${spacing.customSpacing("428px")}) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const CustomerSpeakImage = styled(BannerImage)`
  flex: 1;
  margin: 0 auto;

  @media (max-width: ${spacing.customSpacing("428px")}) {
    margin-bottom: ${spacing.BASE_SPACING};
  }
`

export const CustomerSpeakTestimonialContent = styled.div`
  flex: 1;
`

export const CustomerSpeakTestimonialTitle = styled(SkillSubtitle)`
  text-align: left;
  margin-bottom: ${spacing.BASE_SPACING};

  @media (max-width: ${spacing.customSpacing("428px")}) {
    text-align: center;
  }
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

export const AndelaLogoContainer = styled.div`
  width: 100%;
  text-align: center;
`

export const AndelaLogo = styled.img`
  width: ${spacing.customSpacing("100px")};
  height: ${spacing.customSpacing("100px")};
  margin: 0 auto;
  margin-bottom: ${spacing.BASE_SPACING};
`

export const FeaturesContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: ${spacing.customSpacing("900px")};
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: ${spacing.BASE_SPACING};
  margin-top: ${spacing.DOUBLE_BASE_SPACING};

  @media (max-width: ${spacing.customSpacing("428px")}) {
    flex-direction: column;
  }
`

export const FeatureContainer = styled.div`
  width: 30vw;
  background-color: ${lightGrey};
  padding: ${spacing.HALF_BASE_SPACING} ${spacing.DOUBLE_BASE_SPACING};
  text-align: center;
  margin-right: ${spacing.HALF_BASE_SPACING};
  margin-left: ${spacing.HALF_BASE_SPACING};
  margin-bottom: ${spacing.DOUBLE_BASE_SPACING};

  @media (max-width: ${spacing.customSpacing("428px")}) {
    width: 100%;
    margin-bottom: 0;
  }
`

export const FeaturePosition = styled.div`
  width: ${spacing.customSpacing("50px")};
  height: ${spacing.customSpacing("50px")};
  border-radius: ${spacing.customSpacing("25px")};
  border: ${spacing.customSpacing("2px")} solid ${blue};
  margin: 0 auto;
  margin-top: -${spacing.DOUBLE_BASE_SPACING};
  background-color: ${white};
  font-family: sans-serif;
  font-weight: bold;
  color: ${blue};
  line-height: 50px;
  font-size: 20px;
  margin-bottom: ${spacing.DOUBLE_BASE_SPACING};

  @media (max-width: ${spacing.customSpacing("428px")}) {
    margin-top: ${spacing.BASE_SPACING};
    margin-bottom: ${spacing.BASE_SPACING};
  }
`

export const FeatureContainerTitle = styled.div`
  font-size: 24px;
  font-weight: 500;
  font-family: sans-serif;
  margin-bottom: ${spacing.BASE_SPACING};
`

export const FeatureContainerBody = styled.div`
  font-family: sans-serif;
  font-weight: 22px;
  color: ${grey};
  text-align: center;
`

export const DifferentImage = styled.div`
  width: ${spacing.customSpacing("100px")};
  height: ${spacing.customSpacing("100px")};
  border-radius: ${spacing.customSpacing("50px")};
  background: ${deepOrange} url(${({ url }) => url}) no-repeat center;
  background-size: 70%;
  margin: 0 auto;
  margin-bottom: ${spacing.BASE_SPACING};
`

export const PerksList = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  max-width: ${spacing.customSpacing("900px")};
  margin: 0 auto;
  margin-top: ${spacing.BASE_SPACING};
  column-gap: ${spacing.DOUBLE_BASE_SPACING};
`

export const PerkContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: ${spacing.DOUBLE_BASE_SPACING};
`

export const PerkImage = styled(DifferentImage)`
  background: ${paleBlue} url(${({ url }) => url}) no-repeat center;
  background-size: 60%;
  margin-bottom: ${spacing.HALF_BASE_SPACING};
`

export const PerkTitle = styled(SkillSubtitle)`
  font-size: 24px;
  color: ${lightTeal};
  margin-bottom: ${spacing.HALF_BASE_SPACING};
`
