import React, { useState } from "react"

import Seo from "../components/seo"
import { PageContainer } from "../utils/common.styles"
import PermalinkImage from "../images/andela-social-share-default.png"
import AndelaWhite from "../images/andela-logo-white.png"
import {
  FormContainer,
  HeroLogo,
  SignupHero,
} from "../components/signup/signup.styles"

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
        </SignupHero>
      </FormContainer>
    </PageContainer>
  )
}

export default TalentSignupPage
