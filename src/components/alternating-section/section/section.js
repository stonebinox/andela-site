import React from "react"

import { ContentContainer, ImageContainer, SectionContainer } from "./style"

export const Section = ({ section, index }) => {
  return (
    <SectionContainer index={index}>
      <ImageContainer>
        <img src={section.image} alt="Image" width="100%" />
      </ImageContainer>
      <ContentContainer>{section.content}</ContentContainer>
    </SectionContainer>
  )
}
