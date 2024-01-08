import React from "react"
import styled from "styled-components"

const StyledFigure = styled.figure`
  border: 2px dashed green;
  border-radius: 5px;
  padding: 1rem;
`


export default function Figure({imageURL, dateCaption}) {
  return (
    <StyledFigure>
      <img src={imageURL} />
      <figcaption>Picture of the date {dateCaption}</figcaption>
    </StyledFigure>
  )
}