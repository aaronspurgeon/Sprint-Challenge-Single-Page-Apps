import React from "react";

export default function CharacterCard({ character }) {
  console.log('character card props', character)
  const { name } = character
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}
