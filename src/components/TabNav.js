import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import CharacterList from './CharacterList';
import LocationsList from './LocationsList';
import EpisodesList from './EpisodesList';
import WelcomePage from './WelcomePage';



// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

    
    const panes = [
        { menuItem: 'Home Page', render: () => <Tab.Pane to={'/'} as={NavLink}></Tab.Pane>},
        { menuItem: 'Characters', render: () => <Tab.Pane to={'/characters'} as={NavLink}></Tab.Pane>},
        { menuItem: 'Locations', render: () => <Tab.Pane to={'/locations'} as={NavLink}></Tab.Pane>},
        { menuItem: 'Episodes', render: () => <Tab.Pane to={'/episodes'} as={NavLink}></Tab.Pane>}
    ]

    const TabNav = () => {
        return <Tab panes={panes} />     
        
}

    export default TabNav;

    
   
