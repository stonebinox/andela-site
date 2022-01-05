import React from "react"

import { SectionsContainer, AlternatingSectionsContainer } from "./styles"
import { Section } from "./section/section"
import { spacing } from "../../utils/spacing"

export const AlternatingSection = ({ sections }) => {
  return (
    <AlternatingSectionsContainer>
      <h3>Section title</h3>
      <SectionsContainer>
        {sections.map((section, index) => (
          <Section key={index} index={index} section={section} />
        ))}
      </SectionsContainer>
    </AlternatingSectionsContainer>
  )
}
