/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react"
import { ReactSVG } from "react-svg"

import { getDataLayer, getSkills, searchSkills } from "../../utils/api"
import { spacing } from "../../utils/spacing"
import {
  ButtonContainer,
  InputContainer,
  InputField,
  LoadingText,
  PeopleContainer,
  PrimarySignupButton,
  SearchBar,
  SearchResultsContainer,
  SecondaryButton,
  SelectedSearchSkillsContainer,
  SkillContainer,
  SkillSearchTitle,
  StepContainer,
  StepQuestion,
  ConditionContainer,
  ConditionText,
  Link,
} from "./signup.styles"
import Magnify from "../../images/magnify.svg"
import Search from "../search/search"
import Skill from "../skills/skill"

const Step4 = ({
  setFormStepAnswer,
  goBack,
  savedValue,
  setSavedSkills,
  eventVariant,
  selectedTest,
}) => {
  const [selected, setSelected] = useState([])
  const [loading, setLoading] = useState(false)
  const [skills, setSkills] = useState([])
  const [searchList, setSearchList] = useState([])
  const [selectedSearchSkills, setSelectedSearchSkills] = useState([])
  const [selectedSkillObjects, setSelectedSkillObjects] = useState([])

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
        onClick={toggleSelected}
      />
    ))
  }

  const submitAnswer = () => {
    const skillNames = selected.map(skill => skill.skill_name)
    const finalAnswer = skillNames.join("|")

    if (finalAnswer?.trim() === "") {
      alert("Please select at least one skill.")
      return
    }

    setFormStepAnswer(
      {
        interestedSkillSets: finalAnswer,
      },
      () => {
        setSavedSkills(selected)
      }
    )
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

          if (!selectedSkills.some(s => s.skill_name === skill_name)) {
            results.push(skill)
          }
        })

        setSearchList(results)
      })
  }

  useEffect(() => {
    getSkillsData()

    const dataLayer = getDataLayer()

    dataLayer?.push({
      event: "dataLayerEvent",
      event_category: "Sign Up Wizard",
      event_action: "sign_up",
      event_label: `${eventVariant}: Step 4`,
    })

    if (savedValue) {
      setSelected(savedValue)
      setSelectedSearchSkills(savedValue)
    }
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
          <Search selected={selected} setSearchList={setSearchList} />
          <SelectedSearchSkillsContainer>
            {renderSkills(selectedSearchSkills, true)}
          </SelectedSearchSkillsContainer>
          <SearchResultsContainer>
            {renderSkills(searchList, true)}
          </SearchResultsContainer>
        </SearchBar>
      </StepContainer>
      <ButtonContainer>
        <SecondaryButton onClick={goBack}>Back</SecondaryButton>
        <PrimarySignupButton onClick={submitAnswer}>Next</PrimarySignupButton>
      </ButtonContainer>
    </>
  )
}

export default Step4
