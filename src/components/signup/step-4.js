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

    setSelectedSearchSkills(selectedSearchSkillsCopy)
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
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [policyAccepted, setPolicyAccepted] = useState(false)

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
    const skillNames = selected.map(skill => skill.skill_name)
    const finalAnswer = skillNames.join("|")

    if (finalAnswer?.trim() === "") {
      alert("Please select at least one skill.")
      return
    }

    if (selectedTest === 1 && (!termsAccepted || !policyAccepted)) {
      alert(
        "Please accept our Terms and Conditions and Privacy Policy before proceeding."
      )
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

    dataLayer.push({
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
          <InputContainer>
            <ReactSVG src={Magnify} width={15} height={15} />
            <InputField
              name="skill-search"
              type="search"
              onChange={e => getResults(e.target.value)}
              placeholder="Search for skills"
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
      {selectedTest === 1 && (
        <ConditionContainer>
          <ConditionText>
            <input
              type="checkbox"
              onChange={e => setTermsAccepted(e.currentTarget.checked)}
            />{" "}
            I agree to {`Andela's`}{" "}
            <Link
              href="https://andela.com/andela-terms-conditions/"
              target="_blank"
              rel="noreferrer"
            >
              Terms & Conditions
            </Link>
          </ConditionText>
          <ConditionText>
            <input
              type="checkbox"
              onChange={e => setPolicyAccepted(e.currentTarget.checked)}
            />{" "}
            I understand that Andela will process my information in accordance
            with their{" "}
            <Link href="https://andela.com/privacy">Privacy Policy</Link>. I may
            withdraw my consent through unsubscribe links at any time.
          </ConditionText>
        </ConditionContainer>
      )}
      <ButtonContainer style={selectedTest === 1 ? { marginTop: 0 } : null}>
        <SecondaryButton onClick={goBack}>Back</SecondaryButton>
        <PrimarySignupButton onClick={submitAnswer}>Next</PrimarySignupButton>
      </ButtonContainer>
    </>
  )
}

export default Step4
