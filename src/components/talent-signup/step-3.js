/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react"
import { ReactSVG } from "react-svg"

import {
  ButtonContainer,
  ConditionContainer,
  ConditionText,
  DropdownField,
  InputContainer,
  InputField,
  Link,
  PrimarySignupButton,
  ProblemsContainer,
  SecondaryButton,
  StepContainer,
} from "../signup/signup.styles"
import { InputLabel, StepQuestion } from "./talent-signup.styles"
import Code from "../../images/code.svg"
import People from "../../images/people.svg"
import PersonGear from "../../images/person-gear.svg"
import { getDataLayer, getSendSafely } from "../../utils/api"
import { greenBlack, greyWhite } from "../../utils/colors"
import { spacing } from "../../utils/spacing"

const options = [
  "Native",
  "Advanced C1/C2",
  "Intermediate B1/B2",
  "Beginner A1/A2",
]

const yearsOptions = [
  "Associate (0-3 yrs professional experience)",
  "Mid Level (3-8 yrs professional experience)",
  "Senior (8-12 yrs professional experience)",
  "Principal (12+ yrs professional experience)",
]

const Step3 = ({ goBack, setFormStepAnswer }) => {
  const [termsAccepted, setTermsAccepted] = useState(false)
  const [policyAccepted, setPolicyAccepted] = useState(false)
  const [englishLevel, setEnglishLevel] = useState("Select...")
  const [invalidEnglishLevel, setInvalidEnglishLevel] = useState(false)

  const [referrer, setReferrer] = useState("")
  const [totalExperience, setTotalExperience] = useState("Select...")
  const [invalidExperience, setInvalidExperience] = useState(false)
  const [sendSafelyWidget, setSendSafelyWidget] = useState(null)
  const [resumeUrl, setResumeUrl] = useState("")

  const dataLayer = getDataLayer()

  const isFileAttached = () =>
    sendSafelyWidget?.nbrOfFilesAttached > 0 && resumeUrl !== ""

  const finalizeUpload = () => {
    if (sendSafelyWidget?.nbrOfFilesAttached <= 0) {
      alert("Please attach your resume before submitting.")
      return
    }

    sendSafelyWidget?.finalizePackage(url => {
      setResumeUrl(url)
    })
  }

  const handleGoBack = () => {
    if (
      confirm(
        "You will lose information selected on this screen if you go back. Do you wish to proceed?"
      )
    ) {
      goBack()
    }
  }

  const submitAnswer = () => {
    setInvalidEnglishLevel(false)
    setInvalidExperience(false)

    if (englishLevel === "Select...") {
      alert("Please select your English proficiency level.")
      setInvalidEnglishLevel(true)
      return
    }

    if (totalExperience === "Select...") {
      alert("Please select your total work experience.")
      setInvalidExperience(true)
      return
    }

    if (!policyAccepted || !termsAccepted) {
      alert("Please check the policy and terms checkboxes.")
      return
    }

    dataLayer?.push(
      {
        event: "dataLayerEvent",
        event_category: "Sign Up Wizard",
        event_action: "sign_up",
        event_label: `Step 3 - Eng ${englishLevel}`,
      },
      {
        event: "dataLayerEvent",
        event_category: "Sign Up Wizard",
        event_action: "sign_up",
        event_label: `Step 3 - Exp ${totalExperience}`,
      }
    )

    setFormStepAnswer({
      englishProficiency: englishLevel,
      tLReferredBy: referrer,
      tLSeniorityLevel: totalExperience,
      tLDropzoneLink: resumeUrl,
    })
  }

  const loadUploader = () => {
    const sendSafely = getSendSafely()

    if (!sendSafely) {
      setTimeout(() => loadUploader(), 500)
      return
    }

    const widget = new sendSafely(
      "Bk7y8vV8NhXyfKkvEfjClo9dqC4ABHjKTKVaztGXf8k",
      window?.jQuery("#dropzone")
    )

    widget.disableAutoSubmit = true
    widget.DROP_TEXT_COLOR = greenBlack
    widget.logoPath =
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
    widget.DROPZONE_STYLE = `
      border: 1px solid ${greyWhite};
      border-radius: ${spacing.QUARTER_BASE_SPACING};
      margin-top: ${spacing.customSpacing("12px")};
      font-family: sans-serif;
      font-size: 16px;`

    widget.initialize()

    setSendSafelyWidget(widget)
  }

  useEffect(() => {
    if (isFileAttached()) {
      submitAnswer()
    }
  }, [resumeUrl])

  useEffect(() => {
    loadUploader()
  }, [])

  return (
    <>
      <StepContainer>
        <StepQuestion>More about you</StepQuestion>
        <ProblemsContainer>
          <InputLabel>English proficiency</InputLabel>
          <InputContainer invalid={invalidEnglishLevel}>
            <ReactSVG src={Code} />
            <DropdownField
              name="english"
              onChange={e => setEnglishLevel(e.currentTarget.value)}
              value={englishLevel}
            >
              <option value="Select...">Select...</option>
              {options.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </DropdownField>
          </InputContainer>
          <InputLabel>Total years of work experience</InputLabel>
          <InputContainer invalid={invalidExperience}>
            <ReactSVG src={PersonGear} />
            <DropdownField
              name="totalExperience"
              onChange={e => setTotalExperience(e.currentTarget.value)}
              value={totalExperience}
            >
              <option value="Select...">Select...</option>
              {yearsOptions.map(experience => (
                <option key={experience} value={experience}>
                  {experience}
                </option>
              ))}
            </DropdownField>
          </InputContainer>
          <InputLabel>Referred by (first and last name)</InputLabel>
          <InputContainer>
            <ReactSVG src={People} />
            <InputField
              type="text"
              name="referrer"
              value={referrer}
              onChange={e => setReferrer(e.currentTarget.value)}
            />
          </InputContainer>
          <InputLabel>Upload your resume</InputLabel>
          <div id="dropzone" />
        </ProblemsContainer>
      </StepContainer>
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
          <Link
            href="https://andela.com/privacy"
            target="_blank"
            rel="noreferrer"
          >
            Privacy Policy
          </Link>
          . I may withdraw my consent through unsubscribe links at any time.
        </ConditionText>
      </ConditionContainer>
      <ButtonContainer>
        <SecondaryButton onClick={handleGoBack}>Back</SecondaryButton>
        <PrimarySignupButton onClick={finalizeUpload}>
          Submit
        </PrimarySignupButton>
      </ButtonContainer>
    </>
  )
}

export default Step3
