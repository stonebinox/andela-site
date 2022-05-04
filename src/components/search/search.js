/* eslint-disable react/prop-types */
import React from "react"
import { ReactSVG } from "react-svg"

import { InputContainer, InputField } from "../signup/signup.styles"
import Magnify from "../../images/magnify.svg"
import { searchLocalSkills, searchSkills } from "../../utils/api"

const Search = ({ selected = [], setSearchList, local = false }) => {
  const getResults = text => {
    if (text.trim().length === 0) {
      setSearchList?.([])
      return
    }

    const selectedSkills = selected.slice()

    if (!local) {
      searchSkills(text)
        .then(response => response.json())
        .then(data => {
          const results = []

          data.forEach(skill => {
            const { skill_name } = skill

            if (!selectedSkills.some(s => s.skill_name === skill_name)) {
              results.push(skill)
            }
          })

          setSearchList?.(results)
        })
    } else {
      const results = searchLocalSkills(text)
      setSearchList?.(results)
    }
  }

  return (
    <InputContainer>
      <ReactSVG src={Magnify} width={15} height={15} />
      <InputField
        name="skill-search"
        type="search"
        placeholder="Search for skills"
        onChange={e => getResults(e.currentTarget.value)}
        autoComplete="off"
      />
    </InputContainer>
  )
}

export default Search
