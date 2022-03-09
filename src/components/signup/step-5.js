/* eslint-disable react/prop-types */
import React, { useState } from "react"
import { ReactSVG } from "react-svg"

import { spacing } from "../../utils/spacing"
import {
  InputContainer,
  InputField,
  InputLabel,
  InputRow,
  InputWrapper,
  PrimarySignupButton,
  ProblemsContainer,
  StepContainer,
  StepQuestion,
} from "./signup.styles"
import Company from "../../images/company.svg"
import Envelope from "../../images/envelope.svg"
import Phone from "../../images/phone.svg"
import Globe from "../../images/globe.svg"
import Marker from "../../images/marker.svg"
import Person1 from "../../images/person-1.svg"
import Code from "../../images/code.svg"

const Step5 = ({ setFormStepAnswer }) => {
  const [company, setCompany] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [companyURL, setCompanyURL] = useState("")
  const [country, setCountry] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [title, setTitle] = useState("")

  const submitAnswer = () => {
    let valid = true

    if (firstName.trim() === "") valid = false
    if (lastName.trim() === "") valid = false
    if (title.trim() === "") valid = false
    if (company.trim() === "") valid = false
    if (
      email.trim() === "" ||
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
    )
      valid = false
    if (phone.trim() === "") valid = false
    if (country.trim() === "") valid = false

    if (!valid) {
      alert("Please enter valid content in the form.")
      return
    }

    const finalAnswer = {
      Company: company,
      Email: email,
      Phone: phone,
      Country: country,
      FirstName: firstName,
      LastName: lastName,
      Title: title,
      Company_Website__c: companyURL,
    }

    setFormStepAnswer(finalAnswer)
  }

  return (
    <>
      <StepContainer>
        <StepQuestion>Get in touch with Andela today</StepQuestion>
        <ProblemsContainer>
          <InputRow style={{ marginBottom: spacing.BASE_SPACING }}>
            <InputWrapper
              style={{ marginRight: spacing.customSpacing("12px") }}
            >
              <InputLabel>First name</InputLabel>
              <InputContainer>
                <ReactSVG src={Person1} width="20" />
                <InputField
                  type="text"
                  name="firstName"
                  onChange={e => setFirstName(e.target.value)}
                />
              </InputContainer>
            </InputWrapper>
            <InputWrapper style={{ marginLeft: spacing.customSpacing("12px") }}>
              <InputLabel>Last name</InputLabel>
              <InputContainer>
                <ReactSVG src={Person1} width={18} height={18} />
                <InputField
                  type="text"
                  name="lastName"
                  onChange={e => setLastName(e.target.value)}
                />
              </InputContainer>
            </InputWrapper>
          </InputRow>
          <InputLabel>Your job title</InputLabel>
          <InputContainer>
            <ReactSVG src={Code} width={18} height={18} />
            <InputField
              type="text"
              name="title"
              onChange={e => setTitle(e.target.value)}
            />
          </InputContainer>
          <InputLabel style={{ marginTop: spacing.BASE_SPACING }}>
            Company name
          </InputLabel>
          <InputContainer>
            <ReactSVG src={Company} width={18} height={18} />
            <InputField
              type="text"
              name="company"
              onChange={e => setCompany(e.target.value)}
            />
          </InputContainer>
          <InputRow>
            <InputWrapper
              style={{ marginRight: spacing.customSpacing("12px") }}
            >
              <InputLabel>Email Address</InputLabel>
              <InputContainer>
                <ReactSVG src={Envelope} width={20} height={16} />
                <InputField
                  type="email"
                  name="email"
                  onChange={e => setEmail(e.target.value)}
                />
              </InputContainer>
            </InputWrapper>
            <InputWrapper style={{ marginLeft: spacing.customSpacing("12px") }}>
              <InputLabel>Phone</InputLabel>
              <InputContainer>
                <ReactSVG src={Phone} width={18} height={18} />
                <InputField
                  type="tel"
                  name="phone"
                  onChange={e => setPhone(e.target.value)}
                />
              </InputContainer>
            </InputWrapper>
          </InputRow>

          <InputRow>
            <InputWrapper
              style={{ marginRight: spacing.customSpacing("12px") }}
            >
              <InputLabel>Company URL (Optional)</InputLabel>
              <InputContainer>
                <ReactSVG src={Globe} width={20} height={20} />
                <InputField
                  type="url"
                  name="company_url"
                  onChange={e => setCompanyURL(e.target.value)}
                />
              </InputContainer>
            </InputWrapper>
            <InputWrapper style={{ marginLeft: spacing.customSpacing("12px") }}>
              <InputLabel>Country</InputLabel>
              <InputContainer>
                <ReactSVG src={Marker} width={16} height={20} />
                <InputField
                  type="text"
                  name="country"
                  onChange={e => setCountry(e.target.value)}
                />
              </InputContainer>
            </InputWrapper>
          </InputRow>
        </ProblemsContainer>
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

export default Step5
