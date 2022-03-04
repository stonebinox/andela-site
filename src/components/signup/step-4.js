/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react"
import { spacing } from "../../utils/spacing"
import {
  PeopleContainer,
  PrimarySignupButton,
  SkillContainer,
  StepContainer,
  StepQuestion,
} from "./signup.styles"

const skills = [
  {
    skill_id: 2,
    skill_name: "react",
    skill_label: "React",
    skill_group: "UI/UX Development",
  },
  {
    skill_id: 2,
    skill_name: "react1",
    skill_label: "React",
    skill_group: "UI/UX Development",
  },
  {
    skill_id: 2,
    skill_name: "react2",
    skill_label: "React",
    skill_group: "UI/UX Development",
  },
  {
    skill_id: 2,
    skill_name: "react3",
    skill_label: "React",
    skill_group: "UI/UX Development",
  },
  {
    skill_id: 2,
    skill_name: "react4",
    skill_label: "React",
    skill_group: "UI/UX Development",
  },
  {
    skill_id: 2,
    skill_name: "react5",
    skill_label: "React",
    skill_group: "UI/UX Development",
  },
  {
    skill_id: 2,
    skill_name: "react6",
    skill_label: "React",
    skill_group: "UI/UX Development",
  },
  {
    skill_id: 2,
    skill_name: "react7",
    skill_label: "React",
    skill_group: "UI/UX Development",
  },
  {
    skill_id: 2,
    skill_name: "react8",
    skill_label: "React",
    skill_group: "UI/UX Development",
  },
]

const Skill = ({ skill, setSelected, selected }) => {
  const { skill_name, skill_label } = skill

  return (
    <SkillContainer
      onClick={() => setSelected(skill_name)}
      selected={selected === skill_name}
    >
      {skill_label}
    </SkillContainer>
  )
}

const Step4 = ({ setFormStepAnswer }) => {
  const [selected, setSelected] = useState(null)

  const renderSkills = () => {
    return skills.map((skill, index) => (
      <Skill
        key={index}
        skill={skill}
        setSelected={setSelected}
        selected={selected}
      />
    ))
  }

  return (
    <>
      <StepContainer>
        <StepQuestion>
          What type of skills do you need in your talent?
        </StepQuestion>
        <PeopleContainer>{renderSkills()}</PeopleContainer>
      </StepContainer>
      <PrimarySignupButton style={{ marginTop: spacing.customSpacing("64px") }}>
        Next
      </PrimarySignupButton>
    </>
  )
}

export default Step4
