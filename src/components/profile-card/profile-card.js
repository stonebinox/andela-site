/* eslint-disable react/prop-types */
import React from "react"
import styled from "styled-components"

import { spacing } from "../../utils/spacing"
import { white, darkTeal, teal, orange, green } from "../../utils/colors"

const Card = styled.div`
  max-width: ${spacing.customSpacing("386px")};
  height: auto;
  border-radius: ${spacing.customSpacing("10px")};
  background-color: ${white};
  flex: 1;
  padding: ${spacing.BASE_SPACING};
  margin-right: ${spacing.BASE_SPACING};
  margin-left: ${spacing.BASE_SPACING};
  margin-bottom: ${spacing.BASE_SPACING};
  margin-top: ${spacing.BASE_SPACING};
  box-shadow: 0 1px 2px rgb(0 0 0 / 2%), 0 2px 4px rgb(0 0 0 / 2%),
    0 4px 8px rgb(0 0 0 / 2%), 0 8px 16px rgb(0 0 0 / 2%),
    0 16px 32px rgb(0 0 0 / 2%), 0 32px 64px rgb(0 0 0 / 2%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: ${darkTeal};
`

const NameText = styled.div`
  font-size: 28px;
  margin-bottom: ${spacing.QUARTER_BASE_SPACING};
  font-weight: bold;
  font-family: sans-serif;
`

const LocationText = styled.div`
  font-size: 13px;
  font-family: sans-serif;
  color: ${teal};
  margin-bottom: ${spacing.BASE_SPACING};
`

const Label = styled.div`
  font-size: 13px;
  font-weight: bold;
  margin-bottom: ${spacing.QUARTER_BASE_SPACING};
  font-family: sans-serif;
`

const Bio = styled(LocationText)`
  color: ${darkTeal};
  font-size: 15px;
`

const SkillHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: ${spacing.BASE_SPACING};
`

const PrimaryPill = styled.div`
  border-radius: ${spacing.BASE_SPACING};
  padding: 0 ${spacing.BASE_SPACING};
  background-color: ${orange};
  margin-right: ${spacing.HALF_BASE_SPACING};
`

const SecondaryPill = styled(PrimaryPill)`
  background-color: ${green};
`

export const ProfileCard = ({ profile }) => {
  const {
    name,
    location,
    bio,
    primarySkills = [],
    secondarySkills = [],
  } = profile

  return (
    <Card>
      <NameText>{name}</NameText>
      <LocationText>{location}</LocationText>
      <hr />
      <Label>About</Label>
      <Bio>{bio}</Bio>
      <hr />
      <Label>Primary Skills</Label>
      <SkillHolder>
        {primarySkills.map((skill, key) => (
          <PrimaryPill key={key}>{skill}</PrimaryPill>
        ))}
      </SkillHolder>
      <hr />
      <Label>Secondary Skills</Label>
      <SkillHolder>
        {secondarySkills.map((skill, key) => (
          <SecondaryPill key={key}>{skill}</SecondaryPill>
        ))}
      </SkillHolder>
    </Card>
  )
}
