/* eslint-disable react/prop-types */
import React from "react"
import { documentToHtmlString } from "@contentful/rich-text-html-renderer"

import { ProfileCard } from "../../components/profile-card/profile-card"
import Seo from "../../components/seo"
import { MainButton, PageContainer } from "../../utils/common.styles"
import { useSkillsPage } from "../../utils/queries/use-skills-page"
import { talent } from "../talent-list"
import {
  Banner,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerText,
  BannerTitle,
  Brand,
  CustomerSpeakContainer,
  CustomerSpeakImage,
  CustomerSpeakLayout,
  CustomerSpeakTestimonialContent,
  CustomerSpeakTestimonialLayout,
  CustomerSubtitle,
  SkillSubtitle,
  SkillSubtitleSmall,
  TalentContainer,
  TalentList,
  TrustedContainer,
  CustomerSpeakTestimonialTitle,
  CustomerSpeakName,
  CustomerSpeakDesignation,
  AndelaLogo,
  AndelaLogoContainer,
  FeaturesContainer,
  FeatureContainer,
  FeatureContainerTitle,
  FeaturePosition,
  FeatureContainerBody,
  DifferentImage,
  PerksList,
  PerkContainer,
  PerkImage,
  PerkTitle,
} from "../../components/skills/skill.styles"
import "./style.css"

const validSkills = {
  golang: "Golang",
  javascript: "JavaScript",
  python: "Python",
  react: "React",
  "react-native": "React Native",
  salesforce: "Salesforce",
}

const Feature = ({ feature, selectedSkill, position = 1 }) => {
  const { featureTitle, featureBody } = feature
  const parsedTitle = featureTitle.replace(/{skill}/g, selectedSkill)
  const parsedBody = featureBody.replace(/{skill}/g, selectedSkill)

  return (
    <FeatureContainer>
      <FeaturePosition>{position}</FeaturePosition>
      <FeatureContainerTitle>{parsedTitle}</FeatureContainerTitle>
      <FeatureContainerBody>{parsedBody}</FeatureContainerBody>
    </FeatureContainer>
  )
}

const Perk = ({ perk }) => {
  const { image, title, body } = perk

  return (
    <PerkContainer>
      <PerkImage url={image} />
      <PerkTitle>{title}</PerkTitle>
      <FeatureContainerBody>{body}</FeatureContainerBody>
    </PerkContainer>
  )
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
    trustedByBrands,
    subtitle,
    smallSubtitle,
    customerSubtitle,
    customerSubtitleDescription,
    customerSpeakImage: {
      title,
      file: { url: customerSpeakImage },
    },
    customerSpeakTitle,
    customerSpeakLongDescription: { raw: customerSpeakLongDescriptionText },
    customerSpeakName,
    customerSpeakDesignation,
    andelaLogo: {
      title: andelaLogoTitle,
      file: { url: andelaLogo },
    },
    howToText,
    andelaFeatures: { features },
    differentTitle,
    differentSectionImage: {
      file: { url: differentSectionImage },
    },
    perks: { perks },
  } = useSkillsPage()

  console.log("feature", features)

  const parsedPageTitle = pageTitle.replace(/{skill}/g, selectedSkill)
  const parsedTitleDescription = titleDescription.replace(
    /{skill}/g,
    selectedSkill
  )
  const parsedSubtitle = subtitle.replace(/{skill}/g, selectedSkill)
  const parsedHowToText = howToText.replace(/{skill}/g, selectedSkill)

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
      <TrustedContainer>
        {trustedByBrands.map((brand, key) => (
          <Brand src={brand.file.url} alt={brand.title} key={key} />
        ))}
      </TrustedContainer>
      <TalentContainer>
        <SkillSubtitle>{parsedSubtitle}</SkillSubtitle>
        <SkillSubtitleSmall>{smallSubtitle}</SkillSubtitleSmall>
        <TalentList>
          {talent.map((person, key) => (
            <ProfileCard profile={person} key={key} />
          ))}
        </TalentList>
      </TalentContainer>
      <CustomerSpeakContainer>
        <CustomerSpeakLayout>
          <div>
            <CustomerSubtitle>{customerSubtitle}</CustomerSubtitle>
            <BannerDescription>{customerSubtitleDescription}</BannerDescription>
          </div>
          <MainButton
            onClick={() => (window.location = "https://andela.com/hire-talent")}
          >
            Hire Talent
          </MainButton>
        </CustomerSpeakLayout>
        <CustomerSpeakTestimonialLayout>
          <CustomerSpeakImage src={customerSpeakImage} alt={title} />
          <CustomerSpeakTestimonialContent>
            <CustomerSpeakTestimonialTitle>
              {customerSpeakTitle}
            </CustomerSpeakTestimonialTitle>
            <BannerDescription
              dangerouslySetInnerHTML={{
                __html: documentToHtmlString(
                  JSON.parse(customerSpeakLongDescriptionText)
                ),
              }}
            />
            <CustomerSpeakName>{customerSpeakName}</CustomerSpeakName>
            <CustomerSpeakDesignation>
              {customerSpeakDesignation}
            </CustomerSpeakDesignation>
          </CustomerSpeakTestimonialContent>
        </CustomerSpeakTestimonialLayout>
      </CustomerSpeakContainer>
      <AndelaLogoContainer>
        <AndelaLogo src={andelaLogo} title={andelaLogoTitle} />
        <BannerDescription>{parsedHowToText}</BannerDescription>
      </AndelaLogoContainer>
      <FeaturesContainer>
        {features.map((feature, index) => (
          <Feature
            key={index}
            feature={feature}
            selectedSkill={selectedSkill}
            position={index + 1}
          />
        ))}
      </FeaturesContainer>
      <DifferentImage url={differentSectionImage} />
      <SkillSubtitle>{differentTitle}</SkillSubtitle>
      <PerksList>
        {perks.map((perk, index) => (
          <Perk perk={perk} key={index} />
        ))}
      </PerksList>
    </PageContainer>
  )
}

export default SkillPage
