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
} from "./signup.styles"
import Company from "../../images/company.svg"
import Envelope from "../../images/envelope.svg"
import Phone from "../../images/phone.svg"
import Globe from "../../images/globe.svg"
import Marker from "../../images/marker.svg"
import Person1 from "../../images/person-1.svg"
import Code from "../../images/code.svg"
import { getDataLayer } from "../../utils/api"

const PersonSVG = styled(ReactSVG)`
  width: ${spacing.customSpacing("20px")};
  height: ${spacing.customSpacing("20px")};
  margin-top: -${spacing.customSpacing("6px")};
  margin-left: -${spacing.customSpacing("10px")};
`

const countries = [
  "Select country ...",
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua & Deps",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Rep",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Costa Rica",
  "Croatia",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Ireland (Republic)",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea South",
  "Kosovo",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russian Federation",
  "Rwanda",
  "St Kitts & Nevis",
  "St Lucia",
  "Saint Vincent & the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome & Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad & Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
]

const Step5 = ({ setFormStepAnswer, selectedTest, goBack, savedValue }) => {
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
    if (country.trim() === "" || country.trim() === "Select country ...")
      valid = false

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

  useEffect(() => {
    const dataLayer = getDataLayer()

    dataLayer.push({
      event: "dataLayerEvent",
      event_category: "Sign Up Wizard",
      event_action: "sign_up",
      event_label: "Step FINAL",
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
              <InputContainer>
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
              <InputContainer>
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
          <InputContainer>
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
          <InputContainer>
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
              <InputContainer>
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
              <InputContainer>
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
              <InputContainer>
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
      <ButtonContainer>
        {selectedTest === 0 && (
          <SecondaryButton onClick={goBack}>Back</SecondaryButton>
        )}
        <PrimarySignupButton onClick={submitAnswer}>Next</PrimarySignupButton>
      </ButtonContainer>
    </>
  )
}

export default Step5
