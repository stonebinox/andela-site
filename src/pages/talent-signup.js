import React, { useState } from "react"

import Seo from "../components/seo"
import { PageContainer } from "../utils/common.styles"
import PermalinkImage from "../images/andela-social-share-default.png"
import AndelaWhite from "../images/andela-logo-white.png"
import Guy1 from "../images/onboarding/talent-guy-1.png"
import {
  FormContainer,
  HeroLogo,
  HeroTitle,
  SignupHero,
} from "../components/signup/signup.styles"
import { HeroDescription } from "../components/talent-signup/talent-signup.styles"
import { lightEmarald } from "../utils/colors"

const TalentSignupPage = () => {
  const [loading, setLoading] = useState(false)
  const [step, setStep] = useState(1)

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
          <HeroLogo>
            <img src={AndelaWhite} />
          </HeroLogo>
          {step === 1 && (
            <div style={{ textAlign: "center" }}>
              <img src={Guy1} width="70%" style={{ margin: "0 auto" }} />
              <HeroTitle color={lightEmarald}>Reliable jobs</HeroTitle>
              <HeroDescription>
                We only work with trusted, vetted companies. Our team works
                globally to eliminate fraud or illegal activity, ensuring the
                jobs you apply for are safe and secure.
              </HeroDescription>
            </div>
          )}
        </SignupHero>
      </FormContainer>
    </PageContainer>
  )
}

export default TalentSignupPage
