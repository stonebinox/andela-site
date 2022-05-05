/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react"
import { spacing } from "../../utils/spacing"
import Search from "../search/search"
import {
  ButtonContainer,
  PeopleContainer,
  PrimarySignupButton,
  SearchResultsContainer,
  SecondaryButton,
  SelectedSearchSkillsContainer,
  SkillContainer,
  StepContainer,
} from "../signup/signup.styles"
import Skill from "../skills/skill"
import {
  Highlight,
  StepQuestion,
  SearchBar,
  YearsContainer,
} from "./talent-signup.styles"

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
  const [selected, setSelected] = useState(null)
  const [searchList, setSearchList] = useState([])
  const [yearsOfExperience, setYearsOfExperience] = useState(null)

  const onSkillSelect = skill => {
    setSelected(skill)
  }

  const renderSkills = skillList => {
    return skillList.map((skill, index) => (
      <Skill
        key={index}
        skill={skill}
        selected={[selected]}
        fromSearch
        selectedSearchSkills={[selected]}
        onClick={onSkillSelect}
      />
    ))
  }

  const submitAnswer = () => {
    const skillName = selected.skill_name

    if (skillName?.trim() === "") {
      alert("Please select at least one skill.")
      return
    }

    if (!yearsOfExperience) {
      alert("Please select your years of experience.")
      return
    }

    setFormStepAnswer({
      tLMostProficientAndelaSupportedFramework: skillName,
      tLYearsofExperienceontheFramework: yearsOfExperience,
    })
  }

  useEffect(() => {
    setSelected(savedValue?.selected)
    setYearsOfExperience(savedValue?.yearsOfExperience ?? null)
  }, [])

  return (
    <>
      <StepContainer>
        <PeopleContainer>
          <StepQuestion>
            Select your <Highlight>primary</Highlight> skills
          </StepQuestion>
          <SearchBar style={{ marginTop: spacing.BASE_SPACING }}>
            <Search selected={[selected]} setSearchList={setSearchList} local />
            <SelectedSearchSkillsContainer>
              {renderSkills([selected])}
            </SelectedSearchSkillsContainer>
            <SearchResultsContainer>
              {renderSkills(searchList)}
            </SearchResultsContainer>
          </SearchBar>
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
