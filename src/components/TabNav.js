import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import CharacterList from "./CharacterList";
import LocationsList from "./LocationsList";
import EpisodesList from "./EpisodesList";
import WelcomePage from "./WelcomePage";
// TODO: Add missing menu/tabs/nav below
// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/
const Nav = props => <NavLink exact {...props} activeClassName="active" />;
const panes = [
    {
        menuItem: (
            <Menu.Item key="home" as={Nav} to={`/`}>
            Home
            </Menu.Item>
        )
    },
    {
        menuItem: <Menu.Item key="characters" as={Nav} to={`/characters`} >Characters</Menu.Item>
    },
    {
        menuItem: <Menu.Item key="locations" as={Nav} to={`/locations`}>Locations</Menu.Item>
    },
    {
        menuItem: <Menu.Item key="episodes" as={Nav} to={`/episodes`}>Episodes</Menu.Item>
    }
];
const TabNav = () => <Tab panes={panes} renderActiveOnly={false} />;
export default TabNav;

    
   
