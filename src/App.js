import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import LocationList from './components/LocationsList';
import EpisodesList from './components/EpisodesList';
import WelcomePage from './components/WelcomePage';
import { Route } from 'react-router-dom';
import LocationsList from "./components/LocationsList";


export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters' component={CharacterList} />
      <Route path='/locations' component={LocationsList} />
      <Route path='/episodes' component={EpisodesList} />
    </main>
  );
}
