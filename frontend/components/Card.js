import React from "react"
import Figure from "./Figure"
import styled from "styled-components"

const StyledCard = styled.div`
  border: 1px solid blue;
  border-radius: 12px;
  padding: 2rem;

  h2 {
    color: ${pr => pr.$color};
    margin: 0 0 1rem 0;
    font-size: 2.5em;
  }

  p {
    margin: 0 0 1.5rem 0;

    &::first-line {
      font-size: 1.5em;
    }
  }
`

export default function Card({title, text, imageURL, date}) {
    return (
    <StyledCard $color = '#088F8F' className='card'>
      <h2>{title}</h2>
      <p>{text}</p>
      <Figure
      imageURL={imageURL}
      dateCaption={date}
      />
    </StyledCard>
    )
  }