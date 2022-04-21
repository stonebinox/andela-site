/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react"
import { ReactSVG } from "react-svg"
import styled from "styled-components"

import {
  StepContainer,
  StepQuestion,
  ProblemsContainer,
  ProblemOption,
  ProblemAnswerContainer,
  ProblemAnswerTitle,
  ButtonContainer,
  SecondaryButton,
} from "./signup.styles"
import Code from "../../images/code.svg"
import PersonGear from "../../images/person-gear.svg"
import People from "../../images/people.svg"
import QuestionMark from "../../images/question-mark.svg"
import { spacing } from "../../utils/spacing"
import { getDataLayer } from "../../utils/api"

const SVGHolder = styled.div`
  width: ${spacing.customSpacing("31px")};
  height: auto;
  text-align: center;
`

const options = [
  {
    key: 1,
    value: "Engineer",
    svg: <ReactSVG src={Code} width={20} height={10} />,
  },
  {
    key: 2,
    value: "Product Manager",
    svg: <ReactSVG src={PersonGear} width={20} height={17} />,
  },
  {
    key: 3,
    value: "Project Manager",
    svg: <ReactSVG src={People} width={31} height={16} />,
  },
  {
    key: 4,
    value: "I'm not sure, I need help",
    svg: <ReactSVG src={QuestionMark} width={11} height={17} />,
  },
]

const Step3 = ({ setFormStepAnswer, goBack, savedValue, eventVariant }) => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [answer, setAnswer] = useState(null)

  const savedKey =
    options.find(option => option.value === savedValue)?.key ?? null

  const submitAnswer = () => {
    if (!answer) return

    const finalAnswer = {
      interestedJobRoles: answer,
    }

    const dataLayer = getDataLayer()
    dataLayer?.push({
      event: "dataLayerEvent",
      event_category: "Sign Up Wizard",
      event_action: "sign_up",
      event_label: `${eventVariant}: Step 3 - ${answer}`,
    })

    setFormStepAnswer(finalAnswer)
  }

  const selectAnswer = (answerText, index) => {
    setAnswer(answerText)
    setSelectedOption(index)
  }

  useEffect(() => {
    const dataLayer = getDataLayer()

    dataLayer.push({
      event: "dataLayerEvent",
      event_category: "Sign Up Wizard",
      event_action: "sign_up",
      event_label: `${eventVariant}: Step 3`,
    })

    if (savedKey) {
      setSelectedOption(savedKey)
    }
  }, [])

  useEffect(() => {
    submitAnswer()
  }, [answer])

  return (
    <>
      <StepContainer>
        <StepQuestion>What type of role are you looking to fill?</StepQuestion>
        <ProblemsContainer>
          {options.map(option => (
            <ProblemOption
              selected={selectedOption === option.key}
              onClick={() => selectAnswer(option.value, option.key)}
              key={option.key}
            >
              <SVGHolder>{option.svg}</SVGHolder>
              <ProblemAnswerContainer>
                <ProblemAnswerTitle>{option.value}</ProblemAnswerTitle>
              </ProblemAnswerContainer>
            </ProblemOption>
          ))}
        </ProblemsContainer>
      </StepContainer>
      <ButtonContainer>
        <SecondaryButton onClick={goBack}>Back</SecondaryButton>
      </ButtonContainer>
    </>
  )
}

export default Step3
