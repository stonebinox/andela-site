/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react"
import { ReactSVG } from "react-svg"
import styled from "styled-components"

import {
  InputContainer,
  ProblemsContainer,
  StepContainer,
  InputField,
  InputWrapper,
  DropdownField,
  ButtonContainer,
  PrimarySignupButton,
} from "../signup/signup.styles"
import { spacing } from "../../utils/spacing"
import {
  Highlight,
  StepQuestion,
  InputLabel,
} from "../talent-signup/talent-signup.styles"
import Marker from "../../images/marker.svg"
import Person1 from "../../images/person-1.svg"
import Envelope from "../../images/envelope.svg"
import { countries } from "../../utils/countries-alt"

const PersonSVG = styled(ReactSVG)`
  width: ${spacing.customSpacing("20px")};
  height: ${spacing.customSpacing("20px")};
  margin-top: -${spacing.customSpacing("6px")};
  margin-left: -${spacing.customSpacing("10px")};
  margin-right: ${spacing.QUARTER_BASE_SPACING};
`

const Step1 = ({ setFormStepAnswer, savedValue = null }) => {
  const [country, setCountry] = useState("")
  const [invalidCountry, setInvalidCountry] = useState(false)

  const [firstName, setFirstName] = useState("")
  const [invalidFirstName, setInvalidFirstName] = useState(false)

  const [lastName, setLastName] = useState("")
  const [invalidLastName, setInvalidLastName] = useState(false)

  const [email, setEmail] = useState("")
  const [invalidEmail, setInvalidEmail] = useState(false)

  const submitAnswer = () => {
    let valid = true
    setInvalidFirstName(false)
    setInvalidLastName(false)
    setInvalidEmail(false)
    setInvalidCountry(false)

    if (firstName.trim() === "") {
      valid = false
      setInvalidFirstName(true)
    }

    if (lastName.trim() === "") {
      valid = false
      setInvalidLastName(true)
    }

    if (
      email.trim() === "" ||
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
      valid = false
      setInvalidEmail(true)
    }

    if (
      country.trim() === "" ||
      country.trim() === "Select country ..." ||
      !countries.some(countryEntry => countryEntry === country)
    ) {
      valid = false
      setInvalidCountry(true)
    }

    if (!valid) {
      alert("Please enter valid content in the form")
      return
    }

    const finalAnswer = {
      FirstName: firstName,
      LastName: lastName,
      Country: country,
      Email: email,
    }

    setFormStepAnswer(finalAnswer)
  }

  useEffect(() => {
    setFirstName(savedValue?.firstName ?? "")
    setLastName(savedValue?.lastName ?? "")
    setEmail(savedValue?.email ?? "")
    setCountry(savedValue?.country ?? "Select country ...")
  }, [])

  return (
    <>
      <StepContainer>
        <StepQuestion>
          Becoming a <Highlight>part of our global community</Highlight> has
          never been easier
        </StepQuestion>
        <ProblemsContainer>
          <InputLabel>First name</InputLabel>
          <InputContainer invalid={invalidFirstName}>
            <PersonSVG src={Person1} />
            <InputField
              type="text"
              name="firstName"
              label="First name"
              value={firstName}
              onChange={e => setFirstName(e.currentTarget.value)}
            />
          </InputContainer>
          <InputLabel>Last name</InputLabel>
          <InputContainer invalid={invalidLastName}>
            <PersonSVG src={Person1} />
            <InputField
              type="text"
              name="lastName"
              label="Last name"
              value={lastName}
              onChange={e => setLastName(e.currentTarget.value)}
            />
          </InputContainer>
          <InputLabel>Email</InputLabel>
          <InputContainer invalid={invalidEmail}>
            <ReactSVG src={Envelope} />
            <InputField
              type="email"
              name="email"
              label="Email"
              value={email}
              onChange={e => setEmail(e.currentTarget.value)}
            />
          </InputContainer>
          <InputWrapper>
            <InputLabel>Country</InputLabel>
            <InputContainer invalid={invalidCountry}>
              <ReactSVG src={Marker} />
              <DropdownField
                name="country"
                onChange={e => setCountry(e.target.value)}
                value={country !== "" ? country : countries[0]}
              >
                {countries.map((countryName, index) => (
                  <option key={index} value={countryName}>
                    {countryName}
                  </option>
                ))}
              </DropdownField>
            </InputContainer>
          </InputWrapper>
        </ProblemsContainer>
      </StepContainer>
      <ButtonContainer>
        <PrimarySignupButton onClick={submitAnswer}>
          Get started
        </PrimarySignupButton>
      </ButtonContainer>
    </>
  )
}

export default Step1
