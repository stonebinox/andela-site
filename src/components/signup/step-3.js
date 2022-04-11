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
  PrimarySignupButton,
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

const Step3 = ({ setFormStepAnswer }) => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [answer, setAnswer] = useState(null)

  const submitAnswer = () => {
    if (!answer) return

    const finalAnswer = {
      interestedJobRoles: answer,
    }

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
      event_label: "Step 3",
    })
  }, [])

  return (
    <>
      <StepContainer>
        <StepQuestion>What type of role are you looking to fill?</StepQuestion>
        <ProblemsContainer>
          <ProblemOption
            selected={selectedOption === 1}
            onClick={() => selectAnswer("Engineer", 1)}
          >
            <SVGHolder>
              <ReactSVG src={Code} width={20} height={10} />
            </SVGHolder>
            <ProblemAnswerContainer>
              <ProblemAnswerTitle>Engineer</ProblemAnswerTitle>
            </ProblemAnswerContainer>
          </ProblemOption>
          <ProblemOption
            selected={selectedOption === 2}
            onClick={() => selectAnswer("Product Manager", 2)}
          >
            <SVGHolder>
              <ReactSVG src={PersonGear} width={20} height={17} />
            </SVGHolder>
            <ProblemAnswerContainer>
              <ProblemAnswerTitle>Product Manager</ProblemAnswerTitle>
            </ProblemAnswerContainer>
          </ProblemOption>
          <ProblemOption
            selected={selectedOption === 3}
            onClick={() => selectAnswer("Project Manager", 3)}
          >
            <SVGHolder>
              <ReactSVG src={People} width={31} height={16} />
            </SVGHolder>
            <ProblemAnswerContainer>
              <ProblemAnswerTitle>Project Manager</ProblemAnswerTitle>
            </ProblemAnswerContainer>
          </ProblemOption>
          <ProblemOption
            selected={selectedOption === 4}
            onClick={() => selectAnswer("I'm not sure, I need help", 4)}
          >
            <SVGHolder>
              <ReactSVG src={QuestionMark} width={11} height={17} />
            </SVGHolder>
            <ProblemAnswerContainer>
              <ProblemAnswerTitle>I'm not sure, I need help</ProblemAnswerTitle>
            </ProblemAnswerContainer>
          </ProblemOption>
        </ProblemsContainer>
      </StepContainer>
      <PrimarySignupButton
        style={{ marginTop: spacing.customSpacing("64px") }}
        onClick={submitAnswer}
      >
        Next
      </PrimarySignupButton>
    </>
  )
}

export default Step3
