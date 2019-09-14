import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'

export default function LocationCard({ location }) {
  console.log(location)
  const { name, type, dimension, residents } = location;
  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Description>
          {`${type} - ${dimension}`}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
          {`${residents.length} Residents`}
      </Card.Content>
    </Card>
  )
}


