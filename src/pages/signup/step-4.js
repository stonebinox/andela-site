/* eslint-disable react/prop-types */
import React from "react"
import { spacing } from "../../utils/spacing"
import {
  PrimarySignupButton,
  StepContainer,
  StepQuestion,
} from "./signup.styles"

export const Step4 = ({ setFormStepAnswer }) => {
  return (
    <>
      <StepContainer>
        <StepQuestion>
          What type of skills do you need in your talent?
        </StepQuestion>
      </StepContainer>
      <PrimarySignupButton style={{ marginTop: spacing.customSpacing("64px") }}>
        Next
      </PrimarySignupButton>
    </>
  )
}
