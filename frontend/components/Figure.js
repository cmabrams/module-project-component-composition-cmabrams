import React from "react"


export default function Figure({imageURL, dateCaption}) {
  return (
    <figure>
      <img src={imageURL} />
      <figcaption>Picture of the date {dateCaption}</figcaption>
    </figure>
  )
}