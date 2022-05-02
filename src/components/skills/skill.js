/* eslint-disable react/prop-types */
import React from "react"
import { SkillContainer } from "../signup/signup.styles"

const Skill = ({
  skill,
  setSelected,
  selected,
  fromSearch = false,
  setSelectedSearchSkills,
  selectedSearchSkills,
}) => {
  const { skill_name, skill_label } = skill

  const toggleSelected = skill => {
    const selectedSkills = selected.slice()
    const position = selectedSkills.findIndex(
      selectedSkill => selectedSkill.skill_name === skill.skill_name
    )

    if (position === -1) {
      selectedSkills.push(skill)
    } else {
      selectedSkills.splice(position, 1)
    }

    setSelected(selectedSkills)
  }

  const toggleSearchSelected = skill => {
    let selectedSearchSkillsCopy = selectedSearchSkills.slice()

    if (
      !selectedSearchSkillsCopy.some(
        skillCopy => skill.skill_name === skillCopy.skill_name
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
        toggleSelected(skill)

        if (fromSearch) toggleSearchSelected(skill)
      }}
      selected={selected.some(s => s.skill_name === skill_name)}
    >
      {skill_label}
    </SkillContainer>
  )
}

export default Skill
