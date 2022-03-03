/* eslint-disable react/prop-types */
import React, { useState } from "react"

import {
  StepContainer,
  StepQuestion,
  ProblemsContainer,
  ProblemOption,
  ProblemSVG,
  ProblemAnswerContainer,
  ProblemAnswerTitle,
  ProblemAnswerDescription,
  PrimarySignupButton,
} from "./signup.styles"
import Magnify from "../../images/magnify.svg"
import Bolt from "../../images/bolt.svg"
import QuestionMark from "../../images/question-mark.svg"
import { spacing } from "../../utils/spacing"

export const Step1 = ({ setFormStepAnswer }) => {
  const [problemToSolve, setProblemToSolve] = useState(null)
  const [selectedOption, setSelectedOption] = useState(null)

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

  return (
    <>
      <StepContainer>
        <StepQuestion>What problems are you looking to solve?</StepQuestion>
        <ProblemsContainer>
          <ProblemOption
            selected={selectedOption === 1}
            onClick={() => selectAnswer("Filling a role", 1)}
          >
            <ProblemSVG src={Magnify} width="24" height="24" />
            <ProblemAnswerContainer>
              <ProblemAnswerTitle>Filling a role</ProblemAnswerTitle>
              <ProblemAnswerDescription>
                I need Developers, Designers, Project Managers, Product Managers
              </ProblemAnswerDescription>
            </ProblemAnswerContainer>
          </ProblemOption>
          <ProblemOption
            selected={selectedOption === 2}
            onClick={() => selectAnswer("Help with a project", 2)}
          >
            <ProblemSVG src={Bolt} width="18" height="32" />
            <ProblemAnswerContainer>
              <ProblemAnswerTitle>Help with a project</ProblemAnswerTitle>
              <ProblemAnswerDescription>
                Developers, Project Managers, Product Managers
              </ProblemAnswerDescription>
            </ProblemAnswerContainer>
          </ProblemOption>
          <ProblemOption
            selected={selectedOption === 3}
            onClick={() => selectAnswer("Not sure, I need help", 3)}
          >
            <ProblemSVG src={QuestionMark} width="18" height="28" />
            <ProblemAnswerContainer>
              <ProblemAnswerTitle>Not sure, I need help</ProblemAnswerTitle>
              <ProblemAnswerDescription>
                With understanding different engineers skills, solutions to tech
                stack
              </ProblemAnswerDescription>
            </ProblemAnswerContainer>
          </ProblemOption>
        </ProblemsContainer>
      </StepContainer>
      <PrimarySignupButton
        onClick={submitAnswer}
        style={{ marginTop: spacing.customSpacing("64px") }}
      >
        Get Started
      </PrimarySignupButton>
    </>
  )
}
