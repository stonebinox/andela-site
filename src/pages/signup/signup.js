import React, { useState, useEffect } from "react"
import { ReactSVG } from "react-svg"
import Seo from "../../components/seo"
import { getMarketoForm } from "../../utils/api"

import { PageContainer } from "../../utils/common.styles"
import {
  FocusDot,
  FocusDotContainer,
  FormContainer,
  HeroDescription,
  HeroTitle,
  MainContainer,
  SignupHero,
  StepProgress,
  StepProgressContainer,
  LoadingText,
} from "./signup.styles"
import Girl1 from "../../images/onboarding/lady-1.svg"
import Guy2 from "../../images/onboarding/guy-2.svg"
import { aqua, deepBlue, mainOrange } from "../../utils/colors"
import { Step1 } from "./step-1"
import { Step2 } from "./step-2"

const SignupPage = () => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState(null)
  const [step, setStep] = useState(1)

  const getForm = () => {
    setLoading(true)
    const form = getMarketoForm()

    if (!form) {
      setTimeout(() => getForm(), 500)
    }

    form?.loadForm("//hire.andela.com", "449-UCH-555", 1699, finalForm => {
      setLoading(false)
      console.log(finalForm.vals())
    })
  }

  const getStep = () => {
    switch (step) {
      default:
      case 1:
        return <Step1 setFormStepAnswer={setFormStepAnswer} />
      case 2:
        return <Step2 setFormStepAnswer={setFormStepAnswer} />
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

  useEffect(() => {
    getForm()
  }, [])

  return (
    <PageContainer>
      <Seo title="Andela Signup" />
      <FormContainer>
        <SignupHero>
          {step === 1 && (
            <div>
              <ReactSVG src={Girl1} width="100%" fill={deepBlue} />
              <HeroTitle color={mainOrange}>
                &gt; 40% faster time to hire than internal recruiting
              </HeroTitle>
              <HeroDescription>
                You have product release commitments, customers, and never
                enough time or resources to meet your objectives.
              </HeroDescription>
              <HeroDescription>
                Andela helps you rapidly scale your team by offering vetted
                remote-ready talent.
              </HeroDescription>
            </div>
          )}
          {step === 2 && (
            <div>
              <ReactSVG src={Guy2} width="100%" fill={deepBlue} />
              <HeroTitle color={aqua}>
                18-month average client relationship
              </HeroTitle>
              <HeroDescription>
                Roadmaps, goals, and plans often change, and many times,
                full-time hiring, outsourcing don’t offer the flexibility to
                shift teams around. Andela builds embedded teams to support
                projects, new initiatives, or ongoing non-core functions
              </HeroDescription>
            </div>
          )}
          <FocusDotContainer>
            <FocusDot selected={step === 1} />
            <FocusDot selected={step === 2} />
            <FocusDot selected={step === 3} />
            <FocusDot selected={step === 4} />
          </FocusDotContainer>
        </SignupHero>
        <MainContainer>
          <StepProgressContainer>
            <StepProgress selected={step >= 1} />
            <StepProgress selected={step >= 2} />
            <StepProgress selected={step >= 3} />
            <StepProgress selected={step >= 4} />
          </StepProgressContainer>
          {!loading ? getStep() : <LoadingText>Loading ...</LoadingText>}
          {/* <form
            id="mktoForm_1699"
            data-last-conversion-value="Hire Talent"
          ></form> */}
        </MainContainer>
      </FormContainer>
    </PageContainer>
  )
}

export default SignupPage
