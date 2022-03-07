/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react"
import { getSkills } from "../../utils/api"
import { spacing } from "../../utils/spacing"
import {
  LoadingText,
  PeopleContainer,
  PrimarySignupButton,
  SkillContainer,
  StepContainer,
  StepQuestion,
} from "./signup.styles"

const Skill = ({ skill, setSelected, selected }) => {
  const { skill_name, skill_label } = skill

  const toggleSelected = skill => {
    const selectedSkills = selected.slice()

    if (!selectedSkills.includes(skill)) {
      selectedSkills.push(skill)
    } else {
      const skillPosition = selectedSkills.indexOf(skill)
      selectedSkills.splice(skillPosition, 1)
    }

    setSelected(selectedSkills)
  }

  return (
    <SkillContainer
      onClick={() => toggleSelected(skill_name)}
      selected={selected.includes(skill_name)}
    >
      {skill_label}
    </SkillContainer>
  )
}

const Step4 = ({ setFormStepAnswer }) => {
  const [selected, setSelected] = useState([])
  const [loading, setLoading] = useState(false)
  const [skills, setSkills] = useState([])

  const getSkillsData = () => {
    try {
      setLoading(true)
      getSkills()
        .then(response => response.json())
        .then(data => {
          setSkills(data)
        })
    } catch (e) {
      console.log(e)
    } finally {
      setLoading(false)
    }
  }

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

  const submitAnswer = () => {
    const finalAnswer = selected.join("|")

    setFormStepAnswer({
      interestedSkillSets: finalAnswer,
    })
  }

  useEffect(() => {
    getSkillsData()
  }, [])

  return (
    <>
      <StepContainer>
        <StepQuestion>
          What type of skills do you need in your talent?
        </StepQuestion>
        <PeopleContainer>
          {renderSkills()}
          {loading && <LoadingText>Loading skills ...</LoadingText>}
        </PeopleContainer>
      </StepContainer>
      <PrimarySignupButton
        onClick={submitAnswer}
        style={{ marginTop: spacing.customSpacing("64px") }}
      >
        Next
      </PrimarySignupButton>
    </>
  )
}

export default Step4
