import React, { useState } from "react"

import Seo from "../components/seo"
import { PageContainer } from "../utils/common.styles"
import PermalinkImage from "../images/andela-social-share-default.png"
import AndelaWhite from "../images/andela-logo-white.png"
import AndelaDark from "../images/andela-logo-dark.png"
import Guy1 from "../images/onboarding/talent-guy-1.png"
import {
  FormContainer,
  HeroLogo,
  HeroLogoMobile,
  LoadingText,
  MainContainer,
  SignupHero,
  StepProgress,
  StepProgressContainer,
} from "../components/signup/signup.styles"
import {
  HeroDescription,
  HeroTitle,
} from "../components/talent-signup/talent-signup.styles"
import Step1 from "../components/talent-signup/step-1"

const TalentSignupPage = () => {
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState(null)

  const confirmPageRefresh = () => {
    if (
      confirm(
        "Are you sure you want to continue? You will lose any unsaved selections."
      )
    ) {
      window.location.reload(true)
    }
  }

  const getStep = () => {
    switch (step) {
      default:
      case 1:
        return <Step1 setFormStepAnswer={setFormStepAnswer} />
    }
  }

  const setFormStepAnswer = answer => {
    setFormData({
      ...formData,
      ...answer,
    })

    if (step < 4) {
      setStep(step + 1)
    }
  }

  return (
    <PageContainer>
      <Seo
        title="Join Our Talent Network"
        description="Andela is a global talent network that connects companies with vetted, remote engineers in emerging markets. Hundreds of leading companies like Cloudflare and ViacomCBS leverage Andela to scale their engineering teams quickly and cost effectively."
        meta={[
          {
            property: "og:url",
            content: "https://andela.com/hire-talent/",
          },
          {
            property: "og:site_name",
            content: "Andela",
          },
          {
            property: "og:image",
            content: PermalinkImage,
          },
          {
            property: "og:image:secure_url",
            content: PermalinkImage,
          },
          {
            property: "og:image:width",
            content: "1200",
          },
          {
            property: "og:image:height",
            content: "630",
          },
          {
            name: "twitter:card",
            content: "summary_large_image",
          },
          {
            name: "twitter:site",
            content: "@andela",
          },
          {
            name: "twitter:image",
            content: PermalinkImage,
          },
          {
            name: "twitter:creator",
            content: "@andela",
          },
        ]}
      />
      <FormContainer>
        <SignupHero>
          <HeroLogo onClick={confirmPageRefresh}>
            <img src={AndelaWhite} alt="Logo" />
          </HeroLogo>
          {step === 1 && (
            <div style={{ textAlign: "center" }}>
              <img src={Guy1} width="70%" style={{ margin: "0 auto" }} />
              <HeroTitle>Reliable jobs</HeroTitle>
              <HeroDescription>
                We only work with trusted, vetted companies. Our team works
                globally to eliminate fraud or illegal activity, ensuring the
                jobs you apply for are safe and secure.
              </HeroDescription>
            </div>
          )}
        </SignupHero>
        <MainContainer>
          <HeroLogoMobile>
            <img src={AndelaDark} />
          </HeroLogoMobile>
          <StepProgressContainer>
            <StepProgress selected={step >= 1} />
            <StepProgress selected={step >= 2} />
            <StepProgress selected={step >= 3} />
            <StepProgress selected={step >= 4} />
          </StepProgressContainer>
          {!loading ? getStep() : <LoadingText>Loading ...</LoadingText>}
        </MainContainer>
      </FormContainer>
    </PageContainer>
  )
}

export default TalentSignupPage
