/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react"
import { ReactSVG } from "react-svg"

import { getDataLayer, getSkills, searchSkills } from "../../utils/api"
import { spacing } from "../../utils/spacing"
import {
  InputContainer,
  InputField,
  LoadingText,
  PeopleContainer,
  PrimarySignupButton,
  SearchBar,
  SearchResultsContainer,
  SelectedSearchSkillsContainer,
  SkillContainer,
  SkillSearchTitle,
  StepContainer,
  StepQuestion,
} from "./signup.styles"
import Magnify from "../../images/magnify.svg"

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

    if (!selectedSkills.includes(skill)) {
      selectedSkills.push(skill)
    } else {
      const skillPosition = selectedSkills.indexOf(skill)
      selectedSkills.splice(skillPosition, 1)
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

    setSelectedSearchSkills(selectedSearchSkillsCopy)
  }

  return (
    <SkillContainer
      onClick={() => {
        toggleSelected(skill_name)

        if (fromSearch) toggleSearchSelected(skill)
      }}
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
  const [searchList, setSearchList] = useState([])
  const [selectedSearchSkills, setSelectedSearchSkills] = useState([])

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

  const renderSkills = (skillList, fromSearch = false) => {
    return skillList.map((skill, index) => (
      <Skill
        key={index}
        skill={skill}
        setSelected={setSelected}
        selected={selected}
        fromSearch={fromSearch}
        setSelectedSearchSkills={setSelectedSearchSkills}
        selectedSearchSkills={selectedSearchSkills}
      />
    ))
  }

  const submitAnswer = () => {
    const finalAnswer = selected.join("|")

    setFormStepAnswer({
      interestedSkillSets: finalAnswer,
    })
  }

  const getResults = text => {
    if (text.trim().length === 0) {
      setSearchList([])
      return
    }

    const selectedSkills = selected.slice()

    searchSkills(text)
      .then(response => response.json())
      .then(data => {
        const results = []

        data.forEach(skill => {
          const { skill_name } = skill

          if (!selectedSkills.includes(skill_name)) {
            results.push(skill)
          }
        })

        setSearchList(results)
      })
  }

  useEffect(() => {
    getSkillsData()

    const dataLayer = getDataLayer()

    dataLayer.push({
      event: "dataLayerEvent",
      event_category: "Sign Up Wizard",
      event_action: "sign_up",
      event_label: "Step 4",
    })
  }, [])

  return (
    <>
      <StepContainer>
        <StepQuestion>
          What type of skills do you need in your talent?
        </StepQuestion>
        <PeopleContainer>
          {renderSkills(skills)}
          {loading && <LoadingText>Loading skills ...</LoadingText>}
        </PeopleContainer>
        <SkillSearchTitle>
          Can't find your desired skill above?
        </SkillSearchTitle>
        <SearchBar>
          <InputContainer>
            <ReactSVG src={Magnify} width={15} height={15} />
            <InputField
              name="skill-search"
              type="search"
              onChange={e => getResults(e.target.value)}
            />
          </InputContainer>
          <SelectedSearchSkillsContainer>
            {renderSkills(selectedSearchSkills, true)}
          </SelectedSearchSkillsContainer>
          <SearchResultsContainer>
            {renderSkills(searchList, true)}
          </SearchResultsContainer>
        </SearchBar>
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
