import React from "react";

export default function LocationCard({ location }) {
  console.log(location)
  const { name, type, dimension, residents } = location;
  return (
    <div>
      <h1>{name}</h1>
      <p>{`${type} - ${dimension}`}</p>
      <p>{`${residents.length} Residents`}</p>
    </div>
  )
}
