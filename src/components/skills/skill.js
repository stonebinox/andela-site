/* eslint-disable react/prop-types */
import React from "react"
import { SkillContainer } from "../signup/signup.styles"

const Skill = ({
  skill,
  selected,
  fromSearch = false,
  setSelectedSearchSkills,
  selectedSearchSkills,
  onClick,
}) => {
  if (!skill) return null

  const { skill_name, skill_label } = skill

  const toggleSearchSelected = skill => {
    let selectedSearchSkillsCopy = selectedSearchSkills.slice()

    if (
      !selectedSearchSkillsCopy.some(
        skillCopy => skill.skill_name === skillCopy?.skill_name
      )
    ) {
      selectedSearchSkillsCopy.push(skill)
    } else {
      selectedSearchSkillsCopy = selectedSearchSkillsCopy.filter(
        skillCopy => skillCopy.skill_name !== skill.skill_name
      )
    }

    setSelectedSearchSkills?.(selectedSearchSkillsCopy)
  }

  return (
    <SkillContainer
      onClick={() => {
        onClick(skill)

        if (fromSearch) toggleSearchSelected(skill)
      }}
      selected={selected.find(skill => skill?.skill_name === skill_name)}
    >
      {skill_label}
    </SkillContainer>
  )
}

export default Skill
