/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react"
import { ReactSVG } from "react-svg"
import styled from "styled-components"

import { spacing } from "../../utils/spacing"
import {
  SecondaryButton,
  DropdownField,
  InputContainer,
  InputField,
  InputLabel,
  InputRow,
  InputWrapper,
  PrimarySignupButton,
  ProblemsContainer,
  StepContainer,
  StepQuestion,
  ButtonContainer,
  ConditionContainer,
  Link,
  ConditionText,
} from "./signup.styles"
import Company from "../../images/company.svg"
import Envelope from "../../images/envelope.svg"
import Phone from "../../images/phone.svg"
import Globe from "../../images/globe.svg"
import Marker from "../../images/marker.svg"
import Person1 from "../../images/person-1.svg"
import Code from "../../images/code.svg"
import { getDataLayer } from "../../utils/api"
import { countries } from "../../utils/countries"

const PersonSVG = styled(ReactSVG)`
  width: ${spacing.customSpacing("20px")};
  height: ${spacing.customSpacing("20px")};
  margin-top: -${spacing.customSpacing("6px")};
  margin-left: -${spacing.customSpacing("10px")};
`
const invalidEmailDomains = ["gmail", "yahoo", "hotmail", "outlook", "icloud"]

const Step5 = ({
  setFormStepAnswer,
  selectedTest,
  goBack,
  savedValue,
  eventVariant,
}) => {
  const [company, setCompany] = useState("")
  const [companyInvalid, setCompanyInvalid] = useState(false)

  const [email, setEmail] = useState("")
  const [emailInvalid, setEmailInvalid] = useState(false)

  const [phone, setPhone] = useState("")
  const [phoneInvalid, setPhoneInvalid] = useState(false)

  const [companyURL, setCompanyURL] = useState("")
  const [country, setCountry] = useState("")
  const [countryInvalid, setCountryInvalid] = useState(false)

  const [firstName, setFirstName] = useState("")
  const [firstNameInvalid, setFirstNameInvalid] = useState(false)

  const [lastName, setLastName] = useState("")
  const [lastNameInvalid, setLastNameInvalid] = useState(false)

  const [title, setTitle] = useState("")
  const [titleInvalid, setTitleInvalid] = useState(false)

  const [termsAccepted, setTermsAccepted] = useState(false)
  const [policyAccepted, setPolicyAccepted] = useState(false)

  const submitAnswer = () => {
    if (firstName.trim() === "") {
      setFirstNameInvalid(true)
    } else {
      setFirstNameInvalid(false)
    }

    if (lastName.trim() === "") {
      setLastNameInvalid(true)
    } else {
      setLastNameInvalid(false)
    }

    if (title.trim() === "") {
      setTitleInvalid(true)
    } else {
      setTitleInvalid(false)
    }

    if (company.trim() === "") {
      setCompanyInvalid(true)
    } else {
      setCompanyInvalid(false)
    }

    if (
      email.trim() === "" ||
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)
    ) {
      setEmailInvalid(true)
    } else {
      setEmailInvalid(false)
    }

    if (phone.trim() === "") {
      setPhoneInvalid(true)
    } else {
      setPhoneInvalid(false)
    }

    if (country.trim() === "" || country.trim() === "Select country ...") {
      setCountryInvalid(true)
      return
    }

    setCountryInvalid(false)

    const emailFragments = email.split("@")
    const domainSection = emailFragments[1]
    const domainFragments = domainSection.split(".")
    const emailDomain = domainFragments[0].toLowerCase()

    if (invalidEmailDomains.includes(emailDomain)) {
      alert(
        "Please ensure the email address entered is a company email address."
      )
      setEmailInvalid(true)
      return
    } else {
      setEmailInvalid(false)
    }

    if (
      firstNameInvalid ||
      lastNameInvalid ||
      titleInvalid ||
      companyInvalid ||
      emailInvalid ||
      phoneInvalid ||
      countryInvalid
    ) {
      return
    }

    let valid = true

    if (!termsAccepted || !policyAccepted) valid = false

    if (!valid) {
      alert(
        "Please check the checkboxes for the Privacy Policy and Terms and Conditions."
      )
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

  useEffect(() => {
    const dataLayer = getDataLayer()

    dataLayer.push({
      event: "dataLayerEvent",
      event_category: "Sign Up Wizard",
      event_action: "sign_up",
      event_label: `${eventVariant}: Step FINAL`,
    })

    setCompany(savedValue?.company ?? "")
    setEmail(savedValue?.email ?? "")
    setPhone(savedValue?.phone ?? "")
    setCountry(savedValue?.country ?? "Select country ...")
    setFirstName(savedValue?.firstName ?? "")
    setLastName(savedValue?.lastName ?? "")
    setTitle(savedValue?.title ?? "")
    setCompanyURL(savedValue?.companyURL ?? "")
  }, [])

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
              <InputContainer invalid={firstNameInvalid}>
                <PersonSVG src={Person1} />
                <InputField
                  type="text"
                  name="firstName"
                  onChange={e => setFirstName(e.target.value)}
                  label="First name"
                  value={firstName}
                />
              </InputContainer>
            </InputWrapper>
            <InputWrapper style={{ marginLeft: spacing.customSpacing("12px") }}>
              <InputLabel>Last name</InputLabel>
              <InputContainer invalid={lastNameInvalid}>
                <PersonSVG src={Person1} />
                <InputField
                  type="text"
                  name="lastName"
                  onChange={e => setLastName(e.target.value)}
                  label="Last name"
                  value={lastName}
                />
              </InputContainer>
            </InputWrapper>
          </InputRow>
          <InputLabel>Your job title</InputLabel>
          <InputContainer invalid={titleInvalid}>
            <ReactSVG src={Code} />
            <InputField
              type="text"
              name="title"
              onChange={e => setTitle(e.target.value)}
              value={title}
            />
          </InputContainer>
          <InputLabel style={{ marginTop: spacing.BASE_SPACING }}>
            Company name
          </InputLabel>
          <InputContainer invalid={companyInvalid}>
            <ReactSVG src={Company} />
            <InputField
              type="text"
              name="company"
              onChange={e => setCompany(e.target.value)}
              label="Company"
              value={company}
            />
          </InputContainer>
          <InputRow>
            <InputWrapper
              style={{ marginRight: spacing.customSpacing("12px") }}
            >
              <InputLabel>Email Address</InputLabel>
              <InputContainer invalid={emailInvalid}>
                <ReactSVG src={Envelope} />
                <InputField
                  type="email"
                  name="email"
                  onChange={e => setEmail(e.target.value)}
                  label="Email"
                  value={email}
                />
              </InputContainer>
            </InputWrapper>
            <InputWrapper style={{ marginLeft: spacing.customSpacing("12px") }}>
              <InputLabel>Phone</InputLabel>
              <InputContainer invalid={phoneInvalid}>
                <ReactSVG src={Phone} />
                <InputField
                  type="tel"
                  name="phone"
                  onChange={e => setPhone(e.target.value)}
                  label="Phone"
                  value={phone}
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
                <ReactSVG src={Globe} />
                <InputField
                  type="url"
                  name="company_url"
                  onChange={e => setCompanyURL(e.target.value)}
                  label="Company URL"
                  value={companyURL}
                />
              </InputContainer>
            </InputWrapper>
            <InputWrapper style={{ marginLeft: spacing.customSpacing("12px") }}>
              <InputLabel>Country</InputLabel>
              <InputContainer invalid={countryInvalid}>
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
          </InputRow>
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
      <ButtonContainer style={{ marginTop: 0 }}>
        {selectedTest === 0 && (
          <SecondaryButton onClick={goBack}>Back</SecondaryButton>
        )}
        <PrimarySignupButton onClick={submitAnswer}>
          {selectedTest === 0 ? "Submit" : "Next"}
        </PrimarySignupButton>
      </ButtonContainer>
    </>
  )
}

export default Step5
