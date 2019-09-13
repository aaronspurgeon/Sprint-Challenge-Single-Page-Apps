import React from "react";

export default function CharacterCard({ character }) {
  console.log('character card props', character)
  const { name, location, origin, species, status, image } = character
  return (
    <div>
      <img src={`${image}`} alt={`${name} from Rick and Morty!`}/>
      <h1>{name}</h1>
      <span>{`${species} ${status}`}</span>
      <p>Location: {location.name}</p>
      <p>Origin: {origin.name}</p>
    </div>
  )
}
