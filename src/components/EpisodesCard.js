import React from "react";
import { Card, Icon, Image } from 'semantic-ui-react'


export default function EpisodesCard({ episodes }) {
    const { episode, name, air_date, characters } = episodes;
    return (
        <Card>
            <Card.Content>
                <Card.Header>{name}</Card.Header>
                <Card.Meta>{episode}</Card.Meta>
                <Card.Description>{`Air Date: ${air_date}`}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a>
                    <Icon name='user' />
                    {`${characters.length} characters`}
                </a>
            </Card.Content>
        </Card>
    )
}