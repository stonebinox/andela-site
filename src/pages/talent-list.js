import React from "react"
import styled from "styled-components"

import { spacing } from "../utils/spacing"
import { ProfileCard } from "../components/profile-card/profile-card"

const TalentContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

const talent = [
  {
    id: 1,
    name: "Raphael Ferreira",
    location: "Goiânia, Goiás, Brazil",
    bio: "Accomplished React Native developer, I am a Software Engineer with 7+ years of experience working with Javascript, Node JS, React, React Native, Docker, a little of CI/CD, relational and NoSQL databases, Heroku and AWS. I'm constantly studying and improving my tech capabilities. Currently, majority of my experience is with Javascript and NodeJS.",
    primarySkills: ["JavaScript", "JSON", "React.js"],
    secondarySkills: ["REST", "Redux", "Git"],
  },
  {
    id: 2,
    name: "Benjamin Faleye",
    location: "Goiânia, Goiás, Brazil",
    bio: "Accomplished React Native developer, I am a Software Engineer with 7+ years of experience working with Javascript, Node JS, React, React Native, Docker, a little of CI/CD, relational and NoSQL databases, Heroku and AWS. I'm constantly studying and improving my tech capabilities. Currently, majority of my experience is with Javascript and NodeJS.",
    primarySkills: ["JavaScript", "JSON", "React.js"],
    secondarySkills: ["REST", "Redux", "Git"],
  },
  {
    id: 3,
    name: "Raphael Ferreira",
    location: "Goiânia, Goiás, Brazil",
    bio: "Accomplished React Native developer, I am a Software Engineer with 7+ years of experience working with Javascript, Node JS, React, React Native, Docker, a little of CI/CD, relational and NoSQL databases, Heroku and AWS. I'm constantly studying and improving my tech capabilities. Currently, majority of my experience is with Javascript and NodeJS.",
    primarySkills: ["JavaScript", "JSON", "React.js"],
    secondarySkills: ["REST", "Redux", "Git"],
  },
  {
    id: 4,
    name: "Raphael Ferreira",
    location: "Goiânia, Goiás, Brazil",
    bio: "Accomplished React Native developer, I am a Software Engineer with 7+ years of experience working with Javascript, Node JS, React, React Native, Docker, a little of CI/CD, relational and NoSQL databases, Heroku and AWS. I'm constantly studying and improving my tech capabilities. Currently, majority of my experience is with Javascript and NodeJS.",
    primarySkills: ["JavaScript", "JSON", "React.js"],
    secondarySkills: ["REST", "Redux", "Git"],
  },
  {
    id: 5,
    name: "Raphael Ferreira",
    location: "Goiânia, Goiás, Brazil",
    bio: "Accomplished React Native developer, I am a Software Engineer with 7+ years of experience working with Javascript, Node JS, React, React Native, Docker, a little of CI/CD, relational and NoSQL databases, Heroku and AWS. I'm constantly studying and improving my tech capabilities. Currently, majority of my experience is with Javascript and NodeJS.",
    primarySkills: ["JavaScript", "JSON", "React.js"],
    secondarySkills: ["REST", "Redux", "Git"],
  },
  {
    id: 6,
    name: "Raphael Ferreira",
    location: "Goiânia, Goiás, Brazil",
    bio: "Accomplished React Native developer, I am a Software Engineer with 7+ years of experience working with Javascript, Node JS, React, React Native, Docker, a little of CI/CD, relational and NoSQL databases, Heroku and AWS. I'm constantly studying and improving my tech capabilities. Currently, majority of my experience is with Javascript and NodeJS.",
    primarySkills: ["JavaScript", "JSON", "React.js"],
    secondarySkills: ["REST", "Redux", "Git"],
  },
  {
    id: 7,
    name: "Raphael Ferreira",
    location: "Goiânia, Goiás, Brazil",
    bio: "Accomplished React Native developer, I am a Software Engineer with 7+ years of experience working with Javascript, Node JS, React, React Native, Docker, a little of CI/CD, relational and NoSQL databases, Heroku and AWS. I'm constantly studying and improving my tech capabilities. Currently, majority of my experience is with Javascript and NodeJS.",
    primarySkills: ["JavaScript", "JSON", "React.js"],
    secondarySkills: ["REST", "Redux", "Git"],
  },
  {
    id: 8,
    name: "Raphael Ferreira",
    location: "Goiânia, Goiás, Brazil",
    bio: "Accomplished React Native developer, I am a Software Engineer with 7+ years of experience working with Javascript, Node JS, React, React Native, Docker, a little of CI/CD, relational and NoSQL databases, Heroku and AWS. I'm constantly studying and improving my tech capabilities. Currently, majority of my experience is with Javascript and NodeJS.",
    primarySkills: ["JavaScript", "JSON", "React.js"],
    secondarySkills: ["REST", "Redux", "Git"],
  },
]

const TalentList = () => {
  return (
    <TalentContainer>
      {talent.map((person, index) => (
        <ProfileCard profile={person} key={index} />
      ))}
    </TalentContainer>
  )
}

export default TalentList
