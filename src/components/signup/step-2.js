/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react"
import { ReactSVG } from "react-svg"
import {
  SecondaryButton,
  ButtonContainer,
  PeopleChoice,
  PeopleChoiceText,
  PeopleContainer,
  StepContainer,
  StepQuestion,
  PrimarySignupButton,
} from "./signup.styles"

import Person1 from "../../images/person-1.svg"
import Person2 from "../../images/person-2.svg"
import Person3 from "../../images/person-3.svg"
import Person4 from "../../images/person-4.svg"
import Person5 from "../../images/person-5.svg"
import { getDataLayer } from "../../utils/api"

const options = [
  {
    key: 1,
    value: "0 - 50",
    description: "Less than 50",
    svg: <ReactSVG src={Person1} width={35} height={35} />,
  },
  {
    key: 2,
    value: "51 - 499",
    description: "51 - 499",
    svg: <ReactSVG src={Person2} width={67} height={53} />,
  },
  {
    key: 3,
    value: "500 - 999",
    description: "500 - 999",
    svg: <ReactSVG src={Person3} width={67} height={55} />,
  },
  {
    key: 4,
    value: "1000 - 4999",
    description: "1000 - 4999",
    svg: <ReactSVG src={Person4} width={67} height={63} />,
  },
  {
    key: 5,
    value: "5,000+",
    description: "5,000+",
    svg: <ReactSVG src={Person5} width={84} height={48} />,
  },
]

const Step2 = ({
  setFormStepAnswer,
  goBack,
  savedValue = null,
  eventVariant,
}) => {
  const [answer, setAnswer] = useState(null)
  const [selectedOption, setSelectedOption] = useState(null)

  const savedKey =
    options.find(option => option.value === savedValue)?.key ?? null

  const selectAnswer = (answerText, index) => {
    setAnswer(answerText)
    setSelectedOption(index)
  }

  const isLastStep = () =>
    eventVariant === "B" &&
    (answer === "0 - 50" || answer === "1000 - 4999" || answer === "5,000+")

  const submitAnswer = () => {
    if (!answer) return

    const finalAnswer = {
      Employee_Range__c: answer,
    }

    const dataLayer = getDataLayer()
    dataLayer?.push({
      event: "dataLayerEvent",
      event_category: "Sign Up Wizard",
      event_action: "sign_up",
      event_label: `${eventVariant}: Step 2 - ${answer}`,
    })

    setFormStepAnswer(finalAnswer)
  }

  useEffect(() => {
    const dataLayer = getDataLayer()

    dataLayer.push({
      event: "dataLayerEvent",
      event_category: "Sign Up Wizard",
      event_action: "sign_up",
      event_label: `${eventVariant}: Step 2`,
    })

    if (savedKey) {
      setSelectedOption(savedKey)
    }
  }, [])

  useEffect(() => {
    if (!isLastStep()) {
      submitAnswer()
    }
  }, [answer])

  return (
    <>
      <StepContainer>
        <StepQuestion>How big is your company?</StepQuestion>
        <PeopleContainer>
          {options.map(option => (
            <PeopleChoice
              selected={selectedOption === option.key}
              onClick={() => selectAnswer(option.value, option.key)}
              key={option.key}
            >
              {option.svg}
              <PeopleChoiceText>{option.description}</PeopleChoiceText>
            </PeopleChoice>
          ))}
        </PeopleContainer>
      </StepContainer>
      <ButtonContainer>
        <SecondaryButton onClick={goBack}>Back</SecondaryButton>
        {isLastStep() && (
          <PrimarySignupButton onClick={submitAnswer}>
            Submit
          </PrimarySignupButton>
        )}
      </ButtonContainer>
    </>
  )
}

export default Step2
