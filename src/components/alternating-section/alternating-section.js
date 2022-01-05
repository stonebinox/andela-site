import React from "react"

import { SectionsContainer } from "./styles"
import { Section } from "./section/section"
import { spacing } from "../../utils/spacing"

export const AlternatingSection = ({ sections }) => {
  return (
    <div
      style={{
        marginTop: spacing.DOUBLE_BASE_SPACING,
        marginBottom: spacing.DOUBLE_BASE_SPACING,
      }}
    >
      <h3>Section title</h3>
      <SectionsContainer>
        {sections.map((section, index) => (
          <Section key={index} index={index} section={section} />
        ))}
      </SectionsContainer>
    </div>
  )
}
