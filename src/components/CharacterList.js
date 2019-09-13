import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacter = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(res => {
          setCharacter(res.data.results)
        })
        .catch(error => {
          console.error('Server Error', error)
        })
    }

    getCharacter();
  }, []);

  return (
    <section className="character-list grid-view">
      {character.map(char => (
        <CharacterCard key={char.id} character={char} />
      ))}
    </section>
  );
}
