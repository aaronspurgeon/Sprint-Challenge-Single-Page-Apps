import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import LocationList from './components/LocationsList';
import EpisodesList from './components/EpisodesList';
import { Route } from 'react-router-dom';


export default function App() {
  return (
    <main>
      <Route exact path='/' component={Header} />
      <TabNav />
    </main>
  );
}
