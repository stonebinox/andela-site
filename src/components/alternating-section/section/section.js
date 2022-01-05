import React from "react"
import { spacing } from "../../../utils/spacing"

import { ContentContainer, ImageContainer, SectionContainer } from "./style"

export const Section = ({ section, index }) => {
  return (
    <SectionContainer index={index}>
      <ImageContainer>
        <img
          src={section.image}
          alt="Image"
          width="100%"
          style={{ marginBottom: 0 }}
        />
      </ImageContainer>
      <ContentContainer>
        <div style={{ margin: spacing.BASE_SPACING }}>{section.content}</div>
      </ContentContainer>
    </SectionContainer>
  )
}
