import React, { useEffect, useState } from "react";
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList() {
    const [location, setLocation] = useState([]);

    useEffect(() => {
        const getLocation = () => {
            axios
                .get('https://rickandmortyapi.com/api/location/')
                .then(res => {
                    setLocation(res.data.results)
                })
                .catch(error => {
                    console.error('Server Error', error)
                })
        }

        getLocation();
    }, []);

    return (
        <section className="grid-view">
            {location.map(location => (
                <LocationCard key={location.id} location={location} />
            ))}
        </section>
    )
}


