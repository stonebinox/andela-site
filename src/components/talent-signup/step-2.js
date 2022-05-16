/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react"
import { getDataLayer } from "../../utils/api"
import { spacing } from "../../utils/spacing"

import {
  ButtonContainer,
  DropdownField,
  InputContainer,
  PeopleContainer,
  PrimarySignupButton,
  SecondaryButton,
  SkillContainer,
  StepContainer,
} from "../signup/signup.styles"
import { primarySkills } from "../skills/primary-skills"
import { Highlight, StepQuestion, YearsContainer } from "./talent-signup.styles"

const options = [
  {
    key: 0,
    value: "<1 year",
  },
  {
    key: 1,
    value: "1-2 years",
  },
  {
    key: 2,
    value: "3-5 years",
  },
  {
    key: 3,
    value: "6-10 years",
  },
  {
    key: 4,
    value: ">10 years",
  },
]

const Step2 = ({ setFormStepAnswer, goBack, savedValue = null }) => {
  const [yearsOfExperience, setYearsOfExperience] = useState(null)
  const [selectedSkill, setSelectedSkill] = useState(null)

  const dataLayer = getDataLayer()

  const submitAnswer = () => {
    if (
      selectedSkill?.trim() === "" ||
      selectedSkill?.trim() === "Select ..."
    ) {
      alert("Please select at least one skill.")
      return
    }

    if (!yearsOfExperience) {
      alert("Please select your years of experience.")
      return
    }

    dataLayer?.push(
      {
        event: "dataLayerEvent",
        event_category: "Sign Up Wizard",
        event_action: "sign_up",
        event_label: `Step 2 - Skill "${selectedSkill}"`,
      },
      {
        event: "dataLayerEvent",
        event_category: "Sign Up Wizard",
        event_action: "sign_up",
        event_label: `Step 2 - Sk Exp ${yearsOfExperience}`,
      }
    )

    setFormStepAnswer({
      tLMostProficientAndelaSupportedFramework: selectedSkill,
      tLYearsofExperienceontheFramework: yearsOfExperience,
    })
  }

  useEffect(() => {
    setSelectedSkill(savedValue?.selectedSkill)
    setYearsOfExperience(savedValue?.yearsOfExperience ?? null)
  }, [])

  return (
    <>
      <StepContainer>
        <PeopleContainer>
          <StepQuestion>
            Select your <Highlight>primary</Highlight> skill
          </StepQuestion>
          <InputContainer style={{ marginBottom: spacing.DOUBLE_BASE_SPACING }}>
            <DropdownField
              name="skills"
              onChange={e => setSelectedSkill(e.currentTarget.value)}
              value={selectedSkill ?? "Select ..."}
            >
              {primarySkills.map((skill, index) => (
                <option key={index} value={skill.skill_label}>
                  {skill.skill_name}
                </option>
              ))}
            </DropdownField>
          </InputContainer>
          <StepQuestion>Years of experience with this skill</StepQuestion>
          <YearsContainer>
            {options.map(option => (
              <SkillContainer
                key={option.key}
                onClick={() => setYearsOfExperience(option.value)}
                selected={yearsOfExperience === option.value}
              >
                {option.value}
              </SkillContainer>
            ))}
          </YearsContainer>
        </PeopleContainer>
      </StepContainer>
      <ButtonContainer>
        <SecondaryButton onClick={goBack}>Back</SecondaryButton>
        <PrimarySignupButton onClick={submitAnswer}>Next</PrimarySignupButton>
      </ButtonContainer>
    </>
  )
}

export default Step2
