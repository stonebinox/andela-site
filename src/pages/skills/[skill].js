/* eslint-disable react/prop-types */
import React from "react"

import Seo from "../../components/seo"
import { MainButton, PageContainer } from "../../utils/common.styles"
import { useSkillsPage } from "../../utils/queries/use-skills-page"
import {
  Banner,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerText,
  BannerTitle,
} from "./skill.styles"

const validSkills = {
  golang: "Golang",
  javascript: "JavaScript",
  python: "Python",
  react: "React",
  "react-native": "React Native",
  salesforce: "Salesforce",
}

const SkillPage = ({ params }) => {
  const { skill } = params
  const selectedSkill = validSkills[skill] ?? validSkills.golang

  const {
    pageTitle,
    titleDescription: { titleDescription },
    bannerImage: {
      file: { url: bannerImageUrl },
    },
  } = useSkillsPage()

  const parsedPageTitle = pageTitle.replace(/{skill}/g, selectedSkill)
  const parsedTitleDescription = titleDescription.replace(
    /{skill}/g,
    selectedSkill
  )

  return (
    <PageContainer>
      <Seo title={selectedSkill} />
      <Banner>
        <BannerContent>
          <BannerText>
            <BannerTitle>{parsedPageTitle}</BannerTitle>
            <BannerDescription>{parsedTitleDescription}</BannerDescription>
            <MainButton
              onClick={() =>
                (window.location = "https://andela.com/hire-talent")
              }
            >
              Hire Talent
            </MainButton>
          </BannerText>
          <BannerImage src={bannerImageUrl} alt="Banner" width="85%" />
        </BannerContent>
      </Banner>
    </PageContainer>
  )
}

export default SkillPage
