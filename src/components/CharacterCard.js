import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

export default function CharacterCard({ character }) {
  console.log('character card props', character)
  const { name, location, origin, species, status, image } = character
  return (
    <Card>
      <Image src={`${image}`} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>{`${species} ${status}`}</Card.Meta>
        <Card.Description>Location: {location.name}</Card.Description>
        <Card.Description>Origin: {origin.name}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          Episodes
        </a>
      </Card.Content>
    </Card>
  )
}


