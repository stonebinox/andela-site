import React from "react"
import {
  ButtonContainer,
  PrimarySignupButton,
  ProblemsContainer,
  StepContainer,
} from "../signup/signup.styles"
import { Highlight, PlainText, StepQuestion } from "./talent-signup.styles"

const Step4 = () => {
  return (
    <>
      <StepContainer>
        <StepQuestion large>
          Connecting <Highlight>your brilliance with opportunity</Highlight>{" "}
          today
        </StepQuestion>
        <ProblemsContainer>
          <PlainText>
            Thank you for applying to join the Andela Talent Network. We will be
            in touch shortly.
          </PlainText>
        </ProblemsContainer>
      </StepContainer>
      <ButtonContainer>
        <PrimarySignupButton
          onClick={() => (window.location = "https://andela.com/insights/")}
        >
          Check out our blogs
        </PrimarySignupButton>
      </ButtonContainer>
    </>
  )
}

export default Step4
