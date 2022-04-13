/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react"

import {
  StepContainer,
  StepQuestion,
  ProblemsContainer,
  ProblemOption,
  ProblemSVG,
  ProblemAnswerContainer,
  ProblemAnswerTitle,
  ProblemAnswerDescription,
  ButtonContainer,
  SecondaryButton,
} from "./signup.styles"
import Magnify from "../../images/magnify.svg"
import Bolt from "../../images/bolt.svg"
import QuestionMark from "../../images/question-mark.svg"
import { getDataLayer } from "../../utils/api"

const options = [
  {
    key: 1,
    value: "Filling a role",
    description:
      "I need Developers, Designers, Project Managers, Product Managers",
    svg: <ProblemSVG src={Magnify} width="24" height="24" />,
  },
  {
    key: 2,
    value: "Help with a project",
    description: "Developers, Project Managers, Product Managers",
    svg: <ProblemSVG src={Bolt} width="18" height="32" />,
  },
  {
    key: 3,
    value: "Not sure, I need help",
    description:
      "With understanding different engineers skills, solutions to tech stack",
    svg: <ProblemSVG src={QuestionMark} width="18" height="28" />,
  },
]

const Step1 = ({
  setFormStepAnswer,
  selectedTest,
  goBack = null,
  savedValue = null,
}) => {
  const [problemToSolve, setProblemToSolve] = useState(null)
  const [selectedOption, setSelectedOption] = useState(null)

  const savedKey =
    options.find(option => option.value === savedValue)?.key ?? null

  const submitAnswer = () => {
    if (!problemToSolve) return

    const answer = {
      useCase: problemToSolve,
    }

    setFormStepAnswer(answer)
  }

  const selectAnswer = (answerText, index) => {
    setProblemToSolve(answerText)
    setSelectedOption(index)
  }

  useEffect(() => {
    const dataLayer = getDataLayer()

    dataLayer.push({
      event: "dataLayerEvent",
      event_category: "Sign Up Wizard",
      event_action: "sign_up",
      event_label: "Step 1",
    })

    if (savedKey) {
      setSelectedOption(savedKey)
    }
  }, [])

  useEffect(() => {
    submitAnswer()
  }, [problemToSolve])

  return (
    <>
      <StepContainer>
        <StepQuestion>What problems are you looking to solve?</StepQuestion>
        <ProblemsContainer>
          {options.map(option => (
            <ProblemOption
              selected={selectedOption === option.key}
              key={option.key}
              onClick={() => selectAnswer(option.value)}
            >
              {option.svg}
              <ProblemAnswerContainer>
                <ProblemAnswerTitle>{option.value}</ProblemAnswerTitle>
                <ProblemAnswerDescription>
                  {option.description}
                </ProblemAnswerDescription>
              </ProblemAnswerContainer>
            </ProblemOption>
          ))}
        </ProblemsContainer>
      </StepContainer>
      {selectedTest === 1 && (
        <ButtonContainer>
          <SecondaryButton onClick={goBack}>Back</SecondaryButton>
        </ButtonContainer>
      )}
    </>
  )
}

export default Step1
