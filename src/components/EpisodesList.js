import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodesCard from './EpisodesCard';


export default function EpisodesList() {
    const [episodes, setEpisodes] = useState([])

    useEffect(() => {
        const getEpisodes = () => {
            axios
                .get('https://rickandmortyapi.com/api/episode/')
                .then(res => {
                    setEpisodes(res.data.results);
                })
                .catch(error => {
                    console.error('Server Error', error)
                })
        }

        getEpisodes();
    }, [])

    return (
        <section className="grid-view">
            {episodes.map(episodes => (
                <EpisodesCard key={episodes.id} episodes={episodes} />
            ))}
        </section>
    )
}