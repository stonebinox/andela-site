/* eslint-disable react/prop-types */
import React from "react"

import { PageContainer } from "../../utils/common.styles"
import Logo from "../../images/logo.jpg"

const validCodes = [
  {
    code: "P01389784",
    name: "THAYATH ABDUL HADI",
    age: "71 Y",
    gender: "M",
    passport: "V6639304",
    reportedOn: "24/02/2022 6:00 AM",
    testName: "COVID 19 SARS CoV 2 Detection by Qualitative Real Time PCR",
    result: "POSITIVE",
    type: "Nasopharyngeal/Oropharyngeal swab",
    method: "RTPCR",
  },
  {
    code: "P01389785",
    name: "VADAKKE PURAYIL BEEFATHU",
    age: "58 Y",
    gender: "F",
    passport: "N0480672",
    reportedOn: "24/02/2022 6:00 AM",
    testName: "COVID 19 SARS CoV 2 Detection by Qualitative Real Time PCR",
    result: "POSITIVE",
    type: "Nasopharyngeal/Oropharyngeal swab",
    method: "RTPCR",
  },
]

const ScanPage = ({ params }) => {
  const { code } = params
  const patient = validCodes.find(patient => patient.code === code)

  return (
    <PageContainer>
      <img src={Logo} width="300" />
      <hr />
      {!patient ? (
        <h3>Patient details not found</h3>
      ) : (
        <div
          style={{ width: "100%", padding: "16px", fontFamily: "sans-serif" }}
        >
          <strong>Patient ID:</strong> {patient.code}
          <br />
          <strong>Patient name:</strong> {patient.name}
          <br />
          <strong>Age / Gender:</strong> {patient.age} / {patient.gender}
          <br />
          <strong>Passport number:</strong> {patient.passport}
          <br />
          <strong>Reported on:</strong> {patient.reportedOn}
          <br />
          <strong>Test name:</strong> {patient.testName}
          <br />
          <strong>Result:</strong> {patient.result}
          <br />
          <strong>Test type:</strong> {patient.result}
          <br />
          <strong>Method:</strong> {patient.method}
        </div>
      )}
    </PageContainer>
  )
}

export default ScanPage
